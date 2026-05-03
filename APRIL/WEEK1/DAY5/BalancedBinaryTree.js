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
    function height(node) {
        if (!node) return 0;

        const left = height(node.left);
        const right = height(node.right);

        if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
            return -1;
        }

        return Math.max(left, right) + 1;
    }

    return height(root) !== -1;
};

//Checked height of each subtree using DFS and returned -1 early if any imbalance was found.

/**
 * Time: O(n) (each node visited once)
Space: O(h) (recursion stack, h = height)
 */