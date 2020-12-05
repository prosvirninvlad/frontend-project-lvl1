import { print, read } from './cli.js';

const MAX_ROUNDS = 3;

function isValidAnswer(answer, key) {
  return key === (typeof key === 'number' ? parseInt(answer, 10) : answer);
}

export default async function playBrainGame({ instruction, generateGameRound }) {
  print('Welcome to the Brain Games!');
  const name = await read('May I have your name?');
  print(`Hello, ${name}`);
  print(instruction);

  for (let rounds = 0; rounds < MAX_ROUNDS; rounds += 1) {
    const { question, key } = generateGameRound();
    const answer = await read(`Question: ${question}\nYour answer:`);
    if (!isValidAnswer(answer, key)) {
      print(`'${answer}' is wrong answer ;(. Correct answer was '${key}'.`);
      print(`Let's try again, ${name}!`);
      return;
    }
    print('Correct!');
  }

  print(`Congratulations, ${name}!`);
}
