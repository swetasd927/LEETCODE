//https://leetcode.com/problems/univalued-binary-tree/?envType=problem-list-v2&envId=depth-first-search

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

var isUnivalTree = function(root) {
    let value = root.val;

    function dfs(node) {
        if (node === null) return true;

        // value mismatch
        if (node.val !== value) return false;

        return dfs(node.left) && dfs(node.right);
    }

    return dfs(root);
};

//I store the root value and perform DFS. If any node 
//differs from the root value, I return false. Otherwise 
//the tree is uni-valued. Time complexity is O(n).