//https://leetcode.com/problems/island-perimeter/submissions/1980277637/?envType=problem-list-v2&envId=array

/**
 * @param {number[][]} grid
 * @return {number}
 */

var islandPerimeter = function(grid) {
    let perimeter = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            
            if (grid[i][j] === 1) {
                perimeter += 4;

                // check top
                if (i > 0 && grid[i - 1][j] === 1) {
                    perimeter -= 2;
                }

                // check left
                if (j > 0 && grid[i][j - 1] === 1) {
                    perimeter -= 2;
                }
            }
        }
    }

    return perimeter;
};


//I iterate through the grid. For each land cell, I add 4 sides. Then I check its top and left 
//neighbors—if they are also land, I subtract 2 for each shared edge. This avoids double counting
//and gives the correct perimeter in O(n × m) time.

//Time: O(row × col), Space: O(1)
