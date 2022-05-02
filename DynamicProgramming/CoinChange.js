/*
 * Coin Change
 * You are given an integer array coins representing coins of different denominations and an integer amount representing
 * a total amount of money.
 *
 * Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by
 * any combination of the coins, return -1.
 *
 * You may assume that you have an infinite number of each kind of coin.
 *
 * Example 1:
 * Input: coins = [1,2,5], amount = 11
 * Output: 3
 * Explanation: 11 = 5 + 5 + 1
 *
 * Example 2:
 * Input: coins = [2], amount = 3
 * Output: -1
 *
 * Example 3:
 * Input: coins = [1], amount = 0
 * Output: 0
 *
 * Constraints:
 * 1 <= coins.length <= 12
 * 1 <= coins[i] <= 2^31 - 1
 * 0 <= amount <= 10^4
 */

const coinChangeRecurse = (coins, amount) => {
  let minNumCoins = Infinity;
  const recurse = (currSum, currCount) => {
    if(currSum >= amount) {
      if(currSum === amount) {
        minNumCoins = Math.min(minNumCoins, currCount);
      }
      return;
    }
    for (let i = 0; i < coins.length; i++) {
      recurse(coins[i] + currSum, currCount+1, partial);
    }
  };
  recurse(0, 0);
  return minNumCoins === Infinity ? -1 : minNumCoins;
};


// Optimization problem
// Come up with a recurrence equation (via decrease and conquer strategy)
// Optimal substructure
const coinChange = (coins, amount) => {
  const table = new Array(amount + 1).fill(Infinity);
  // base case
  table[0] = 0;
  for (let i = 1; i <= amount; i++) {
    // compute and cache f(i). sub-problem = i-ck
    for (const c of coins) {
      if (i - c >= 0) {
        table[i] = Math.min(table[i], table[i - c]);
      }
    }
    table[i]++;
  }
  console.log('table:',table);
  return table[amount] === Infinity || table[amount] === 0 ? -1 : table[amount];
};
// T(a,k) = O(ak)
// S(a,k) = O(a)

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
console.log(coinChange([1], 0));
