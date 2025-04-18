const reArrangeArray = (nums) => {
  nums.sort((a, b) => a - b);
  let mid = Math.floor((nums.length + 1) / 2);
  const res = [nums.length];

  let left = 0;
  let right = mid;

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      res[i] = nums[left++];
    } else {
      res[i] = nums[right++];
    }
  }

  return res;
};
