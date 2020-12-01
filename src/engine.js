const MAX_ROUNDS = 3;

export default async function playGame(hooks) {
  const data = await hooks.onStarted();
  const play = () => hooks.onRoundChange(data);

  for (let rounds = 0; rounds < MAX_ROUNDS; rounds += 1) {
    const round = await play();
    if (!round.passed) {
      hooks.onRoundFailed(data, round);
      return;
    }
    hooks.onRoundPassed(data, round);
  }

  hooks.onSucceed(data);
}
