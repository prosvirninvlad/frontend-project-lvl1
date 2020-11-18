#! /usr/bin/env node
import cli, { read } from '../src/cli.js';
import { gcd, random } from '../src/common.js';
import playBrainGame from '../src/games/brain.game.js';

const MAX_RANDOM_VALUE = 100;

playBrainGame({
  cli,
  instruction: 'Find the greatest common divisor of given numbers.',
  round: () => {
    const numberA = random(MAX_RANDOM_VALUE);
    const numberB = random(MAX_RANDOM_VALUE);
    const answer = parseInt(read(`Question: ${numberA} ${numberB}\nYour answer:`), 10);
    const key = gcd(numberA, numberB);
    return { answer, key, passed: answer === key };
  },
});
