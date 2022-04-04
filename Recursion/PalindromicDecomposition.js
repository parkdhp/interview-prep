/*
 * Palindromic Decomposition Of A String
 * Find all palindromic decompositions of a given string s.
 *
 * A palindromic decomposition of string is a decomposition of the string into substrings, such that all those substrings are valid palindromes.
 *
 * Example:
 * "s": "abracadabra"
 *
 * Output:
 * ["a|b|r|a|c|ada|b|r|a", "a|b|r|aca|d|a|b|r|a", "a|b|r|a|c|a|d|a|b|r|a"]
 *
 * Notes
 * Any string is its own substring.
 * Output should include ALL possible palindromic decompositions of the given string.
 * Order of decompositions in the output does not matter.
 * To separate substrings in the decomposed string, use | as a separator.
 * Order of characters in a decomposition must remain the same as in the given string. For example, for s = "ab", return ["a|b"] and not ["b|a"].
 * Strings in the output must not contain whitespace. For example, ["a |b"] or ["a| b"] is incorrect.
 *
 * Constraints:
 * 1 <= length of s <= 20
 * s only contains lowercase English letters.
 */

/**
 * @param {str} s
 * @return {list_str}
 */

const generatePalindromicDecomposition = (s) => {
  const output = [];
  recurse(s, 0, "", output);
  return output;
};

const recurse = (s, i, partial, output) => {
  if (i === s.length) {
    output.push(partial);
    return;
  }
  for (let j = i + 1; j <= s.length; j++) {
    if (isPalindrome(s, i, j - 1)) {
      let currString = s.substring(i, j);
      const tmp = [];
      if (partial) {
        tmp.push(partial);
      }
      if (currString) {
        tmp.push(currString);
      }
      recurse(s, j, tmp.join("|"), output);
    }
  }
};

const isPalindrome = (s, start, end) => {
  if (s.length === 0) return false;
  while (start < end) {
    if (s[start++] !== s[end--]) {
      return false;
    }
  }
  return true;
};

console.log(generatePalindromicDecomposition("abracadabra"));
