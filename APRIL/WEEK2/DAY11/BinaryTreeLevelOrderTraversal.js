//https://leetcode.com/problems/binary-tree-level-order-traversal/description/?envType=problem-list-v2&envId=rab78cw1
//Tree, BFS, Binary Tree

/**
 * Start with root in queue
While queue is not empty:
take current level size
process exactly those many nodes
store children for next level
 */

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
 * @return {number[][]}
 */

function levelOrder(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        let levelSize = queue.length;
        let level = [];

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            level.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(level);
    }

    return result;
}
//I perform BFS using a queue. At each step, I process all nodes 
// of the current level (using queue size), collect their values, 
// and push their children for the next level

//Time: O(n) (each node visited once)
//Space: O(n) (queue + result)