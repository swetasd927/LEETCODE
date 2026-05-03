//https://leetcode.com/problems/invert-binary-tree/description/?envType=problem-list-v2&envId=rab78cw1
//tree, dfs, bfs, binary tree


var invertTree = function(root) {
    if (!root) return null;

    // swap left and right
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    // recurse
    invertTree(root.left);
    invertTree(root.right);

    return root;
};


//At each node, swap left and right children using DFS.

/**
  TC: O(n) = visit each node once
 SC: O(h) : recursion stack (h = tree height)
 */