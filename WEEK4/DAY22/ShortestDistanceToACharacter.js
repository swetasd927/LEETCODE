//https://leetcode.com/problems/shortest-distance-to-a-character/description/?envType=problem-list-v2&envId=array
//Senior Array Two Pointers String

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */

var shortestToChar = function(s, c) {
    let n = s.length;
    let res = new Array(n);
    
    let prev = -Infinity;
    
    // left to right
    for (let i = 0; i < n; i++) {
        if (s[i] === c) prev = i;
        res[i] = i - prev;
    }
    
    prev = Infinity;
    
    // right to left
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === c) prev = i;
        res[i] = Math.min(res[i], prev - i);
    }
    
    return res;
};

//I solve this using two passes :first left to right to track distance from the last seen 
// target character, then right to left to update with the nearest one. Finally, I take the 
// minimum distance at each index.

//Time: O(n), Space: O(n)