#! /usr/bin/env node
import cli, { read } from '../src/cli.js';
import playBrainGame from '../src/games/brain.game.js';

const MIN_RANDOM_VALUE = 1;
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

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

playBrainGame({
  cli,
  instruction: 'What is the result of the expression?',
  round: () => {
    const numberA = random(MIN_RANDOM_VALUE, MAX_RANDOM_VALUE);
    const numberB = random(MIN_RANDOM_VALUE, MAX_RANDOM_VALUE);
    const operator = OPERATORS[random(0, OPERATORS.length)];
    const answer = parseInt(read(`Question: ${numberA} ${operator} ${numberB}\nYour answer:`), 10);
    const key = OPERATORS_MAP[operator](numberA, numberB);
    return { answer, key, passed: answer === key };
  },
});
