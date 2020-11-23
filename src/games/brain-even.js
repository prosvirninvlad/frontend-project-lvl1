import { isEven, random } from '../common.js';
import playBrainGame from './index.js';

const MAX_RANDOM_VALUE = 100;
const GAME_INSTRUCTION = 'Answer "yes" if the number is even, otherwise answer "no".';

function generateGameRound() {
  const number = random(MAX_RANDOM_VALUE);
  return { question: number, key: isEven(number) ? 'yes' : 'no' };
}

export default function playBrainEvenGame(cli) {
  playBrainGame({ cli, instruction: GAME_INSTRUCTION, generateGameRound });
}
