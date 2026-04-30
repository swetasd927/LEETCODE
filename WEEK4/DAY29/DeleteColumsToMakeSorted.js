//https://leetcode.com/problems/delete-columns-to-make-sorted/?envType=problem-list-v2&envId=string

/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let count = 0;
    let rows = strs.length;
    let cols = strs[0].length;

    for (let col = 0; col < cols; col++) {
        for (let row = 1; row < rows; row++) {
            if (strs[row][col] < strs[row - 1][col]) {
                count++;
                break; // this column must be deleted
            }
        }
    }

    return count;
};

//Check each column top-to-bottom, and if any character is smaller 
//than the one above it, count that column for deletion.

//Time Complexity: O(n × m)
//Space Complexity: O(1)