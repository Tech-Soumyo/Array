function maxNumber(num, change) {
  const arr = num.split("");

  let muted = false;

  for (let i = 0; i < num.length; i++) {
    const original = parseInt(arr[i]);
    const mapped = change[original];

    if (mapped > original) {
      arr[i] = mapped.toString();
      muted = true;
    } else if (mapped === original) {
      if (muted) arr[i] = mapped.toString();
    } else {
      if (muted) break;
    }
  }

  return arr.join("");
}
