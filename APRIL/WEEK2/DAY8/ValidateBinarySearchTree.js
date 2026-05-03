//https://leetcode.com/problems/validate-binary-search-tree/description/?envType=problem-list-v2&envId=rab78cw1


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
var isValidBST = function(root) {
    function helper(node, min, max) {
        if (!node) return true;
        if (node.val <= min || node.val >= max) return false;

        return helper(node.left, min, node.val) &&
               helper(node.right, node.val, max);
    }

    return helper(root, -Infinity, Infinity);
};

//I use recursion with min and max bounds. Each node must lie within a
//  valid range. Left subtree updates max, right subtree updates min.


//Time: O(n)
//Space: O(h) (recursion stack, h = height)