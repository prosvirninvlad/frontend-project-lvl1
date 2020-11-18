#! /usr/bin/env node
import cli, { readInt } from '../src/cli.js';
import { random } from '../src/common.js';
import playBrainGame from '../src/games/brain.game.js';

const MAX_RANDOM_VALUE = 100;
const MIN_PROGRESSION_LENGTH = 5;
const MAX_PROGRESSION_LENGTH = 10;

function generateRandomProgression() {
  const step = random(MAX_RANDOM_VALUE);
  const length = random(MAX_PROGRESSION_LENGTH) + MIN_PROGRESSION_LENGTH;
  const progression = new Array(length).fill(0);
  for (let i = 0, item = random(MAX_RANDOM_VALUE); i < length; i += 1, item += step) {
    progression[i] = item;
  }
  const hiddenIndex = random(length);
  const hiddenValue = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  return [hiddenValue, progression.join(' ')];
}

playBrainGame({
  cli,
  instruction: 'What number is missing in the progression?',
  round: async () => {
    const [key, progression] = generateRandomProgression();
    const answer = await readInt(`Question: ${progression}\nYour answer:`);
    return { answer, key: 0, passed: answer === key };
  },
});
