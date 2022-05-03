/*
 * Jump Game
 * Given a list of maximum jump lengths from different houses, determine if you can reach the last house in one or more
 * jumps starting from the first one.
 *
 * Maximum jump length of 2 from a house, for example, means that you can either jump to the next house or to the one
 * after next.
 *
 * Example 1
 * Input:
 * "maximum_jump_lengths": [2, 3, 1, 0, 4, 7]
 * Output:
 * 1
 *
 * Example 2
 * Input:
 * "maximum_jump_lengths": [3, 1, 1, 0, 2, 4]
 * Output:
 * 0
 * You cannot make it past house at index 3. Maximum jump length of 0 from that house means that you cannot jump further
 * from it.
 *
 * Constraints:
 * 0 <= jump length <= 10^5
 * 1 <= number of houses <= 10^5
 */

// recursive solution
const jumpGameRec = (maxJumpLengths) => {
  const recurse = (i) => {
    if (i === maxJumpLengths.length - 1) return 1;
    for (let j = 1; j <= maxJumpLengths[i]; j++) {
      if (j < maxJumpLengths.length && recurse(i + j)) {
        return 1;
      }
    }
    return 0;
  };
  return recurse(0);
};
// T: O(2^n)
// In the worst case, there will be 2n-2 ways. Apart from the first and last index, there are two choices for every index
// S: O(n)
// Input takes O(n).
// Auxiliary space used: O(n). In the worst case, the maximum recursive stack size would be n.
// Output takes O(1).
// Total space complexity: O(n) + O(n) + O(1) = O(n).
console.log(jumpGameRec([2, 3, 1, 0, 4, 7]));

// recursive memoized
const jumpGameMemo = (maxJumpLengths) => {
  // Initialize by -1. -1 denotes unknown, 0 denotes bad, 1 denotes good.
  const memo = new Array(maxJumpLengths.length).fill(-1);
  const recurse = (i) => {
    if (i === maxJumpLengths.length - 1) return 1;
    for (let j = 1; j <= maxJumpLengths[i]; j++) {
      if (j < maxJumpLengths.length) {
        if (memo[i + j] === -1) {
          memo[i + j] = recurse(i + j);
        }
        if (memo[i + j]) return 1;
      }
    }
    return 0;
  };
  return recurse(0);
};
// T: O(n^2)
// In the worst case, for each index, we iterate all its succeeding indices to find if at least one is good.
// S: O(n)
// Input takes O(n).
// Auxiliary space used: O(n). We use an additional array of size n to store the results.
// Output takes O(1).
// Total space complexity: O(n) + O(n) + O(1) = O(n).
console.log(jumpGameMemo([2, 3, 1, 0, 4, 7]));
console.log(jumpGameMemo([3, 1, 1, 0, 2, 4]));

// iterative DP
const jumpGameDP = (maxJumpLengths) => {
  const dp = new Array(maxJumpLengths.length).fill(0);
  dp[dp.length - 1] = 1;
  for (let i = maxJumpLengths.length - 1; i >= 0; i--) {
    for (let j = i + 1; j <= i + maxJumpLengths[i]; j++) {
      if (dp[j]) {
        dp[i] = 1;
        break;
      }
    }
  }
  return dp[0];
};
// T: O(n^2)
// In the worst case, for each index, we iterate all its succeeding indices to find if at least one is good.
// S: O(n)
// Input takes O(n).
// Auxiliary space used: O(n). We use an additional array of size n to store the results.
// Output takes O(1).
// Total space complexity: O(n) + O(n) + O(1) = O(n).
console.log(jumpGameDP([2, 3, 1, 0, 4, 7]));

// iterative dp greedy
const jumpGameGreedy = (maxJumpLengths) => {
  let leftMostGoodIndex = maxJumpLengths.length - 1;
  for (let i = maxJumpLengths.length; i >= 0; i--) {
    if (maxJumpLengths[i] + i >= leftMostGoodIndex) {
      leftMostGoodIndex = i;
    }
  }
  return leftMostGoodIndex === 0 ? 1 : 0;
};
// T: O(n)
// S: O(1)
console.log(jumpGameGreedy([2, 3, 1, 0, 4, 7]));
