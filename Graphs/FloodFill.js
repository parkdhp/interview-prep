/*
 * Flood Fill
 * One pixel on a grayscale image changes color. Recolor all the adjacent pixels of the same color to the same new color.
 * Grayscale colors are simply numbers.
 *
 * Example One
 * {
 * "pixel_row": 0,
 * "pixel_column": 1,
 * "new_color": 2,
 * "image": [
 * [0, 1, 3],
 * [1, 1, 1],
 * [1, 5, 4]
 * ]
 * }
 * I.e. the pixel at row 0 and column 1 changes to color 2.
 *
 * Output:
 * [
 * [0, 2, 3],
 * [2, 2, 2],
 * [2, 5, 4]
 * ]
 *
 * Example Two
 * {
 * "pixel_row": 1,
 * "pixel_column": 0,
 * "new_color": 9,
 * "image": [
 * [0, 2, 1],
 * [1, 1, 2],
 * [2, 5, 4]
 * ]
 * }
 * I.e. the pixel at row 1 and column 0 changes to color 9.
 *
 * Output:
 * [
 * [0, 2, 1],
 * [9, 9, 2],
 * [2, 5, 4]
 * ]
 *
 * Notes
 * Two pixels are considered adjacent if they share a side; sharing a diagonal is not enough.
 *
 * Constraints:
 * 1 <= image width <= 1000
 * 1 <= image height <= 1000
 * 0 <= pixel color <= 1000
 */

// dfs with auxiliary space
const floodFill = (pixel_row, pixel_column, new_color, image) => {
  const visited = new Array(image.length).fill().map(() => new Array(image[0].length).fill(false));

  const dfs = (i, j, prevColor) => {
    visited[i][j] = true;
    let currColor = image[i][j];
    if (currColor === prevColor) {
      image[i][j] = new_color;
      if (i + 1 < image.length && !visited[i + 1][j]) {
        dfs(i + 1, j, currColor);
      }
      if (j + 1 < image[0].length && !visited[i][j + 1]) {
        dfs(i, j + 1, currColor);
      }
      if (i - 1 >= 0 && !visited[i - 1][j]) {
        dfs(i - 1, j, currColor);
      }
      if (j - 1 >= 0 && !visited[i][j - 1]) {
        dfs(i, j - 1, currColor);
      }
    }
  };
  dfs(pixel_row, pixel_column, image[pixel_row][pixel_column]);
  return image;
};

console.log(floodFill(0, 1, 2, [
  [0, 1, 3],
  [1, 1, 1],
  [1, 5, 4]
]));
