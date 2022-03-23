/*
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
 */

const intersectionOfTwoArrays = (nums1, nums2) => {
  const output = [];
  nums1.sort((a, b) => b - a);
  nums2.sort((a, b) => b - a);
  let i = 0;
  let j = 0;
  while (i < nums1.length - 1 || j < nums2.length - 1) {
    if (nums1[i] === nums2[j] && nums1[i] !== output[output.length - 1]) {
      output.push(nums1[i]);
      j++;
      i++;
    }
    if (nums1[i] > nums2[j]) {
      j++;
    } else {
      i++;
    }
  }
  return output;
};

console.log(intersectionOfTwoArrays([1, 2, 2, 1], [2, 2]));
console.log(intersectionOfTwoArrays([4, 9, 5], [9, 4, 9, 8, 4]));


/*
 1 1 2 2
 2 2

 4 5 9
 4 4 8 9 9
 */

// brute force
const intersect = (nums1, nums2) => {
  let sortedNums1 = nums1.sort((a, b) => a - b);
  let sortedNums2 = nums2.sort((a, b) => a - b);
  let result = [];
  let i = 0;
  let j = 0;

  while (i < sortedNums1.length && j < sortedNums2.length) {
    if (sortedNums1[i] === sortedNums2[j]) {
      if (!result.includes(sortedNums1[i])) result.push(sortedNums1[i]);
      i++;
      j++;
    } else if (sortedNums1[i] < sortedNums2[j]) i++;
    else j++;
  }
  return result;
};

// map
const intersect2 = (nums1, nums2) => {
  let map = new Map();
  for (let num of nums1) {
    if (!map.has(num))
      map.set(num, 1);
  }

  return nums2.filter(n => {
    if (map.has(n)) {
      map.delete(n);
      return true;
    } else return false;
  });
};

// set
const intersect3 = (nums1, nums2) => {
  let result = [];
  let setNum1 = new Set(nums1);
  let setNum2 = new Set(nums2);

  let [smallSet, largeSet] = (setNum1.length < setNum2.length) ? [setNum1, setNum2] : [setNum2, setNum1];

  smallSet.forEach(num => {
    largeSet.has(num) && result.push(num);
  });

  return result;
};

const intersect4 = (nums1, nums2) => {
  let setNum1 = new Set(nums1);

  return [...new Set(nums2.filter(num => setNum1.has(num)))];
};


/*
findIntersection(sortedA, sortedB)
int idxA = 0
int idxB = 0
while(idxA < sortedA.length && idxB < sortedB.length
  if(sortedA[idxA] < sortedB[idxB]) idxA++
  if(sortedA[idxA] > sortedB[idxB]) idxB++
  else
    result append(sortedA[idxA]);
    idxA++
    idxB++
return result;
 */
