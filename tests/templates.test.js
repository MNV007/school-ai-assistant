const test = require('node:test');
const assert = require('node:assert/strict');
const t = require('../src/templates.js');

test('cleanInput trims text and treats blank input as empty', () => {
  assert.equal(t.cleanInput('  water  '), 'water');
  assert.equal(t.cleanInput(' \n\t '), '');
  assert.equal(t.cleanInput(undefined), '');
});

test('every learning focus includes the theme and age group', () => {
  for (const focus of Object.keys(t.ideaTemplates)) {
    const idea = t.buildActivityIdea('water', '3–4 years', focus);
    assert.match(idea, /water/);
    assert.match(idea, /3–4 years/);
  }
});

test('every message type builds a complete draft', () => {
  for (const [type, opening] of Object.entries(t.messageOpenings)) {
    const message = t.buildParentMessage(type, 'Reading morning');
    assert.ok(message.startsWith('Dear Parents,'));
    assert.ok(message.includes(`${opening}: Reading morning.\n`));
    assert.ok(message.endsWith('The School Team'));
  }
});

test('message does not double punctuation', () => {
  for (const topic of ['Sports day!', 'Can you join?', 'Library closed.']) {
    assert.ok(t.buildParentMessage('event', topic).includes(`${topic}\n`));
  }
});

test('message includes details only when given', () => {
  assert.ok(t.buildParentMessage('event', 'Picnic', 'Bring a hat').includes('\n\nBring a hat\n\n'));
  assert.ok(t.buildParentMessage('event', 'Picnic').includes('Picnic.\n\nPlease contact'));
});

test('session outline includes the theme and duration', () => {
  const outline = t.buildSessionOutline('tiny garden', '25 minutes');
  assert.match(outline, /Learning session: tiny garden/);
  assert.match(outline, /Duration: 25 minutes/);
});
