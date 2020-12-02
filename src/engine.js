import { isNumber } from './common.js';

const MAX_ROUNDS = 3;

function isValidAnswer(answer, key) {
  return key === (isNumber(key) ? parseInt(answer, 10) : answer);
}

export default async function playBrainGame({ instruction, cli, generateGameRound }) {
  function printGameName() {
    cli.print('Welcome to the Brain Games!');
  }

  function printGameUserName(name) {
    cli.print(`Hello, ${name}`);
  }

  function printGameInstruction() {
    cli.print(instruction);
  }

  function readGameUserName() {
    return cli.read('May I have your name?');
  }

  function printGameSucceedMessage(name) {
    cli.print(`Congratulations, ${name}!`);
  }

  function readUserQuestionAnswer(question) {
    return cli.read(`Question: ${question}\nYour answer:`);
  }

  function printGameRoundPassedMessage() {
    cli.print('Correct!');
  }

  function printGameRoundFailedMessage(answer, key) {
    cli.print(`'${answer}' is wrong answer ;(. Correct answer was '${key}'.`);
  }

  function printGameFailedMessage(name) {
    cli.print(`Let's try again, ${name}!`);
  }

  printGameName();
  const name = await readGameUserName();
  printGameUserName(name);
  printGameInstruction();

  for (let rounds = 0; rounds < MAX_ROUNDS; rounds += 1) {
    const { question, key } = generateGameRound();
    const answer = await readUserQuestionAnswer(question);
    if (!isValidAnswer(answer, key)) {
      printGameRoundFailedMessage(answer, key);
      printGameFailedMessage(name);
      return;
    }
    printGameRoundPassedMessage();
  }

  printGameSucceedMessage(name);
}
