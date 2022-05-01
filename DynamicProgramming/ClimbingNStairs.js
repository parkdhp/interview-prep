/*
 * Climbing N Stairs
 * You are climbing a staircase. It takes n steps to reach the top.
 *
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 *
 * Example 1:
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 *
 * Example 2:
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 *
 * Constraints:
 * 1 <= n <= 45
 */

const climbStairs = (n) => {
  const memo = [0, 1, 2];
  const recurse = (n) => {
    if (memo[n]) return memo[n];
    memo[n] = recurse(n - 1) + recurse(n - 2);
    return memo[n];
  };
  return recurse(n);
};

const climbStairsIterative = (n) => {
  if (n === 1) return 1;
  if (n === 2) return 2;
  const table = [0, 1, 2];
  for (let i = 3; i < n + 1; i++) {
    table[i % 3] = table[(i - 1) % 3] + table[(i - 2) % 3];
  }
  return table[n % 3];
};

console.log(climbStairs(2));
console.log(climbStairsIterative(3));
console.log(climbStairsIterative(5));


// if number of steps that can be taken is provided
const countWaysToClimb = (steps, n) => {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= n; i++) {
    for (const step of steps) {
      const prevStep = i - step;
      if (prevStep >= 0) {
        dp[i] += dp[prevStep];
      }
    }
  }
  return dp[n];
};
console.log(countWaysToClimb([1, 2], 3));
