//https://leetcode.com/problems/unique-paths/description/?envType=problem-list-v2&envId=rab78cw1
//Math, Dynamic Programming, Combinations

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

function uniquePaths(m, n) {
    let dp = new Array(n).fill(1);

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[j] = dp[j] + dp[j - 1];
        }
    }

    return dp[n - 1];
}


//I use dynamic programming where dp[i][j] represents number of ways to reach that cell. 
// Since movement is only right and down, each cell is sum of top and left cells.
//Time: O(m × n), Space: O(m × n)


