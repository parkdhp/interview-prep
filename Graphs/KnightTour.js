/*
 * Knight's Tour On A Chessboard
 * You are given a chessboard with rows rows and cols columns and a knight - that moves like in normal chess - located
 * at the start_row-th row and start_col-th column. The knight needs to reach the position at the end_row-th row
 * and end_col-th column.
 *
 * Find minimum number of moves that knight needs to make to get from starting position to ending position.
 *
 * start_row, start_col, end_row and end_col are all zero-indexed.
 *
 * Example
 * {
 * "rows": 5,
 * "cols": 5,
 * "start_row": 0,
 * "start_col": 0,
 * "end_row": 4,
 * "end_col": 1
 * }
 * Output:
 * 3
 * 3 moves to reach from (0, 0) to (4, 1):
 * (0, 0) → (1, 2) → (3, 3) → (4, 1).
 *
 * Notes
 * If it is not possible to reach from starting position to ending position, then return -1.
 *
 * Constraints:
 * 1 <= rows * cols <= 10^5
 * 0 <= start_row, end_row < rows
 * 0 <= start_col, end_col < cols
 */

const findMinMoves = (rows, cols, start_row, start_col, end_row, end_col) => {
  if (start_row === end_row && start_col === end_col) return 0;
  const visited = new Array(rows).fill().map(() => new Array(cols).fill(0));
  const possibleRowMoves = [-2, -2, -1, -1, 1, 1, 2, 2];
  const possibleColMoves = [-1, 1, -2, 2, -2, 2, -1, 1];

  const bfs = () => {
    let queue = [];
    queue.push([start_row, start_col]);
    visited[start_row][start_col] = 1;
    while (queue.length) {
      const [row, col] = queue.shift();
      for (let i = 0; i < 8; i++) {
        const nr = row + possibleRowMoves[i];
        const nc = col + possibleColMoves[i];
        if (nr < rows && nr > -1 && nc < cols && nc > -1 && !visited[nr][nc]) {
          if (nr === end_row && nc === end_col) return visited[row][col];
          visited[nr][nc] = visited[row][col] + 1;
          queue.push([nr, nc]);
        }
      }
    }
    return -1;
  };
  return bfs();
};
