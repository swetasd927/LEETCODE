//https://leetcode.com/problems/transpose-matrix/?envType=problem-list-v2&envId=array

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */


var transpose = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    let res = Array.from({ length: n }, () => Array(m));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res[j][i] = matrix[i][j];
        }
    }

    return res;
};

//I create a new matrix of size n x m and map each element such that 
// res[j][i] = matrix[i][j], effectively swapping rows and columns.

//Time: O(m × n)
//Space: O(m × n)