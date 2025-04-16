function splitPainting(s) {
  const mp = new Map();
  const n = s.length;

  for (let i = 0; i < n; i++) {
    mp.set(s[i][0], mp.get(s[i][0] || 0) + s[i][2]);
    mp.set(s[i][1], mp.get(s[i][1] || 0) - s[i][2]);
  }

  let color = 0,
    prev = -1;
  const res = [];

  const sortedMap = Array.from(mp.entries()).sort((a, b) => a[0] - b[0]);

  for (const [point, change] of sortedMap) {
    if (prev !== -1 && color !== 0) {
      res.push([prev, point, color]);
    }
    color += change;
    prev = point;
  }

  return res;
}
