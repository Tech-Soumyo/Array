const maxMatrixSum = (matrix) => {
  let minAbs = Infinity;
  let total = 0;
  let nagativeCount = 0;

  for (let row of matrix) {
    for (let val of row) {
      total += Math.abs(val);
      minAbs = Math.min(minAbs, Math.abs(val));

      if (val < 0) {
        nagativeCount++;
      }
    }
  }

  if (nagativeCount % 2 === 0) {
    return total;
  } else {
    return total - 2 * minAbs;
  }
};
