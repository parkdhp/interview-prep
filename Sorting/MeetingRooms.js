/*
## 252. Meeting Rooms

### Question
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

Example 1:

Input: [[0,30],[5,10],[15,20]]
Output: false

Example 2:

Input: [[7,10],[2,4]]
Output: true
 */

const canMeet = (arr) => {
  let currMin = arr[0][0];
  let currMax = arr[0][1];
  let diff = currMax - currMin;
  arr.sort((a,b)=> {
    return b[0]-a[0];
  });
  for (let i = 0; i < arr.length; i++) {
    if(arr[i][1] < currMax && arr[i][0] > currMin ) return false;
    if (diff < arr[i][1] - arr[i][0]) {
      currMin = arr[i][0];
      currMax = arr[i][1];
    }
  }
  return true;
};

console.log(canMeet([[0, 30], [5, 10], [15, 20]]));
console.log(canMeet([[7, 10], [2, 4]]));

