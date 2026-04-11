//https://leetcode.com/problems/number-of-islands/description/?envType=problem-list-v2&envId=rab78cw1
//Array, BFS, DFS, Union-Find,Matrix

/**
 * Traverse every cell
When you find '1':
Increase island count
Run DFS to mark entire island as visited ('0')
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */

function numIslands(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let count = 0;

    function dfs(r, c) {
        if (r < 0 || c < 0 || r >= m || c >= n || grid[r][c] === '0') {
            return;
        }

        // mark visited
        grid[r][c] = '0';

        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                count++;
                dfs(i, j);
            }
        }
    }

    return count;
}

//I traverse the grid and whenever I find a land cell, I treat it as a new island and use 
// DFS to mark all connected land cells as visited, ensuring each island is counted only once.

//Time: O(m × n)(each cell visited once)
//Space: O(m × n) (recursion stack worst case)