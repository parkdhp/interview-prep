/*
 * Number of Islands
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water
 * and is formed by connecting adjacent lands horizontally or vertically.
 * You may assume all four edges of the grid are all surrounded by water.
 *
 * Example 1
 * Input:
 * 11110
 * 11010
 * 11000
 * 00000
 * Output:
 * 1
 *
 * Example 2
 * Input:
 * 11000
 * 11000
 * 00100
 * 00011
 * Output:
 * 3
 */

const countIslands = (arr) => {
  let numberOfIslands = 0;
  const visited = [];
  for (let i = 0; i < arr.length; i++) {
    visited[i] = [];
    for (let j = 0; j < arr[0].length; j++) {
      visited[i][j] = false;
    }
  }

  const getNeighbors = (i, j) => {
    const output = [];
    if (i + 1 < arr.length) {
      output.push([i + 1, j]);
    }
    if (j + 1 < arr[0].length) {
      output.push([i, j + 1]);
    }
    if (i - 1 >= 0) {
      output.push([i - 1, j]);
    }
    if (j - 1 >= 0) {
      output.push([i, j - 1]);
    }
    return output;
  };

  const bfs = (i, j) => {
    const queue = [];
    queue.push([i, j]);
    visited[i][j] = true;
    while (queue.length !== 0) {
      const [row, col] = queue.shift();
      for (const [nr, nc] of getNeighbors(row, col)) {
        if (!visited[nr][nc] && arr[nr][nc] === 1) {
          visited[nr][nc] = true;
          queue.push([nr, nc]);
        }
      }
    }
  };
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (!visited[i][j] && arr[i][j] === 1) {
        numberOfIslands++;
        bfs(i, j);
      }
    }
  }
  return numberOfIslands;
};

console.log(countIslands([
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
]));
console.log(countIslands([
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
]));


const countIslands2 = (matrix) => {
  let islandCount = 0;
  const n = matrix.length;
  const m = matrix[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j]) {
        islandCount++;
        dfs(i, j, matrix);
      }
    }
  }
  return islandCount;
};

const dfs = (r, c, matrix) => {
  matrix[r][c] = 0;
  const addRow = [0, -1, 0, 1];
  const addCol = [-1, 0, 1, 0];
  for (let i = 0; i < 4; i++) {
    const newR = r + addRow[i];
    const newC = c + addCol[i];
    if (newR < 0 || newR >= matrix.length || newC < 0 || newC >= matrix[0].length) {
      continue;
    }
    if (matrix[newR][newC]) {
      dfs(newR, newC, matrix);
    }
  }

};

console.log(countIslands2([
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
]));
console.log(countIslands2([
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
]));
