//https://leetcode.com/problems/range-addition-ii/?envType=problem-list-v2&envId=array

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */

var maxCount = function(m, n, ops) {
    if (ops.length === 0) return m * n;

    let minRow = m;
    let minCol = n;

    for (let [a, b] of ops) {
        minRow = Math.min(minRow, a);
        minCol = Math.min(minCol, b);
    }

    return minRow * minCol;
};

//Each operation increments a top-left rectangle. The maximum value appears in the intersection of all 
// operations. So I compute the minimum row and column limits across all ops, and return their product.

//Time: O(k) (k = number of operations), Space: O(1)
