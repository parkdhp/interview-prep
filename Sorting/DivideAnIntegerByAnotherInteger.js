/* Divide an Integer by another Integer
 *
 * Given two integers find their quotient, i.e. the integer result of dividing the first by the second
 *
 * Example:
 * {
 *   a: 5,
 *   b: 2
 * }
 *
 * Output:
 * 2
 */

const divideInteger = (a, b) => {
  let pos = true;
  if (a < 0) {
    a = -a;
    pos = !pos;
  }
  if (b < 0) {
    b = -b;
    pos = !pos;
  }

  let ans = 0;
  let shifts = 0;
  while (b << (shifts + 1) < a) {
    shifts += 1;
  }
  while (a >= b) {
    while ((b << shifts) > a) {
      shifts -= 1;
    }
    ans += 1 << shifts;
    a -= b << shifts;
  }
  return pos? ans:-ans;
};

console.log(divideInteger(20,2));
