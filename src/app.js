const $ = (id) => document.getElementById(id);

const tabs = [...document.querySelectorAll('.tab')];
const selectTab = (selected) => {
  tabs.forEach((tab) => {
    const isSelected = tab === selected;
    tab.classList.toggle('active', isSelected);
    tab.setAttribute('aria-selected', String(isSelected));
    tab.tabIndex = isSelected ? 0 : -1;
  });
  document.querySelectorAll('.panel').forEach((panel) => panel.classList.toggle('active', panel.id === selected.dataset.panel));
};
tabs.forEach((button, index) => {
  button.addEventListener('click', () => selectTab(button));
  button.addEventListener('keydown', (event) => {
    const targets = { ArrowLeft: index - 1, ArrowRight: index + 1, Home: 0, End: tabs.length - 1 };
    if (!(event.key in targets)) return;
    event.preventDefault();
    const next = tabs[(targets[event.key] + tabs.length) % tabs.length];
    selectTab(next);
    next.focus();
  });
});

// Returns the trimmed value, or shows a browser validation message if it is blank.
const requireText = (id) => {
  const field = $(id);
  const value = cleanInput(field.value);
  if (!value) {
    field.setCustomValidity('Please enter some text.');
    field.reportValidity();
  }
  return value;
};
['theme', 'message-topic', 'plan-theme'].forEach((id) => {
  $(id).addEventListener('input', () => $(id).setCustomValidity(''));
});

const showResult = (id, text) => {
  $(id).classList.remove('empty');
  $(id).textContent = text;
};

$('idea-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const theme = requireText('theme');
  if (!theme) return;
  showResult('idea-result', buildActivityIdea(theme, $('age-group').value, $('focus').value));
});

let latestMessage = '';
$('message-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const topic = requireText('message-topic');
  if (!topic) return;
  latestMessage = buildParentMessage($('message-type').value, topic, cleanInput($('message-details').value));
  showResult('message-result', latestMessage);
  $('copy-message').textContent = 'Copy draft';
  $('copy-message').disabled = false;
});
$('copy-message').addEventListener('click', async () => {
  if (!latestMessage) return;
  try {
    await navigator.clipboard.writeText(latestMessage);
    $('copy-message').textContent = 'Copied';
  } catch {
    $('message-result').textContent = latestMessage + '\n\n(Clipboard access was unavailable. Select and copy the text above.)';
  }
});

$('planner-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const theme = requireText('plan-theme');
  if (!theme) return;
  showResult('plan-result', buildSessionOutline(theme, $('duration').value));
});
