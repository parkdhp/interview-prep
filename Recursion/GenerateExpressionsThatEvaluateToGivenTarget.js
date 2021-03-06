/** Generate All Possible Expressions That Evaluate To The Given Target Value
 *
 * Given a string s that consists of digits ("0".."9") and target, a non-negative integer, find all expressions that
 * can be built from string s that evaluate to the target.
 *
 * - When building expressions, you have to insert one of the following operators between each pair of consecutive
 *   characters in s: join or * or +. For example, by inserting different operators between the two characters of
 *   string "12" we can get either 12 (1 joined with 2 or "12") or 2 ("1*2") or 3 ("1+2").
 *
 * - Other operators such as - or ÷ are NOT supported.
 *
 * - Expressions that evaluate to the target but only utilize a part of s do not count: entire s has to be consumed.
 *
 * - Precedence of the operators is conventional: join has the highest precedence, * – medium and + has the lowest
 *   precedence. For example, 1 + 2 * 34 = (1 + (2 * (34))) = 1 + 68 = 69.
 *
 * You have to return ALL expressions that can be built from string s and evaluate to the target.
 *
 * Example
 * "s": "202",
 * "target": 4
 *
 * Output:
 * ["2+0+2", "2+02", "2*02"]
 * Same three strings in any other order are also a correct output.
 *
 * Notes
 * Order of strings in the output does not matter.
 * If there are no expressions that evaluate to target, return an empty list.
 * Returned strings must not contain spaces or any characters other than "0",..., "9", "*", "+".
 * All returned strings must start and end with a digit.
 *
 * Constraints:
 * 1 <= length of s <= 13
 * 1 <= target <= 10^13
 */

const generateExpressions = (s, target) => {
  const output = [];
  const recurse = (i, partial, currTotal, prev) => {
    if (i === s.length && currTotal === target) {
      output.push(partial);
      return;
    }

    for (let j = i; j < s.length; j++) {
      const currNumString = s.substring(i, j + 1);
      const currNumValue = +currNumString;

      if (i === 0) {
        recurse(j + 1, `${partial}${currNumString}`, currNumValue, currNumValue);
      } else {
        // add
        recurse(j + 1, `${partial}+${currNumString}`, currTotal + currNumValue, currNumValue);
        // multiply
        recurse(j + 1, `${partial}*${currNumString}`, (currTotal - prev) + (prev * currNumValue), prev * currNumValue);
      }
    }
  };
  recurse(0, "",0,0);
  return output;
};

console.log(generateExpressions("202", 4));
