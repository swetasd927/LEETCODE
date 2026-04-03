//pattern: iterative reverseal using 3 pointers (prev, curr, next)

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
var reverseList = (head) => {
    let prev = null;//prev node
    let curr = head;//curr node
    while(curr) {//traverse until end
        let nextTemp = curr.next;//store next node
        curr.next = prev;//reverse the link
        prev = curr;//move prev forward
        curr = nextTemp;//move current forward
    }
    return prev; //new head of reverse list
};
//Time: O(n) → traverse each node once
//Space: O(1) → no extra space used


//can also be solved recursively
var reverseList = function(head) {
    if (!head || !head.next) return head;  // Base case
    let p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
};

//Time: O(n)
//Space: O(n) → recursion stack