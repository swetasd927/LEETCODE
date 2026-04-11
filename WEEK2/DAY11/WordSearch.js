//https://leetcode.com/problems/course-schedule/submissions/1975109406/?envType=problem-list-v2&envId=rab78cw1
//Array, String, Backtracking, DFS, Matrix

//Try every cell as starting point
//Run DFS to match characters step by step
//Mark visited cell temporarily
//Backtrack if path fails

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

function exist(board, word) {
    let m = board.length;
    let n = board[0].length;

    function dfs(r, c, i) {
        if (i === word.length) return true;

        if (
            r < 0 || c < 0 ||
            r >= m || c >= n ||
            board[r][c] !== word[i]
        ) {
            return false;
        }

        let temp = board[r][c];
        board[r][c] = '#'; // mark visited

        let found =
            dfs(r + 1, c, i + 1) ||
            dfs(r - 1, c, i + 1) ||
            dfs(r, c + 1, i + 1) ||
            dfs(r, c - 1, i + 1);

        board[r][c] = temp; // backtrack

        return found;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }

    return false;
}

//I use DFS with backtracking. For each cell, I try to match the word
//  recursively in all 4 directions while marking visited cells to avoid reuse.

//Time: O(m × n × 4^L), Space: O(L)
//m and n : total cells, L : word length