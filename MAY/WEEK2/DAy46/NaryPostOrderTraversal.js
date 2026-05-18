//https://leetcode.com/problems/n-ary-tree-postorder-traversal/?envType=problem-list-v2&envId=depth-first-search

//day 48

/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */

var postorder = function(root) {
    if (!root) return [];

    let stack = [root];
    let res = [];

    while (stack.length) {
        let node = stack.pop();
        res.push(node.val);

        for (let child of node.children) {
            stack.push(child);
        }
    }

    return res.reverse();
};

//Time: O(n)  and space same
//Used DFS postorder traversal: process all children first, then current node. 
//Iterative version uses stack + reverse trick to achieve postorder in O(n).