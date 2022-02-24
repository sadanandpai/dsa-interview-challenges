#### Q1

## [Container With Most Water](https://leetcode.com/problems/container-with-most-water)

### Approach

- Brute force approach should work fine to get the answer (each height with every other height to the right of it) but the time complexity would be n<sup>2</sup>
- Instead consider the 2 pointer approach with a left most height and right most height. Calculate the area and move next for the lower height pole.

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0; // pointer 1
  let right = height.length - 1; // pointer 2

  let max = 0;
  while (left < right) {
    const minHeight = Math.min(height[left], height[right]);
    const distance = right - left;
    max = Math.max(max, minHeight * distance); // area is product of height (min of 2 poles) and total width

    if (height[left] > height[right])
      // if both are same either of the pointer can change (should not make a difference)
      right -= 1;
    else left += 1;
  }
  return max;
};
```

##### Complexity

- Time: O(n)
- Space: O(1)

#### Q2

## [House Robber](https://leetcode.com/problems/house-robber)

### Approach

- Let us consider the scenario of robbery from left to right. At every house note the highest robbery so far. As robber cannot rob adjacent houses while considering the current house, we will have to consider the 2nd previous house and 3rd previous house. (We need not check the 4th house before the current house because if 4th house gets already considered when we check 2nd previous house from current house.)
- The highest robbery will be the maximum of last 2 houses (if the last but one house is robbed, last one cannot be robbed and vice versa)

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const robbery = [];
    
    for(let i=0; i<nums.length; i++){
        robbery[i] = nums[i] + Math.max((robbery[i-2] ?? 0), (robbery[i-3] ?? 0));
    }
    
    return Math.max(...robbery.slice(-2));
};
```

##### Complexity

- Time: O(n)
- Space: O(1)

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

#### Q4

## [Subsets](https://leetcode.com/problems/subsets)

### Approach

- This is one of the most straight forward implementation of backtracking by candidate presence and absence.
- Use the simple recursion and store all the sets in an array

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums, k = 0, arr =[], sets = []) {
    if(k === nums.length){
        sets.push([...arr]);
        return;
    }
    
    subsets(nums, k+1, arr, sets);  // without candidate in the array

    arr.push(nums[k]);
    subsets(nums, k+1, arr, sets);  // with candidate in the array
    arr.pop(nums[k]);
    
    return sets;
};
```

##### Complexity

- Time: O(2<sup>n</sup>)
- Space: O(1)
