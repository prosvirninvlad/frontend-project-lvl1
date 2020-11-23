import playGame from './index.js';

export default function playBrainGame({ instruction, cli, round: onRoundChange }) {
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
    onRoundChange,
    onRoundPassed: () => {
      cli.print('Correct!');
    },
    onRoundFailed: (name, { answer, key }) => {
      cli.print(`'${answer}' is wrong answer ;(. Correct answer was '${key}'.`);
      cli.print(`Let's try again, ${name}!`);
    },
  });
}
