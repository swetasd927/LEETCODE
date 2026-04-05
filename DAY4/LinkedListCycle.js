//https://leetcode.com/problems/linked-list-cycle/?envType=problem-list-v2&envId=rab78cw1
//topic: hash table, linkedlist, two pointers

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = (head) => {
    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null) {
        slow = slow.next; //move 1 step
        fast = fast.next.next;//move 2 steps

        if(slow === fast) {
            return true; //cycle detected
        }
    }
    return false;//no cycle
};
//tc: O(n), sc: O(1): no extra memory

