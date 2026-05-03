//https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/?envType=problem-list-v2&envId=rab78cw1

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

function lowestCommonAncestor(root, p, q) {
    while (root) {
        if (p.val < root.val && q.val < root.val) {
            root = root.left;
        } 
        else if (p.val > root.val && q.val > root.val) {
            root = root.right;
        } 
        else {
            return root;
        }
    }
}

//If both nodes are smaller, go left. If both are greater, go right. Otherwise, current node is LCA.

//Time: O(h) (height of tree), Space: O(1) (iterative)