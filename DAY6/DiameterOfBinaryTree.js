//https://leetcode.com/problems/diameter-of-binary-tree/?envType=problem-list-v2&envId=rab78cw1
//senior, tree, dfs, binary tree


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
var diameterOfBinaryTree = function(root) {
     let diameter = 0;

    function dfs(node) {
        if (!node) return 0;

        let left = dfs(node.left);
        let right = dfs(node.right);

        // update diameter
        diameter = Math.max(diameter, left + right);

        // return height
        return 1 + Math.max(left, right);
    }

    dfs(root);
    return diameter;
};

//At each node, compute left and right heights and update the maximum path (diameter).

/**
 * Time Complexity:
O(n) we visit each node once
Space Complexity:
O(h) → recursion stack (h = height of tree)
 */