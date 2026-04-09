//https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/?envType=problem-list-v2&envId=rab78cw1



//Take root from preorder, find it in inorder to divide left and right parts, then recursively build both sides.
//time and space: O(n)