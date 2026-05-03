//https://leetcode.com/problems/binary-tree-paths/?envType=problem-list-v2&envId=string

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
 * @return {string[]}
 */

var binaryTreePaths = function(root) {
    let res = [];
    
    const dfs = (node, path) => {
        if (!node) return;
        
        path += node.val;
        
        if (!node.left && !node.right) {
            res.push(path);
            return;
        }
        
        path += "->";
        dfs(node.left, path);
        dfs(node.right, path);
    };
    
    dfs(root, "");
    return res;
};

//Perform DFS, build path string, and add it to result when reaching a leaf node.
//Time: O(n) (visit each node once)
//Space: O(h) recursion stack (h = height)