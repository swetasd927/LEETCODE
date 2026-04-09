//https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/?envType=problem-list-v2&envId=rab78cw1


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
function kthSmallest(root, k) {
    let count = 0;
    let result = null;

    function inorder(node) {
        if (!node || result !== null) return;

        inorder(node.left);

        count++;
        if (count === k) {
            result = node.val;
            return;
        }

        inorder(node.right);
    }

    inorder(root);
    return result;
}

//Traverse BST in sorted order and pick the kth element.

/**
 *A BST is ordered: left < root < right.
Doing inorder traversal visits nodes in sorted order.
Keep a count while traversing; when count = k, that node is the answer.
This works recursively or iteratively with a stack.
 */
//Time: O(n), Space: O(h) (recursion stack)
