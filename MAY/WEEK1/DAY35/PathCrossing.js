//https://leetcode.com/problems/path-crossing/description/?envType=problem-list-v2&envId=hash-table

/**
Approach
Start at (0,0)
Track every visited coordinate in a Set
For each move:
Update (x, y)
If already visited → return true
If no repeats → return false
 */


/**
 * @param {string} path
 * @return {boolean}
 */

var isPathCrossing = function(path) {
    let x = 0, y = 0;
    let visited = new Set();
    
    visited.add("0,0");

    for (let move of path) {
        if (move === 'N') y++;
        else if (move === 'S') y--;
        else if (move === 'E') x++;
        else if (move === 'W') x--;

        let key = x + "," + y;

        if (visited.has(key)) return true;

        visited.add(key);
    }

    return false;
};


//Simulate movement and use a set to detect revisiting coordinates in one pass.

//Time: O(n)
//Space: O(n) (storing visited points)
