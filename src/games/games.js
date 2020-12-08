import { print, read } from '../cli.js';

export default async function playBrainGcdGame() {
  print('Welcome to the Brain Games!');
  const name = await read('May I have your name?');
  print(`Hello, ${name}!`);
}
