/*
 * Max Area of Island
 * Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected
 * 4-directionally (horizontal or vertical). You may assume all four edges of the grid are surrounded by water.
 * Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0).
 *
 * Example 1
 * Input:
 * 0010000100000
 * 0000000111000
 * 0110100000000
 * 0100110010100
 * 0100110011100
 * 0000000000100
 * 0000000111000
 * 0000000110000
 * Output:
 * 6
 * Note the answer is not 11, because the island must be connected 4-directionally
 *
 * Example 2
 * Input:
 * 00000000
 * Output:
 * 0
 * Note the length of each dimension in the given grid does not exceed 50.
 */

// bfs with auxiliary space
const getMaxArea = (grid) => {
  let maxArea = 0;
  const visited = [];
  for (let i = 0; i < grid.length; i++) {
    visited[i] = [];
    for (let j = 0; j < grid[0].length; j++) {
      visited[i][j] = false;
    }
  }

  const getNeighbors = (i, j) => {
    const output = [];
    if (i < grid.length - 1) {
      output.push([i + 1, j]);
    }
    if (i > 0) {
      output.push([i - 1, j]);
    }
    if (j < grid[0].length - 1) {
      output.push([i, j + 1]);
    }
    if (j > 0) {
      output.push([i, j - 1]);
    }
    return output;
  };

  let count = 0;
  const bfs = (i, j) => {
    const queue = [];
    queue.push([i, j]);
    count++;
    visited[i][j] = true;
    while (queue.length) {
      queue.shift();
      for (const [nr, nc] of getNeighbors(i, j)) {
        if (!visited[nr][nc] && grid[nr][nc] === 1) {
          visited[nr][nc] = true;
          bfs(nr, nc);
        }
      }
    }
  };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!visited[i][j] && grid[i][j] === 1) {
        count = 0;
        bfs(i, j);
        maxArea = Math.max(count, maxArea);
      }
    }
  }
  return maxArea;
};

console.log(getMaxArea([
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1]
]));


// dfs no auxiliary space
const getMxArea2 = (grid) => {
  let curMax = 0;
  let largest = 0;
  const dfs = (i, j) => {
    grid[i][j] = 0;
    curMax++;
    if (i - 1 > -1 && grid[i - 1][j]) {
      dfs(i - 1, j);
    }
    if (i + 1 < grid.length && grid[i + 1][j]) {
      dfs(i + 1, j);
    }
    if (j - 1 > -1 && grid[i][j - 1]) {
      dfs(i, j - 1);
    }
    if (j + 1 < grid[0].length && grid[i][j + 1]) {
      dfs(i, j + 1);
    }
  };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j]) {
        curMax = 0;
        dfs(i, j);
        largest = Math.max(largest, curMax);
      }
    }
  }
  return largest;
};

console.log(getMxArea2([
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1]
]));

console.log(getMxArea2([
  [1, 1, 0, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 1, 1],
  [0, 0, 1, 0, 1, 1, 1]
]));
