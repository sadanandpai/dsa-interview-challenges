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
- Simpler and better approach would be to calculate the sum of all the array items and substract it from total sum using formula n * (n + 1) / 2

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let totalSum = 0;
    for(let i=0;i<nums.length; i++){
        totalSum += nums[i];
    }
    
    const arraySum = (nums.length * (nums.length + 1)) / 2
    return  arraySum - totalSum;
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

## Q11
## [Move Zeroes](https://leetcode.com/problems/move-zeroes)

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
