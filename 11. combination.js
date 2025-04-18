function combination(candidates, target) {
  const res = [];

  const backeTrack = (start, path, sum) => {
    if (sum === target) {
      res.push([...path]);
      return;
    }

    if (sum > target) {
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      backeTrack(i, path, sum + candidates[i]);
      path.pop();
    }
  };

  backeTrack(0, [], 0);
  return res;
}
