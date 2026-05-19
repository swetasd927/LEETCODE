//https://leetcode.com/problems/minimum-depth-of-binary-tree/submissions/2007515524/

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

 var minDepth = function(root) {
    if (!root) return 0;

    let queue = [[root, 1]];

    while (queue.length) {
        let [node, depth] = queue.shift();

        if (!node.left && !node.right) return depth;

        if (node.left) queue.push([node.left, depth + 1]);
        if (node.right) queue.push([node.right, depth + 1]);
    }
};
//Used BFS because the first leaf node encountered gives the minimum depth 
//immediately, avoiding unnecessary traversal including time and space O(n) 