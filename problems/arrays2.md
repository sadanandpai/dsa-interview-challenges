#### Q7

## [Unique Paths](https://leetcode.com/problems/unique-paths)

### Approach

- The problem requires each and every path to be traced which goes to the destination. If a path if found to be successful the total paths can be incremented by one
- Try to search the paths recursively from each cell of the matrix starting from 0, 0 and go in the directions of bottom and top
- Memoization can be used to avoid repetition

```js
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const paths = Array.from(new Array(m), () => []);
  return getPaths(0, 0, m, n, paths);
};

function getPaths(i, j, m, n, paths) {
  // no paths found if cell indices are out of the matrix
  if (i >= m || j >= n) {
    return 0;
  }

  // return memoized count if already found for the cell
  if (paths[i][j]) {
    return paths[i][j];
  }

  // when destination is found
  if (i === m - 1 && j === n - 1) {
    return 1;
  }

  // Add the number of paths possible in right and bottom directions
  let totalPaths = 0;
  totalPaths += getPaths(i + 1, j, m, n, paths);
  totalPaths += getPaths(i, j + 1, m, n, paths);

  paths[i][j] = totalPaths;

  return totalPaths;
}
```

##### Complexity

- Time: O(n)
- Space: O(n)

#### Q8

## [Unique Paths II](./problems/arrays4.md#Q8)

### Approach

- Solution is almost similar to the previous problem, except we do an additional check if the obstacle grid has obstacle or not

```js
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const paths = Array.from(new Array(m), () => []);
  return getPaths(0, 0, m, n, obstacleGrid, paths);
};

function getPaths(i, j, m, n, obstacleGrid, paths) {
  // no paths found if cell indices are out of the matrix or obstacle is present
  if (i >= m || j >= n || obstacleGrid[i][j] === 1) {
    return 0;
  }

  // return memoized count if already found for the cell
  if (paths[i][j]) {
    return paths[i][j];
  }

  // when destination is found
  if (i === m - 1 && j === n - 1) {
    return 1;
  }

  // Add the number of paths possible in right and bottom directions
  let totalPaths = 0;
  totalPaths += getPaths(i + 1, j, m, n, obstacleGrid, paths);
  totalPaths += getPaths(i, j + 1, m, n, obstacleGrid, paths);

  paths[i][j] = totalPaths;

  return totalPaths;
}
```

##### Complexity

- Time: O(n)
- Space: O(n)
