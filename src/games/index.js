export default async function playGame(hooks) {
  const data = await hooks.onStarted();
  const change = () => hooks.onRoundChange(data);

  let round = change();
  while (round) {
    const result = await round();
    if (!result.passed) {
      hooks.onRoundFailed(data, result);
      break;
    }
    hooks.onRoundPassed(data, result);
    round = change();
  }

  if (!round) {
    hooks.onSucceed(data);
  }
}
