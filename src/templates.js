// Pure text builders, shared by the page (app.js) and the tests.
const ideaTemplates = {
  'Language and storytelling': (theme, age) => `Invite children aged ${age} to explore “${theme}” through a short picture-led story.\n\nTry this:\n1. Introduce 3–4 real objects or pictures related to ${theme}.\n2. Invite children to describe what they notice.\n3. Co-create a simple story with a beginning, middle, and end.\n4. Let children draw or act out one part.\n\nMaterials: picture cards, safe objects, paper, crayons.\nTeacher reflection: Which words, questions, or ideas captured children's interest?`,
  'Early mathematics': (theme, age) => `Create a hands-on “${theme}” sorting and counting invitation for children aged ${age}.\n\nTry this:\n1. Offer a small collection of safe, age-appropriate objects or picture cards.\n2. Invite children to sort by one visible feature.\n3. Count each group together and compare more/less.\n4. Ask children to invent a new way to sort.\n\nKeep small objects away from children who may mouth them. Adapt the challenge to each child's development.`,
  'Creative arts': (theme, age) => `Offer an open-ended art invitation inspired by “${theme}” for children aged ${age}.\n\nTry this:\n1. Show a few images or natural materials connected to ${theme}.\n2. Provide paper, washable colours, and age-safe tools.\n3. Invite children to create without a required finished result.\n4. Ask each child to share something about their work.\n\nFocus on exploration and expression rather than copying a model.`,
  'Science and exploration': (theme, age) => `Set up a supervised observation station around “${theme}” for children aged ${age}.\n\nTry this:\n1. Ask: “What do you notice?” and “What do you wonder?”\n2. Let children observe safe materials using their senses.\n3. Record predictions with drawings or simple marks.\n4. Revisit the observations and discuss what changed.\n\nUse only safe materials and supervise the activity throughout.`,
  'Social-emotional learning': (theme, age) => `Use “${theme}” as a prompt for a feelings and cooperation circle for children aged ${age}.\n\nTry this:\n1. Share a short fictional story connected to the theme.\n2. Ask how a character might feel and why.\n3. Invite children to suggest kind or helpful responses.\n4. Practise one simple turn-taking or teamwork activity.\n\nAccept different answers and never require a child to share personal experiences.`
};

const messageOpenings = {
  event: 'We are pleased to share an upcoming school event',
  reminder: 'A friendly reminder for our school community',
  learning: 'A quick learning update from school',
  closure: 'Please note this school schedule update'
};

const cleanInput = (value) => String(value ?? '').trim();

const buildActivityIdea = (theme, age, focus) => ideaTemplates[focus](theme, age);

const buildParentMessage = (type, topic, details = '') => {
  // Do not add a full stop if the topic already ends with punctuation.
  const sentenceEnd = /[.!?…]$/.test(topic) ? '' : '.';
  return `Dear Parents,\n\n${messageOpenings[type]}: ${topic}${sentenceEnd}${details ? `\n\n${details}` : ''}\n\nPlease contact the school through the usual official channel if you have any questions.\n\nWarm regards,\nThe School Team`;
};

const buildSessionOutline = (theme, duration) => `Learning session: ${theme}\nDuration: ${duration}\n\n1. Welcome and curiosity prompt (3–5 min)\nIntroduce ${theme} with a question, image, object, or short story.\n\n2. Explore together (about half the session)\nOffer safe materials and let children investigate, discuss, create, or collaborate.\n\n3. Share and reflect (5 min)\nInvite children to share a discovery or show their work.\n\n4. Teacher reflection\nWhat interested the children? What would you adapt next time?\n\nTeacher review required: adjust timing, materials, accessibility, and supervision for your group.`;

if (typeof module !== 'undefined') {
  module.exports = { ideaTemplates, messageOpenings, cleanInput, buildActivityIdea, buildParentMessage, buildSessionOutline };
}
