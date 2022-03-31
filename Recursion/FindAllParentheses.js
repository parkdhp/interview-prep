/*
 * Find All Well-formed Brackets
 *
 * Given a positive integer n, return ALL strings of length 2 * n with well-formed round brackets.
 *
 * Example
 * "n": 3
 *
 * Output:
 * [
 * "((()))",
 * "(()())",
 * "(())()",
 * "()(())",
 * "()()()"
 * ]
 *
 * Any array containing these five strings in any order is a correct output.
 *
 * Notes
 * Order of strings in the returned array is insignificant, e.g. for n = 2 both ["(())", "()()"] and ["()()", "(())"] will be accepted.
 *
 * Constraints:
 * 1 <= n <= 12
 * Only use round brackets. '(' and ')'
 */

const findAllParens = (n) => {
  const output = [];
  const recurse = (leftCount, rightCount, partial) => {
    if (leftCount === n && rightCount === n) {
      output.push(partial);
      return;
    }
    if (leftCount < n) {
      recurse(leftCount + 1, rightCount, partial + "(");
    }
    if (rightCount < leftCount) {
      recurse(leftCount, rightCount + 1, partial + ")");
    }
  };
  recurse(0, 0, "");
  return output;
};

console.log(findAllParens(3));
console.log(findAllParens(4));
console.log(findAllParens(5));
