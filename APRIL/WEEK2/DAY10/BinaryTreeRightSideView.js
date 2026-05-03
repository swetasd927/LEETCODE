//https://leetcode.com/problems/binary-tree-right-side-view/description/?envType=problem-list-v2&envId=rab78cw1

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
 * @return {number[]}
 */

var rightSideView = function(root) {
    if (!root) return [];

    let res = [], q = [root];

    while (q.length) {
        let size = q.length;
        let node;

        for (let i = 0; i < size; i++) {
            node = q.shift();

            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }

        res.push(node.val); // last node of level
    }

    return res;
};

//At each level of the tree, the rightmost node is visible from the right side.
//Time: O(n) (visit every node once)
//Space: O(n) (queue)
