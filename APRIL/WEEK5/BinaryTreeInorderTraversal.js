//https://leetcode.com/problems/binary-tree-inorder-traversal/description/

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
 * @return {number[]}
 */

var inorderTraversal = function(root) {
    let result = [];
    let stack = [];
    let curr = root;

    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }

        curr = stack.pop();
        result.push(curr.val);
        curr = curr.right;
    }

    return result;
};

//Keep going left first, then visit the node, then go right using a stack to follow inorder.

//Time Complexity: O(n)
//Space Complexity: O(n)
