//https://leetcode.com/problems/remove-linked-list-elements/?envType=problem-list-v2&envId=linked-list

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

var removeElements = function(head, val) {
    // Dummy node helps handle deleting head nodes
    let dummy = new ListNode(0);
    dummy.next = head;

    let current = dummy;

    while (current.next !== null) {
        if (current.next.val === val) {
            // Skip the node with matching value
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return dummy.next;
};

//Use a dummy node to safely handle head deletions and skip nodes whose value equals val.

//Time Complexity: O(n) traverse the linked list once.
//Space Complexity: O(1) only one dummy node and pointer used.
