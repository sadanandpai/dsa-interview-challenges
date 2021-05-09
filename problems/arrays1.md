## Q1

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

## Q2

## [Fibonacci Number](https://leetcode.com/problems/fibonacci-number)

## Q3

## [Missing Number](https://leetcode.com/problems/missing-number/)

### Approach

- Naive approach would be to mark all the elements of array in a boolean array and then return the element which is not marked
- Simpler and better approach would be to calculate the sum of all the array items and substract it from total sum using formula n \* (n + 1) / 2

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let totalSum = 0;
  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
  }

  const arraySum = (nums.length * (nums.length + 1)) / 2;
  return arraySum - totalSum;
};
```

##### Complexity

- Time: O(n)
- Space: O(1)

## Q4

## [Majority Element](https://leetcode.com/problems/majority-element)

## Q5

## [Single Number](https://leetcode.com/problems/single-number/)

### Approach

- Good approach would be to store the count of each elements, and return the element having single occurence
- As the elements are only positive integers in this problems, XOR operation can be utilized. All the elements occur twice, except one; XOR between same elements will result in 0 and left one will be single non duplicated number. (order of XOR operation does not matter)

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let singleNumber = 0;
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    singleNumber ^= nums[i];
  }

  return singleNumber;

  // Alternatively, a single line solution
  // return nums.reduce((a, b) => a ^ b);
};
```

##### Complexity

- Time: O(n)
- Space: O(1)

## Q6

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

## Q7

## [Search Insert Position](https://leetcode.com/problems/search-insert-position)

## Q8

## [First Bad Version](https://leetcode.com/problems/first-bad-version)

## Q9

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

## Q10

## [Two Sum](https://leetcode.com/problems/two-sum)

### Approach

- Naive apporach would be to calculate the sum each element of the array with all the other elements in the array. This will check for all the combination of 2 numbers with nested loops
- Better approach would be to use the hash map to store the elements and check for the complement of the numbers if present in the array in a single pass

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // Declare a map to store element and its index
  const map = {};
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    const val = nums[i];
    // if the complement of the number is present in the array
    if (map[val] !== undefined) {
      return [map[val], i];
    } else {
      // store the complemented number
      map[target - nums[i]] = i;
    }
  }
};
```

##### Complexity

- Time: O(n)
- Space: O(n)

## Q11

## [Move Zeroes](https://leetcode.com/problems/move-zeroes)

### Approach

- Simple apporach would be to move all the non-zero elements to new array and fill rest of the elements with 0
- Better approach would be to do inplace movement. Two pointers approach can be used here. Keep a zeroPointer and loop index pointer. Keep moving non-zero elements to pointer pointed to zero. Increment the zero for next replacement.

```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const length = nums.length;
  let zeroPointer = -1; // initialize and update the position when zero appears

  for (let i = 0; i < length; i++) {
    // if number is not zero then move the element to the zeroPointer position and mark current position as zero
    if (nums[i] !== 0 && zeroPointer !== -1) {
      nums[zeroPointer] = nums[i];
      nums[i] = 0;
      zeroPointer += 1; // increment zeroPointer
    }
    // if element is 0, update the zeroPointer for the first time
    else if (nums[i] === 0 && zeroPointer === -1) {
      zeroPointer = i;
    }
  }
};
```

##### Complexity

- Time: O(n)
- Space: O(1)

## Q12

## [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

### Approach

- Naive approach would be to check the highest profit by considering each value of the array with all the next values of the array
- A better approach would be to keep checking the profit with least value so far with the current array value and store the maximum profit so far obtained.

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0; // start profit as 0 which is minimum possible profit even if no transactions are done
  let low = 0;

  for (let i = 1; i < prices.length; i++) {
    // store the minimum array index in low
    if (prices[low] > prices[i]) {
      low = i;
    }

    // if the difference between current array and lowest value so far is highest, store it as profit
    if (prices[i] - prices[low] > profit) {
      profit = prices[i] - prices[low];
    }
  }

  return profit;
};
```

##### Complexity

- Time: O(n)
- Space: O(1)
