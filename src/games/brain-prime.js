import { random } from '../common.js';
import playBrainGame from '../engine.js';

const MAX_RANDOM_VALUE = 100;
const GAME_INSTRUCTION = 'Answer "yes" if the number is prime, otherwise answer "no".';

function dividesBy(number, divider) {
  return !(number % divider);
}

function isPrime(number) {
  if (number <= 3) {
    return number > 1;
  }
  if (dividesBy(number, 2) || dividesBy(number, 3)) {
    return false;
  }
  for (let i = 5; i * i <= number; i += 6) {
    if (dividesBy(number, i) || dividesBy(number, i + 2)) {
      return false;
    }
  }
  return true;
}

function generateGameRound() {
  const number = random(MAX_RANDOM_VALUE);
  return { question: number, key: isPrime(number) ? 'yes' : 'no' };
}

export default function playBrainPrimeGame(cli) {
  playBrainGame({ cli, instruction: GAME_INSTRUCTION, generateGameRound });
}
