//https://leetcode.com/problems/reshape-the-matrix/submissions/1981059059/?envType=problem-list-v2&envId=array


/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */

var matrixReshape = function(mat, r, c) {
    let m = mat.length;
    let n = mat[0].length;

    // Check if reshape is possible
    if (m * n !== r * c) {
        return mat;
    }

    let result = Array.from({ length: r }, () => Array(c));
    
    let index = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let newRow = Math.floor(index / c);
            let newCol = index % c;

            result[newRow][newCol] = mat[i][j];
            index++;
        }
    }

    return result;
};


//First, I check if reshape is possible by comparing total elements. Then I iterate through the 
// matrix in row order and map each element to its new position using index math

//Time: O(m × n)
//Space: O(r × c)

