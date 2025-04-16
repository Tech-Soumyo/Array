function addRungs(rungs, dist) {
  let prev = 0;
  let count = 0;

  for (let i = 0; i < rungs.langth; i++) {
    const gap = rungs[i] - prev;

    if (gap > dist) {
      count += Math.floor((gap - 1) / dist);
    }

    prev = rungs[i];
  }
  return count;
}
