/*
 * Segregate Even And Odd Numbers
 *
 * Given an array of numbers, rearrange them in-place so that even numbers appear before odd ones.
 *
 * Example
 * "numbers": [1, 2, 3, 4]
 *
 * Output:
 * [4, 2, 3, 1]
 * The order within the group of even numbers does not matter; same with odd numbers. So the following are also correct outputs: [4, 2, 1, 3], [2, 4, 1, 3], [2, 4, 3, 1].
 *
 * Notes
 * It is important to practice solving this problem by rearranging numbers in-place.
 * There is no need to preserve the original order within the even and within the odd numbers.
 * We look for a solution of the linear time complexity that uses constant auxiliary space.
 *
 * Constraints:
 * 1 <= length of the array <= 10^5
 * 1 <= element of the array <= 10^9
 */

const segregateEvenAndOdd = (numbers) => {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    if (numbers[left] % 2 === 1) {
      const tmp = numbers[left];
      numbers[left] = numbers[right];
      numbers[right] = tmp;
      right--;
    } else {
      left++;
    }
  }
  return numbers;
};
