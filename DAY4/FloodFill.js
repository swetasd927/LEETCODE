//https://leetcode.com/problems/flood-fill/submissions/1968635292/?envType=problem-list-v2&envId=rab78cw1

var floodFill = function(image, sr, sc, color) {
    let originalColor = image[sr][sc];
    
    // Edge case: if already same color
    if (originalColor === color) return image;

    function dfs(r, c) {
        // Boundary check + color check
        if (
            r < 0 || c < 0 ||
            r >= image.length || c >= image[0].length ||
            image[r][c] !== originalColor
        ) return;

        // Fill color
        image[r][c] = color;

        // Explore 4 directions
        dfs(r + 1, c); // down
        dfs(r - 1, c); // up
        dfs(r, c + 1); // right
        dfs(r, c - 1); // left
    }

    dfs(sr, sc);
    return image;
};
/**
 * Using DFS recursion, can use bfs too
Traverse only connected cells with same original color
Update color while visiting
 */

/**
 * Time: O(m * n)  worst case visit all cells
Space: O(m * n)  recursion stack (in worst case)
 */