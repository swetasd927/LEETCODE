//https://leetcode.com/problems/binary-tree-preorder-traversal/

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

var preorderTraversal = function(root) {
    let result = [];

    function dfs(node) {
        if (!node) return;

        result.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);

    return result;
};

//Time: O(n), Space: O(n)
//Preorder traversal follows Root → Left → Right. 
//In iterative approach, I use a stack, process 
//the node, then push right first and left second 
// so left gets processed before right. Time 
// complexity is O(n), Space:O(n)