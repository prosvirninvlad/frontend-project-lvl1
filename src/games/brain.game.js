import { read } from '../cli.js';
import { isNumber } from '../common.js';
import playGame from './index.js';

function isValidAnswer(answer, key) {
  return key === (isNumber(key) ? parseInt(answer, 10) : answer);
}

export default function playBrainGame({ instruction, cli, round }) {
  playGame({
    onStarted: async () => {
      cli.print('Welcome to the Brain Games!');
      const name = await cli.read('May I have your name?');
      cli.print(`Hello, ${name}`);
      cli.print(instruction);
      return name;
    },
    onSucceed: (name) => {
      cli.print(`Congratulations, ${name}!`);
    },
    onRoundChange: async () => {
      const { question, key } = round();
      const answer = await read(`Question: ${question}\nYour answer:`);
      return { answer, key, passed: isValidAnswer(answer, key) };
    },
    onRoundPassed: () => {
      cli.print('Correct!');
    },
    onRoundFailed: (name, { answer, key }) => {
      cli.print(`'${answer}' is wrong answer ;(. Correct answer was '${key}'.`);
      cli.print(`Let's try again, ${name}!`);
    },
  });
}
