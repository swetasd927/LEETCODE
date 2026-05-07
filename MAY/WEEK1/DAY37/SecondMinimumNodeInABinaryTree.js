//https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/description/?envType=problem-list-v2&envId=depth-first-search
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

var findSecondMinimumValue = function(root) {
    let min = root.val;
    let secondMin = Infinity;

    function dfs(node) {
        if (node === null) return;

        // candidate for second minimum
        if (node.val > min && node.val < secondMin) {
            secondMin = node.val;
        }

        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);

    return secondMin === Infinity ? -1 : secondMin;
};

//Since root contains the minimum value due to the tree property, 
// I traverse the tree and find the smallest value greater than
//  root.val. DFS visits every node once, so time complexity is O(n), space: O(h)

