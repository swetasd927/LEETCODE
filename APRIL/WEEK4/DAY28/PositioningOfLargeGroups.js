//https://leetcode.com/problems/positions-of-large-groups/?envType=problem-list-v2&envId=string

/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    let result = [];
    let start = 0;

    for (let i = 1; i <= s.length; i++) {
        // Group ends when char changes or string ends
        if (s[i] !== s[start]) {
            if (i - start >= 3) {
                result.push([start, i - 1]);
            }
            start = i;
        }
    }

    return result;
};

//Time Complexity: O(n)
// Space Complexity: O(1) (excluding output array)
// Track the start of each character group and when it ends, add it if its length is 3 or more.