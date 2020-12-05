const MAX_ROUNDS = 3;

function isValidAnswer(answer, key) {
  return key === (typeof key === 'number' ? parseInt(answer, 10) : answer);
}

export default async function playBrainGame({ instruction, cli, generateGameRound }) {
  cli.print('Welcome to the Brain Games!');
  const name = await cli.read('May I have your name?');
  cli.print(`Hello, ${name}`);
  cli.print(instruction);

  for (let rounds = 0; rounds < MAX_ROUNDS; rounds += 1) {
    const { question, key } = generateGameRound();
    const answer = await cli.read(`Question: ${question}\nYour answer:`);
    if (!isValidAnswer(answer, key)) {
      cli.print(`'${answer}' is wrong answer ;(. Correct answer was '${key}'.`);
      cli.print(`Let's try again, ${name}!`);
      return;
    }
    cli.print('Correct!');
  }

  cli.print(`Congratulations, ${name}!`);
}
