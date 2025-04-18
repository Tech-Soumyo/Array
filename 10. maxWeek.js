function maxweek(milestones) {
  let total = milestones.reduce((a, b) => a + b, 0);
  let maxVal = Math.max(...milestones);

  if (maxVal <= total - maxVal) {
    return total;
  } else {
    return 2 * (total - maxVal) + 1;
  }
}
