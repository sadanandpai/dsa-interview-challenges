#### Q3

## [Sort Colors](https://leetcode.com/problems/sort-colors/)

### Approach

- Good approach would be to count the number of zeros, one and two's in the array and populate the array in place with the 1s, 2s and 3s respective counts
- A single pass approach would be solve it using Dutch national flag problem where the 0s are moved to the left and 2s to the right of 1s (Three pointer approach)

```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const length = nums.length;

  let zeroP = 0;
  let oneP = 0;
  let twoP = length - 1;

  let temp;
  while (oneP <= twoP) {
    // if 1s pointer is 1, just increment the 1s pointer
    if (nums[oneP] === 1) {
      oneP += 1;
    } 
    
    // if 1s pointer is 0 move to left with incrementing 0s & 1s pointers
    else if (nums[oneP] === 0) {
      temp = nums[zeroP];
      nums[zeroP] = 0;
      nums[oneP] = temp;
      zeroP += 1;
      oneP += 1;
    } 
    
    // if 1s pointer is 2, move to right with incrementing 2s pointer
    else if (nums[oneP] === 2) {
      nums[oneP] = nums[twoP];
      nums[twoP] = 2;
      twoP -= 1;
    }
  }
};
```

##### Complexity

- Time: O(n)
- Space: O(1)
