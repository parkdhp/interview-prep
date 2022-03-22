/*
 Merge K Sorted Arrays
 Given k arrays sorted in the same order - either non-increasing or non-decreasing - merge them all into one array sorted in the same order.

 Example
 {
  "arr": [
    [1,3,5,7],
    [2,4,6,8],
    [0,9,10,11]
  ]
 }

 Output:
 [0,1,2,3,4,5,6,7,8,9,10,11]
 */

/*
 * 1. Figure out if non increasing or non decreasing
 * 2. Use a heap -> if non-increasing use maxHeap (biggest value at root), if non-decreasing use a minHeap (smallest value at root)
 * 3. Keep track of tuple,
 *    [val, k, i]
 */

class MinHeap {
  add(){}
}

class MaxHeap {
  add(){}
}

const mergeKSortedArrays = (arr, k) => {
  let increasing = false;
  for (let i = 0; i < k; i++) {
    if(arr[i][0] < arr[i][arr[i].length-1]) {
      increasing = true;
      break;
    }
  }

  let mh;
  if(increasing) {
    mh = new MinHeap();
  } else {
    mh = new MaxHeap();
  }

  for(let i = 0; i < k; i++) {
    mh.add([arr[i][0], i, 0])
  }
  const result = [];
  while(result.length !== arr[0][0].length*k) { // n = total number of elements
    const tuple = mh.pop();
    result.push(tuple[0]);
    if(tuple(2) < arr[0].length) {
      mh.add([arr[tuple[1]][tup[2]+1]])
    }
  }

};
