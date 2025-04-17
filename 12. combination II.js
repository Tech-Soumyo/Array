function combination2(candidates, target) {
  const res = [];
  candidates.sort((a, b) => a - b);

  const backTrack = (start, path, targetLeft) => {
    if (targetLeft === 0) {
      res.push([...path]);
      return;
    }

    for (i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;

      if (candidates[i] > targetLeft) break;

      path.push(candidates[i]);
      backTrack(i + 1, path, targetLeft - candidates[i]);
      path.pop();
    }
  };

  backTrack(0, [], target);
  return res;
}
