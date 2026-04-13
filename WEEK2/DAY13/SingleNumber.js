//https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/?envType=problem-list-v2&envId=array


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var sortedArrayToBST = function(nums) {
    
    function build(left, right) {
        if (left > right) return null;

        let mid = Math.floor((left + right) / 2);
        let root = new TreeNode(nums[mid]);

        root.left = build(left, mid - 1);
        root.right = build(mid + 1, right);

        return root;
    }

    return build(0, nums.length - 1);
};

//Using divide and conquer, I pick middle as root to keep BST height-balanced.

//Time: O(n) (visit each node once)
//Space: O(log n) (recursion stack)