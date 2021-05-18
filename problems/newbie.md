#### Q1

## [Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array)

### Approach

- Naive approach would be to calculate the sum of all the array elements before the current index for every element, in to a new array.
- Simpler and better approach would be to replace the current element by its sum with the previous element

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
};
```

##### Complexity

- Time: O(n)
- Space: O(1)

#### Q2

## [Fibonacci Number](https://leetcode.com/problems/fibonacci-number)

### Approach

- A good approach would be calculate the nth fibonacci number either recursively or iteratively
- As we know nth fibonacci number is sum of n-1 th and n-2th fibonacci numbers, we can start from 1st position till we calculate nth.

```js
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // initialize 0th and 1st fibonacci numbers
  let fib1 = 0,
    fib2 = 1;

  for (let i = 1; i <= n; i++) {
    temp = fib2;
    fib2 = fib1 + fib2; // next fibonacci number is sum of current and next
    fib1 = temp; // current fibonacci number is next fibonacci number
  }

  return fib1;
};
```

##### Complexity

- Time: O(n)
- Space: O(1)

#### Q3

## [Shuffle the Array](https://leetcode.com/problems/shuffle-the-array/)

### Approach

- Simple solution would be to create a new array and shift the elements in the order given

```js
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const newNums = [];

  for (let i = 0, j = n; i < n; i++, j++) {
    newNums.push(nums[i], nums[j]);
  }

  return newNums;
};
```

##### Complexity

- Time: O(n)
- Space: O(n)

#### Q4

## [Search Insert Position](https://leetcode.com/problems/search-insert-position)

### Approach

- Naive approach would be start from left side of the array and insert at a point where you find the first match or next higher number. This approach works very well for small arrays.
- As the array is already sorted Binary search can be modified to reduce the time complexity

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let mid, value;

  while (low <= high) {
    mid = Math.floor((low + high) / 2); // obtain the mid value

    value = nums[mid];
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) low = mid + 1;
    else if (nums[mid] > target) high = mid - 1;
  }

  return low; // low points to the position of insertion if match found or not
};
```

##### Complexity

- Time: O(n<sup>2</sup>)
- Space: O(n<sup>2)</sup>

#### Q5

## [Pascal's Triangle](https://leetcode.com/problems/pascals-triangle)

### Approach

- Start with a pascal 2D array with default array with value 1. Use nested loops; one for row generation and other for values inside the each row. Let each value of the current row be calculated from previous row values excluding 1st and last element. Prepend and append 1 to each row value (pattern says by default)

```js
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  var pascal = [[1]];
  for (var i = 1; i < numRows; i++) {
    pascal[i] = [1];
    for (var j = 1; j < i; j++) {
      pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j];
    }
    pascal[i][i] = 1;
  }
  return pascal;
};
```

##### Complexity

- Time: O(n<sup>2</sup>)
- Space: O(n<sup>2)</sup>
