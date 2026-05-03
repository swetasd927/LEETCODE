//https://leetcode.com/problems/rotting-oranges/description/?envType=problem-list-v2&envId=rab78cw1


//Use BFS,Start from all rotten oranges,Each level = 1 minute
//Track fresh oranges If some remain  return -1


/**
 * @param {number[][]} grid
 * @return {number}
 */

function orangesRotting(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    
    let queue = [];
    let fresh = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) queue.push([r, c]);//injecting rotten oranges to stacl
            if (grid[r][c] === 1) fresh++;
        }
    }

    if (fresh === 0) return 0;

    let minutes = 0;
    let directions = [[1,0], [-1,0], [0,1], [0,-1]];

    while (queue.length > 0 && fresh > 0) {
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let [r, c] = queue.shift();

            for (let [dr, dc] of directions) {
                let nr = r + dr;
                let nc = c + dc;

                if (
                    nr >= 0 && nc >= 0 &&//neightbors
                    nr < rows && nc < cols &&
                    grid[nr][nc] === 1
                ) {
                    grid[nr][nc] = 2;
                    queue.push([nr, nc]);
                    fresh--;
                }
            }
        }

        minutes++;
    }

    return fresh === 0 ? minutes : -1;
}

/**
 * I used multi-source BFS because the infection spreads simultaneously from multiple rotten oranges. 
 * I first add all rotten oranges to a queue and count fresh ones. Then I process the grid level by level, 
 * where each level represents one minute. For each rotten orange, I check its 4-directional neighbors and 
 * convert fresh ones into rotten, adding them to the queue. I keep track of fresh
 *  oranges, and once all are rotten, I return the total minutes. If some remain unreachable, I return -1
 */

//Time: O(m × n)(each cell visited once)
//Space: O(m × n)(queue in worst case)



//We are given a grid where rotten oranges spread to adjacent fresh ones every
//  minute. We need to find the minimum time to rot all oranges or return -1 if impossible