//https://leetcode.com/problems/merge-two-binary-trees/description/?envType=problem-list-v2&envId=depth-first-search

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var mergeTrees = function(root1, root2) {
    // if one node is null, return the other
    if (root1 === null) return root2;
    if (root2 === null) return root1;

    // merge current node values
    root1.val = root1.val + root2.val;

    // merge left and right subtrees
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);

    return root1;
};

//I use DFS recursion.
//If one node is null, return the other.
//Otherwise sum the values and recursively merge left and right subtrees.
// Time complexity is O(n + m), space complexity is O(h).”