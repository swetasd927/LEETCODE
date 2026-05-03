//https://leetcode.com/problems/pascals-triangle/description/?envType=problem-list-v2&envId=array
//Array, DP

/**
 * @param {number} numRows
 * @return {number[][]}
 */

var generate = function(numRows) {
    let triangle = [];

    for (let i = 0; i < numRows; i++) {
        let row = new Array(i + 1).fill(1);

        for (let j = 1; j < i; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }

        triangle.push(row);
    }

    return triangle;
};

//I build Pascal’s Triangle row by row. Each row starts and ends with 1. For middle elements, 
// I take the sum of the two numbers directly above from the previous row. I use a nested loop 
// to construct each row and push it into the result.

//Time: O(n²)  we generate each row and each element inside it.
//Space: O(n²) We store the entire triangle.
