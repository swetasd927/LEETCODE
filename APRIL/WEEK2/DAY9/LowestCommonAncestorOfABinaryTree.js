//https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/?envType=problem-list-v2&envId=rab78cw1

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
    if (!root || root === p || root === q) {
        return root;
    }

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if (left && right) return root;

    return left ? left : right;
}



/**
At each node:

If it matches p or q  return it
Recursively search left and right
If both sides return non-null  this node is LCA
 */

//Time: O(n) (visit every node once)
//Space: O(h) (recursion stack, h = height)