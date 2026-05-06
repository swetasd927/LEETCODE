//https://leetcode.com/problems/symmetric-tree/

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
var isSymmetric = function(root) {
    if (!root) return true;

    function isMirror(t1, t2) {
        if (!t1 && !t2) return true;
        if (!t1 || !t2) return false;
        if (t1.val !== t2.val) return false;

        return isMirror(t1.left, t2.right) &&
               isMirror(t1.right, t2.left);
    }

    return isMirror(root.left, root.right);
};


//I’ll check if the left and right subtrees are mirror images. 
// If both nodes are equal, then recursively compare left of one 
//with right of the other and vice versa.” 

//Time: O(n)
//Space: O(h) (recursion stack) 