#! /usr/bin/env node
import { print, read } from '../src/cli.js';

(async () => {
  print('Welcome to the Brain Games!');
  const name = await read('May I have your name?');
  print(`Hello, ${name}!`);
})();
