#! /usr/bin/env node
import cli from '../src/cli.js';
import { random } from '../src/common.js';
import playBrainGame from '../src/games/brain.game.js';

const MAX_RANDOM_VALUE = 100;
const ADD_OP_SIGN = '+';
const SUB_OP_SIGN = '-';
const MUL_OP_SIGN = '*';
const OPERATORS = [ADD_OP_SIGN, SUB_OP_SIGN, MUL_OP_SIGN];
const OPERATORS_MAP = {
  [ADD_OP_SIGN]: (numberA, numberB) => numberA + numberB,
  [SUB_OP_SIGN]: (numberA, numberB) => numberA - numberB,
  [MUL_OP_SIGN]: (numberA, numberB) => numberA * numberB,
};

playBrainGame({
  cli,
  instruction: 'What is the result of the expression?',
  round: () => {
    const numberA = random(MAX_RANDOM_VALUE);
    const numberB = random(MAX_RANDOM_VALUE);
    const operator = OPERATORS[random(0, OPERATORS.length)];
    return {
      question: `${numberA} ${operator} ${numberB}`,
      key: OPERATORS_MAP[operator](numberA, numberB),
    };
  },
});
