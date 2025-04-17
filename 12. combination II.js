function combination2(candidates, target) {
  const res = [];
  candidates.sort((a, b) => a - b); // Step 1: sort input to handle duplicates

  const backtrack = (start, path, targetLeft) => {
    if (targetLeft === 0) {
      res.push([...path]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue; // Skip duplicates

      if (candidates[i] > targetLeft) break; // Early stopping, no need to go further

      path.push(candidates[i]);
      backtrack(i + 1, path, targetLeft - candidates[i]); // i+1 because we can't reuse
      path.pop(); // backtrack
    }
  };

  backtrack(0, [], target);
  return res;
}
