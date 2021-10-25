#### Q1

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

#### Q2

## [Majority Element](https://leetcode.com/problems/majority-element)

### Approach

- Good approach would be to keep map of elements and their count by iterating through the array. The one with highest count should be the result.
- The best approach for this problem would be to just note the majority element as we know there is a majority element for sure.

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const length = nums.length;

  let majority;
  let count = 0;
  for (let i = 0; i < length; i++) {
    if (count === 0) majority = nums[i];

    if (nums[i] === majority) count += 1;
    else count -= 1;
  }

  return majority;
};
```

#### Note

- Read more about Boyer-Moore Voting Algorithm

##### Complexity

- Time: O(n)
- Space: O(1)

#### Q3

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

#### Q4

## [Rotate Array](https://leetcode.com/problems/rotate-array/)

### Approach

- Simple approach would be to store the last length - k elements in an array and move all the k elements to end of the array. Then restore back the moved elements to the starting of the array
- A better approach hwihtout using an additional array is to
  - Reverse the whole array
  - Reverse 1st k elements
  - Reverse the rest of the elements

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const length = nums.length;
    k = k % length;
    
    // store last length - k elements in an array
    const memArray = nums.slice(length - k);
    
    // move the k elements to array end (if not done in reverse order, elements will get overridden)
    for(let i = length - 1, j = i - k; i >= k; i--, j--){
        nums[i] = nums[j];
    }
    
    // replace the starting of the array with stored array elements
    for(let i = 0; i < memArray.length; i++){
        nums[i] = memArray[i];
    }
};
```

##### Complexity

- Time: O(n)
- Space: O(n)

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Helper function to reverse the array in place
var reverse = function (array, start, end){
    for(let i = start, j = end; i <= start + (end - start) / 2; i++, j--){
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

var rotate = function(nums, k) {
    const length = nums.length;
    k = k % length;
    
    reverse(nums, 0, length - 1); // rotate complete array
    reverse(nums, 0, k - 1);  // rotate 1st k elements
    reverse(nums, k, length - 1); // rotate rest of the elements
};

```

##### Complexity

- Time: O(n)
- Space: O(1)

#### Q5

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

#### Q6

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

#### Q7

## [Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)

### Approach

- The square of both negative and positive numeber will be a positive number. And also we know the array is already sorted.
- Two pointer approach can be used here, and the squares of the numbers can be filled in the new array in the reverse order. (Creating squared array in ascending order is lengthier task)

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  const length = nums.length;
  let i = 0;
  let j = length - 1;

  const sortedArray = new Array(length);
  let pointer = length - 1; // ponter to fill the squares from last poisition

  while(i <= j){
    // Make the absolute value comparision
    if(Math.abs(nums[i]) > Math.abs(nums[j])){
      sortedArray[pointer--] = nums[i] * nums[i];
      i += 1;
    }
    else {
      sortedArray[pointer--] = nums[j] * nums[j];
      j -= 1;
    }
  }

  return sortedArray;
};
```

##### Complexity

- Time: O(n)
- Space: O(n)

#### Q8

## [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)

### Approach

- The solution is the direct implementation of [Kadane's algorithm](https://en.wikipedia.org/wiki/Maximum_subarray_problem)

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let highest = nums[0];  // highest local subarray sum
    let highestSoFar = nums[0]; // highest subarray sum
    let total;
    
    // Kadane's algorithm logic
    for(let i=1;i<nums.length; i++){
        total = highest + nums[i];
        highest = total > nums[i] ? total : nums[i];
        highestSoFar = highest > highestSoFar ? highest : highestSoFar;
    }
        
    return highestSoFar;
};
```

##### Complexity

- Time: O(n)
- Space: O(1)

#### Q11

## [How Many Numbers Are Smaller Than the Current Number](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/)

### Approach

- Good approach would be to sort the elements after copying in to a new array
- As the problem has limited range of numbers, we can sort by storing count of occurences. The smaller elements can be counted using this.

#### Solution 1

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let sortedArray = [...nums];
  sortedArray = sortedArray.sort((a, b) => a - b);
  const smallerElementsCountArray = [];

  for (let i = 0; i < nums.length; i++) {
    smallerElementsCountArray.push(sortedArray.indexOf(nums[i]));
  }

  return smallerElementsCountArray;
};
```

##### Complexity

- Time: O(nlogn)
- Space: O(n)

#### Solution 2

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const length = nums.length;
  const limit = 100;
  let countArray = [];

  // Keep count of occurences of array elements and we know they are within 0 to 100
  for (let i = 0; i < length; i++) {
    countArray[nums[i]] = countArray[nums[i]] ? countArray[nums[i]] + 1 : 1;
  }

  // update the countArray with count of all the smaller elements than current element
  let countOfElementsSoFar = 0;
  for (let i = 0; i <= limit; i++) {
    if (countArray[i]) {
      const currentCount = countArray[i];
      countArray[i] = countOfElementsSoFar;
      countOfElementsSoFar += currentCount;
    }
  }

  // Create new array for the input array
  const smallerElementsCountArray = [];
  for (let i = 0; i < length; i++) {
    smallerElementsCountArray.push(countArray[nums[i]]);
  }

  return smallerElementsCountArray;
};
```

##### Complexity

- Time: O(n)
- Space: O(n)

#### Q12

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
