//https://leetcode.com/problems/add-two-numbers/?envType=problem-list-v2&envId=linked-list

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

var addTwoNumbers = function(l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    let sum = carry;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);

    current.next = new ListNode(sum % 10);
    current = current.next;
  }

  return dummy.next;
};

//time and space: O(n, m)
//I used simulation with carry handling. I traversed both linked lists 
//together, added corresponding digits along with carry, created new nodes 
//for the result, and continued until both lists and carry were exhausted.
