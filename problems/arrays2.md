## Q1

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
