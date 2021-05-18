#### Q1

## [Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/)

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

## [Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)

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

## [Search Insert Position](https://leetcode.com/problems/search-insert-position/)

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
    pascal[i] = [1]; // 1st element of all the rows is 1

    for (var j = 1; j < i; j++) {
      pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j];
    }

    pascal[i][i] = 1; // last element of all the rows is 1
  }
  return pascal;
};
```

##### Complexity

- Time: O(n<sup>2</sup>)
- Space: O(n<sup>2</sup>)

#### Q6

## [Reverse String](https://leetcode.com/problems/reverse-string/)

### Approach

- Reversing the array of characters or a string, will follow the two pointer approach. Exchange each element between left and right side pointers. String length, either odd or even will not make a difference.

```js
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const length = s.length;
  const limit = Math.floor(length / 2); // iterate only to the half of the length of the string

  let temp;
  for (let i = 0, j = length - 1; i < limit; i++, j--) {
    // swap the items between left and right
    temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }

  return s;
};
```

##### Complexity

- Time: O(n)
- Space: O(1)

#### Q7

## [Matrix Diagonal Sum](https://leetcode.com/problems/matrix-diagonal-sum/)

### Approach

- The diagonal sum of matrix can be calculated by calculating the sum of the each diagonal and adding up. One point to be taken care here is that in case the matrix is having odd number of rows, then central element has to be skipped

```js
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  const n = mat.length;
  let diagonalSum = 0;

  // sum of diagonal from [0, 0] to [n-1, n-1]
  for (let i = 0; i < n; i++) {
    diagonalSum += mat[i][i];
  }

  // sum of diagonal from [0, n-1] to [n-1, 0]
  for (let i = 0, j = n - 1; i < n; i++, j--) {
    diagonalSum += mat[i][j];
  }

  if (n % 2 === 1) {
    diagonalSum -= mat[Math.floor(n / 2)][Math.floor(n / 2)];
  }

  return diagonalSum;
};
```

##### Complexity

- Time: O(n)
- Space: O(1)

#### Q8

## [Reverse Integer](https://leetcode.com/problems/reverse-integer/)

### Approach

- The problem can be solved by converting the number in to a string and then reversing the string. This approach works but we will follow the integer reverse approach for mathematical logical solution
- The number can be reversed by creating a number from last digit i.e remainder and then multiplying the number with 10 before next remainder addition

```js
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let reversedNum = 0;
  let isNegative = x < 0 ? -1 : 1;
  x = Math.abs(x);

  let remainder;
  while (x !== 0) {
    reversedNum = reversedNum * 10 + remainder; // get the remainder
    reversedNum *= 10 + remainder;
    x = Math.floor(x / 10); // get the integer excluding remainder
  }

  if (reversedNum > 2 ** 31) return 0;

  return reversedNum * isNegative;
};
```

##### Complexity

- Time: O(log n)
- Space: O(1)

#### Q9

## [Jewels and Stones](https://leetcode.com/problems/jewels-and-stones/)

### Approach

- Naive approach would be to check the each character from the stones string to be present or not in jewels. This approach is takes long for lengthier strings.
- Good approach would be to store the jewels in a Set and can be used to check against each character of the stones

```js
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const jewelsSet = new Set(jewels); // create Set with jewels as values

  let jewelsCount = 0;
  for (let ch of stones) {
    if (jewelsSet.has(ch)) {
      jewelsCount += 1; // increment the jewels count iff stone is a jewel
    }
  }

  return jewelsCount;
};
```

##### Complexity

- Time: O(j + s)
- Space: O(j)

#### Q10

## [Kids With the Greatest Number of Candies](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/)

### Approach

- The best approach would be to check the maximum value from the candies and then check if each of the value in the array when added can sum up to the maximum value or higher

```js
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let max = candies[0];
  for (let i = 1; i < candies.length; i++) {
    if (max < candies[i]) max = candies[i]; // find the max
  }

  for (let i = 0; i < candies.length; i++) {
    candies[i] = candies[i] + extraCandies >= max; // use the same array to store the boolean result
  }

  return candies;
};
```

##### Complexity

- Time: O(n)
- Space: O(1)

#### Q11

## [Maximum Product of Two Elements in an Array](https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/)

### Approach

- The logic here is to find the highest and second highest number and then multiple them after decrementing. The highest and the second highest can be found out in a single pass of loop

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const length = nums.length;

  let max = nums[0] > nums[1] ? nums[0] : nums[1]; // store the highest
  let sMax = nums[0] > nums[1] ? nums[1] : nums[0]; // store the 2nd highest
  for (let i = 2; i < length; i++) {
    if (max < nums[i]) {
      // if the current element is higher than the highest
      sMax = max;
      max = nums[i];
    } else if (sMax < nums[i]) {
      // if the current element is higher than the 2nd highest
      sMax = nums[i];
    }
  }

  return (max - 1) * (sMax - 1);
};
```

##### Complexity

- Time: O(n)
- Space: O(1)

#### Q12

## [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)

### Approach

- As the in place replacment for the array has to be done, we will utilize the space provided in the 1st array. As the space is provided at the end of the array, the items can be merged in reverse order filling from the highest to the lowest. Two pointer approach is used here.

```js
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;           // pointer to the 1st array
  let p2 = n - 1;           // pointer to the 2nd array
  let p3 = m + n - 1;       // pointer to the merge position

  // if both pointers are pointing to the items, keep merging
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p3] = nums1[p1];
      p1 -= 1;
    } else {
      nums1[p3] = nums2[p2];
      p2 -= 1;
    }
    p3 -= 1;
  }

  // iff p2 is not complete, move the items
  if (p2 !== -1) {
    while (p3 >= 0) {
      nums1[p3] = nums2[p2];
      p2 -= 1;
      p3 -= 1;
    }
  }
};
```

##### Complexity

- Time: O(m + n)
- Space: O(1)
