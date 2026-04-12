//https://leetcode.com/problems/maximum-depth-of-binary-tree/description/?envType=problem-list-v2&envId=rab78cw1
//tree, dfs, bfs, binary tree



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
 * @return {number}
 */

var maxDepth = function(root) {
    if (!root) return 0;

    let left = maxDepth(root.left);
    let right = maxDepth(root.right);

    return 1 + Math.max(left, right);
};

//Depth is 1 + maximum depth of 
// left and right subtree.
//tc: O(n): visit every node once
//sc:O(h): recursion stack height of tree