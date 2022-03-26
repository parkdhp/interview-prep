/*
 * Dutch National Flag
 *
 * Given some balls of three colors arranged in a line, rearrange them such that all the red balls go first, then green and then blue ones.
 *
 * Do rearrange the balls in place. A solution that simply counts colors and overwrites the array is not the one we are looking for.
 *
 * This is an important problem in search algorithms theory proposed by Dutch computer scientist Edsger Dijkstra. Dutch national flag has three colors (albeit different from ones used in this problem).
 *
 * Example
 * "balls": ["G", "B", "G", "G", "R", "B", "R", "G"]
 *
 * Output:
 * ["R", "R", "G", "G", "G", "G", "B", "B"]
 * There are a total of 2 red, 4 green and 2 blue balls. In this order they appear in the correct output.
 *
 * Notes
 * Constraints:
 * 1 <= n <= 100000
 * Do this in ONE pass over the array, NOT TWO passes
 * Solution is only allowed to use constant extra memory
 */

const dutchFlagSort = (balls) => {
  let i = 0;
  let j = 0;
  let k = balls.length - 1;

  // 0 -> i = R
  // i -> j = G
  // j -> k = unknown
  // k -> end = B
  while (j - 1 < k) {
    if (balls[j] === "R") {
      [balls[i], balls[j]] = [balls[j], balls[i]];
      i++;
      j++;
    } else if (balls[j] === "G") {
      j++;
    } else {
      [balls[k], balls[j]] = [balls[j], balls[k]];
      k--;
    }
  }

  return balls;
};
