// JavaScript implementation QuickSort using Lomuto's partition
const swap = (array, p1, p2) => {
  let temp = array[p1];
  array[p1] = array[p2];
  array[p2] = temp;
};

const partition1 = (arr, low, high) => {
  let pivot = arr[high];
  let i = (low - 1);

  for (let j = low; j <= high - 1; j++) {
    // If current element is smaller than or equal to pivot
    if (arr[j] <= pivot) {
      i++; // increment index of smaller element
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return (i + 1);
};

const quickSort = (arr, low, high) => {
  if (low < high) {
    let pi = partition1(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
};

// qs2
const quickSort2 = (arr, start, end) => {
  if (start >= end) return;
  let pivot = arr[(start + end) / 2];
  let index = partition(arr, start, end, pivot);
  quickSort2(arr, start, index - 1);
  quickSort2(arr, index, end);
};

const partition = (arr, start, end, pivot) => {
  while (start <= end) {
    while (arr[start] < pivot) {
      start++;
    }
    while (arr[end] > pivot) {
      end--;
    }
    if (start <= end) {
      swap(arr, start, end);
      start++;
      end--;
    }
  }
  return start;
};
