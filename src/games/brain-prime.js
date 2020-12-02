import { isPrime, random } from '../common.js';
import playBrainGame from '../engine.js';

const MAX_RANDOM_VALUE = 100;
const GAME_INSTRUCTION = 'Answer "yes" if the number is prime, otherwise answer "no".';

function generateGameRound() {
  const number = random(MAX_RANDOM_VALUE);
  return { question: number, key: isPrime(number) ? 'yes' : 'no' };
}

export default function playBrainPrimeGame(cli) {
  playBrainGame({ cli, instruction: GAME_INSTRUCTION, generateGameRound });
}
