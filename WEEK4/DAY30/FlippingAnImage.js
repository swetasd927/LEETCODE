//https://leetcode.com/problems/flipping-an-image/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    for (let row of image) {
        // Reverse row and invert values
        row.reverse();

        for (let i = 0; i < row.length; i++) {
            row[i] = row[i] ^ 1; // 0->1, 1->0
        }
    }

    return image;
};

//Reverse each row first, then invert every bit using XOR with 1.
//Time Complexity: O(n²)
// Space Complexity: O(1)