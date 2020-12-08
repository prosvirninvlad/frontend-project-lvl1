import { random } from '../common.js';
import playBrainGame from '../engine.js';

const MAX_RANDOM_VALUE = 100;
const GAME_INSTRUCTION = 'Find the greatest common divisor of given numbers.';

function gcd(numberA, numberB) {
  return numberB ? gcd(numberB, numberA % numberB) : numberA;
}

function generateGameRound() {
  const numberA = random(MAX_RANDOM_VALUE);
  const numberB = random(MAX_RANDOM_VALUE);
  return { question: `${numberA} ${numberB}`, key: gcd(numberA, numberB) };
}

export default function playBrainGcdGame() {
  playBrainGame({ instruction: GAME_INSTRUCTION, generateGameRound });
}
