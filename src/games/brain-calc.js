import { random } from '../common.js';
import playBrainGame from '../engine.js';

const MAX_RANDOM_VALUE = 100;
const ADD_OP_SIGN = '+';
const SUB_OP_SIGN = '-';
const MUL_OP_SIGN = '*';
const OPERATIONS = [
  { operator: ADD_OP_SIGN, evaluate: (a, b) => a + b },
  { operator: SUB_OP_SIGN, evaluate: (a, b) => a - b },
  { operator: MUL_OP_SIGN, evaluate: (a, b) => a * b },
];
const GAME_INSTRUCTION = 'What is the result of the expression?';

function getRandomOperation() {
  return OPERATIONS[random(0, OPERATIONS.length)];
}

function generateGameRound() {
  const numberA = random(MAX_RANDOM_VALUE);
  const numberB = random(MAX_RANDOM_VALUE);
  const { operator, evaluate } = getRandomOperation();
  return {
    question: `${numberA} ${operator} ${numberB}`,
    key: evaluate(numberA, numberB),
  };
}

export default function playBrainCalcGame(cli) {
  playBrainGame({ cli, instruction: GAME_INSTRUCTION, generateGameRound });
}
