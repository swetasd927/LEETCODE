//https://leetcode.com/problems/01-matrix/?envType=problem-list-v2&envId=rab78cw1


/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

function updateMatrix(mat) {
    let m = mat.length;
    let n = mat[0].length;

    let queue = [];
    let dist = Array.from({ length: m }, () => Array(n).fill(Infinity));

    // Step 1: push all 0s into queue
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                dist[i][j] = 0;
                queue.push([i, j]);
            }
        }
    }

    let dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];

    // Step 2: BFS
    while (queue.length > 0) {
        let [r, c] = queue.shift();

        for (let [dr, dc] of dirs) {
            let nr = r + dr;
            let nc = c + dc;

            if (nr >= 0 && nr < m && nc >= 0 && nc < n) {
                if (dist[nr][nc] > dist[r][c] + 1) {
                    dist[nr][nc] = dist[r][c] + 1;
                    queue.push([nr, nc]);
                }
            }
        }
    }

    return dist;
    //time and space: O(m × n)
}

//I use multi-source BFS starting from all 0s. Each expansion gives minimum 
// distance to reach 1s since BFS explores level by level


//Put all 0 cells into a queue Mark all 1 as infinity (or unvisited)
//BFS in 4 directions Update distance = previous + 1

//Time: O(m × n), Space: O(m × n)