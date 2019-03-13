module.exports = function getZerosCount(number, base) {
  // your implementation
  let j = base;
  let i = 2;
  let result = Number.MAX_VALUE;
  for (i; i <= base; i++) {
    if (j % i === 0) {
      let p = 0;
      while (j % i === 0) {
        j = j / i;
        p++;
      }
      let c = 0;
      let z = Math.floor(number / i);
      while (z > 0) {
        c = c + z;
        z = Math.floor(z / i);
      }
      let b = Math.floor(c / p)
      result = Math.min(result, b)
    }
  }
  return result;
}