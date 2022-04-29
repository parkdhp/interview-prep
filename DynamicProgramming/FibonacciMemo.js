/*
 * Fibonacci
 */

// Top down memoization
// Space time trade off
// Space: O(n)
const fibMemo = (n) => {
  const memo = {0:0,1:1};
  const recurse = (n) => {
    if (memo.hasOwnProperty(n)) {
      return memo[n];
    } else {
      memo[n] = recurse(n - 1) + recurse(n - 2);
      return memo[n];
    }
  };
  return recurse(n);
};

// Bottom up
// Directed Acyclic Graph -> Topological Sort
// Space: O(n)
const fibBottomUp = (n) => {
  const table = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }
  return table[n];
};

// Space: O(1)
const fibBottomUp2 = (n) => {
  const table = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    table[i % 3] = table[(i - 1) % 3] + table[(i - 2) % 3];
  }
  return table[n % 3];
};

console.log(fibMemo(40));
console.log(fibBottomUp(40));
console.log(fibBottomUp2(40));
