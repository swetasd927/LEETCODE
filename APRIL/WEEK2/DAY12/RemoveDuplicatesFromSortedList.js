//https://leetcode.com/problems/remove-duplicates-from-sorted-list/
//Linked List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let curr = head;
    while(curr && curr.next) {
         if (curr.val === curr.next.val) {
            // skip duplicate
            curr.next = curr.next.next;
        } else {
            // move forward
            curr = curr.next;
        }
    }

    return head;
};

//Time: O(n) (single pass)
//Space: O(1) (in-place)