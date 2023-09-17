//your JS code here. If required.
function secondHighest(arr) {
  if (arr.length < 2 || new Set(arr).size === 1) {
    return -Infinity;
  }

  let max = -Infinity;
  let secondMax = -Infinity;

  for (const value of arr) {
    if (value > max) {
      secondMax = max;
      max = value;
    } else if (value > secondMax && value < max) {
      secondMax = value;
    }
  }

  return secondMax;
}