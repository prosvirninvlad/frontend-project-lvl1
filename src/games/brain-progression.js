import { random } from '../common.js';
import playBrainGame from './index.js';

const MAX_RANDOM_VALUE = 100;
const MIN_PROGRESSION_LENGTH = 5;
const MAX_PROGRESSION_LENGTH = 10;
const GAME_INSTRUCTION = 'What number is missing in the progression?';

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

function generateGameRound() {
  const [key, question] = generateRandomProgression();
  return { question, key };
}

export default function playBrainProgressionGame(cli) {
  playBrainGame({ cli, instruction: GAME_INSTRUCTION, generateGameRound });
}
