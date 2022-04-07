/* Letter Case Permutation
 * Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.
 *
 * Return a list of all possible strings we could create. You can return the output in any order.
 *
 * Example 1:
 * Input: S = "a1b2"
 * Output: ["a1b2", "a1B2", "A1b2", "A1B2"]
 *
 * Constraints:
 * s will be a string with length between 1 and 12
 * s will consist only of letters or digits
 */

const letterCasePermutation = (s) => {
  const output = [];
  lcHelper(s, 0, "", output);
  return output;
};

const lcHelper = (s, index, result, output) => {
  if (s.length === index) {
    output.push(result);
    return;
  }
  if (s[index].toUpperCase() !== s[index].toLowerCase()) {
    const currChar = s[index];
    lcHelper(s, index + 1, result + currChar.toLowerCase(), output);
    lcHelper(s, index + 1, result + currChar.toUpperCase(), output);
  } else {
    lcHelper(s, index + 1, result + s[index], output);
  }
};

console.log(letterCasePermutation("a1b2"));


/* Letter Case Permutation 2
 * Given a string S, we can transform at most one upper case letter.
 *
 * Return a list of all possible strings we could create. You can return the output in any order.
 *
 * Example 1:
 * Input: S = "a1b2"
 * Output: ["a1b2", "a1B2", "A1b2"]
 *
 * Constraints:
 * s will be a string with length between 1 and 12
 * s will consist only of letters or digits
 */

const letterCasePerm = (s) => {
  const output = [];
  recurse(s, "", 0, 0, output);
  return output;
};

const recurse = (s, partial, i, capitalCount, output) => {
  if (capitalCount > 1) {
    return;
  }
  if (i === s.length) {
    return output.push(partial);
  }
  if (s[i].toUpperCase() !== s[i].toLowerCase()) {
    const currChar = s[i];
    recurse(s, partial + currChar.toLowerCase(), i + 1, capitalCount, output);
    recurse(s, partial + currChar.toUpperCase(), i + 1, capitalCount + 1, output);
  } else {
    recurse(s, partial + s[i], i + 1, capitalCount, output);
  }
};

console.log(letterCasePerm("a1b1"));
