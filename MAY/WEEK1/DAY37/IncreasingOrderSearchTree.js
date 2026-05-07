//https://leetcode.com/problems/increasing-order-search-tree/description/?envType=problem-list-v2&envId=depth-first-search
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
 * @return {TreeNode}
 */

var increasingBST = function(root) {
    let dummy = new TreeNode(0);
    let current = dummy;

    function inorder(node) {
        if (node === null) return;

        inorder(node.left);

        // remove left child
        node.left = null;

        // attach to right
        current.right = node;
        current = node;

        inorder(node.right);
    }

    inorder(root);

    return dummy.right;
};

//I use inorder traversal because BST inorder gives sorted order. While traversing, I
//remove left pointers and connect nodes using only right pointers. Time complexity 
//is O(n), space is O(h).