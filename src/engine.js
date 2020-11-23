const MAX_ROUNDS = 3;

export default async function playGame(hooks) {
  let rounds = 0;
  const data = await hooks.onStarted();
  const play = () => hooks.onRoundChange(data);

  for (; rounds < MAX_ROUNDS; rounds += 1) {
    const round = await play();
    if (!round.passed) {
      hooks.onRoundFailed(data, round);
      break;
    }
    hooks.onRoundPassed(data, round);
  }

  if (rounds === MAX_ROUNDS) {
    hooks.onSucceed(data);
  }
}
