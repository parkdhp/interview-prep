/*
 * Merge K Sorted Linked Lists
 *
 * Given k linked lists where each one is sorted in the ascending order, merge all of them into a single sorted linked list.
 *
 * Example
 * "lists": [
 * [1, 3, 5],
 * [3, 4],
 * [7]
 * ]
 *
 * Output:
 * [1, 3, 3, 4, 5, 7]
 *
 * Notes
 * Constraints:
 * 0 <= k <= 104
 * 0 <= length of one given linked list <= 10^3
 * -10^9 <= node value <= 10^9
 * Sum of the lengths of all given lists won't exceed 10^5
 */

/**
 * @param {list_LinkedListNode_int32} lists
 * @return {LinkedListNode_int32}
 */

const LinkedListNode = class {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

const merge_k_lists = (lists) => {
  const allList = [];
  for (let i = 0; i < lists.length; i++) {
    let currNode = lists[i];
    while (currNode) {
      allList.push(currNode.value);
      currNode = currNode.next;
    }
  }

  allList.sort((a, b) => a - b);
  let output = null;
  let counter = allList.length - 1;
  while (counter > -1) {
    if (output === null) {
      output = new LinkedListNode(allList[counter]);
    } else {
      const tmp = output;
      output = new LinkedListNode(allList[counter]);
      output.next = tmp;
    }
    counter--;
  }
  return output;
};
