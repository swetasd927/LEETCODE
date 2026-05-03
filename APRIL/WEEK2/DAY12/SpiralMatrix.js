//https://leetcode.com/problems/spiral-matrix/?envType=problem-list-v2&envId=rab78cw1

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var spiralOrder = function(matrix) {
    let res = [];
    
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        
        // 1. left → right
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i]);
        }
        top++;

        // 2. top → bottom
        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][right]);
        }
        right--;

        // 3. right → left
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                res.push(matrix[bottom][i]);
            }
            bottom--;
        }

        // 4. bottom → top
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                res.push(matrix[i][left]);
            }
            left++;
        }
    }

    return res;
};

//Time: O(m × n) (visit every element once)
//Space: O(1) (excluding output)