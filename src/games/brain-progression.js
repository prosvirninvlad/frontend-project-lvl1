import { random } from '../common.js';
import playBrainGame from '../engine.js';

const MAX_RANDOM_VALUE = 100;
const MIN_PROGRESSION_LENGTH = 5;
const MAX_PROGRESSION_LENGTH = 10;
const GAME_INSTRUCTION = 'What number is missing in the progression?';

function generateRandomProgression() {
  const step = random(MAX_RANDOM_VALUE);
  const first = random(MAX_RANDOM_VALUE);
  const length = random(MAX_PROGRESSION_LENGTH) + MIN_PROGRESSION_LENGTH;
  const progression = new Array(length).fill(0);
  for (let i = 0; i < length; i += 1) {
    progression[i] = first + step * i;
  }
  return progression;
}

function getRandomProgressionItem(progression) {
  const index = random(progression.length);
  return { item: progression[index], index };
}

function getQuestion(progression, secretIndex) {
  return progression.map((item, index) => (index === secretIndex ? '..' : item)).join(' ');
}

function generateGameRound() {
  const progression = generateRandomProgression();
  const { item, index } = getRandomProgressionItem(progression);
  return { question: getQuestion(progression, index), key: item };
}

export default function playBrainProgressionGame() {
  playBrainGame({ instruction: GAME_INSTRUCTION, generateGameRound });
}
