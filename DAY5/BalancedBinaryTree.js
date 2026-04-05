//https://leetcode.com/problems/balanced-binary-tree/description/?envType=problem-list-v2&envId=rab78cw1
//topic:tree, dfs, binary tree


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
 * @return {boolean}
 */
var isBalanced = function(root) {
    function checkHeight(node) {
        if (!node) return 0;

        let left = checkHeight(node.left);
        if (left === -1) return -1;

        let right = checkHeight(node.right);
        if (right === -1) return -1; 

        if (Math.abs(left - right) > 1) return -1;

        return Math.max(left, right) + 1;
    }
    return checkHeight(root) !== -1;
};

//Checked height of each subtree using DFS and returned -1 early if any imbalance was found.

/**
 * Time: O(n) (each node visited once)
Space: O(h) (recursion stack, h = height)
 */