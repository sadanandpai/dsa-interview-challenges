#### Q8

## [Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/solution/)

### Approach

- Naive approach would be to traverse through the linked list and store the duplicates in a set. Then traverse through the list and delete all the nodes present
- A better approach would be to remove the duplicates in a single pass. As the list is sorted, keep checking the next node value with the current node and if found duplicate remove all the duplicates.

```js
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head === null) return null;

  const base = new ListNode(0, null); // create a sentinel head
  let node = base; // create a pointer to point the nodes after removal

  while (head) {
    let duplicateFound = false;
    while (head.val === head.next?.val) {
      duplicateFound = true;
      head = head.next;
    }

    // if duplicate found, skip that node as well as no duplicate node should be present
    if (duplicateFound) {
      head = head.next;
    }

    // point the previous node to the head
    node.next = head;

    // if no duplicates found, just proceed to the next node
    if (!duplicateFound) {
      head = head.next;
      node = head;
    }
  }

  return base.next;
};
```

##### Complexity

- Time: O(n)
- Space: O(1)
