#! /usr/bin/env node
import cli, { read } from '../src/cli.js';
import playBrainGame from '../src/games/brain.game.js';

const MIN_RANDOM_VALUE = 1;
const MAX_RANDOM_VALUE = 100;

const isEven = (number) => !(number % 2);
const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

playBrainGame({
  cli,
  instruction: 'Answer "yes" if the number is even, otherwise answer "no".',
  round: () => {
    const number = random(MIN_RANDOM_VALUE, MAX_RANDOM_VALUE);
    const answer = read(`Question: ${number}\nYour answer:`).toLowerCase();
    const key = isEven(number) ? 'yes' : 'no';
    return { answer, key, passed: answer === key };
  },
});
