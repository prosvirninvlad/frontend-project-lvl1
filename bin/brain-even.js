#! /usr/bin/env node
import cli from '../src/cli.js';
import { isEven, random } from '../src/common.js';
import playBrainGame from '../src/games/brain.game.js';

const MAX_RANDOM_VALUE = 100;

playBrainGame({
  cli,
  instruction: 'Answer "yes" if the number is even, otherwise answer "no".',
  round: () => {
    const number = random(MAX_RANDOM_VALUE);
    return { question: number, key: isEven(number) ? 'yes' : 'no' };
  },
});
