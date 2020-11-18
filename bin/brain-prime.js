#! /usr/bin/env node
import cli, { read } from '../src/cli.js';
import { isPrime, random } from '../src/common.js';
import playBrainGame from '../src/games/brain.game.js';

const MAX_RANDOM_VALUE = 100;

playBrainGame({
  cli,
  instruction: 'Answer "yes" if the number is prime, otherwise answer "no".',
  round: () => {
    const number = random(MAX_RANDOM_VALUE);
    const answer = read(`Question: ${number}\nYour answer:`).toLowerCase();
    const key = isPrime(number) ? 'yes' : 'no';
    return { answer, key, passed: answer === key };
  },
});
