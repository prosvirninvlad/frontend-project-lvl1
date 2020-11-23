import { read } from '../cli.js';
import { isNumber } from '../common.js';
import playGame from '../engine.js';

function isValidAnswer(answer, key) {
  return key === (isNumber(key) ? parseInt(answer, 10) : answer);
}

export default function playBrainGame({ instruction, cli, generateGameRound }) {
  async function handleOnStarted() {
    cli.print('Welcome to the Brain Games!');
    const name = await cli.read('May I have your name?');
    cli.print(`Hello, ${name}`);
    cli.print(instruction);
    return name;
  }

  function handleOnSucceed(name) {
    cli.print(`Congratulations, ${name}!`);
  }

  async function handleOnRoundChange() {
    const { question, key } = generateGameRound();
    const answer = await read(`Question: ${question}\nYour answer:`);
    return { answer, key, passed: isValidAnswer(answer, key) };
  }

  function handleOnRoundPassed() {
    cli.print('Correct!');
  }

  function handleOnRoundFailed(name, { answer, key }) {
    cli.print(`'${answer}' is wrong answer ;(. Correct answer was '${key}'.`);
    cli.print(`Let's try again, ${name}!`);
  }

  playGame({
    onStarted: handleOnStarted,
    onSucceed: handleOnSucceed,
    onRoundChange: handleOnRoundChange,
    onRoundPassed: handleOnRoundPassed,
    onRoundFailed: handleOnRoundFailed,
  });
}
