#! /usr/bin/env node
import cli from '../src/cli.js';
import { gcd, random } from '../src/common.js';
import playBrainGame from '../src/games/brain.game.js';

const MAX_RANDOM_VALUE = 100;

playBrainGame({
  cli,
  instruction: 'Find the greatest common divisor of given numbers.',
  round: () => {
    const numberA = random(MAX_RANDOM_VALUE);
    const numberB = random(MAX_RANDOM_VALUE);
    return { question: `${numberA} ${numberB}`, key: gcd(numberA, numberB) };
  },
});
