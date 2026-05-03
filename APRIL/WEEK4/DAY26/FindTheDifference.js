//https://leetcode.com/problems/find-the-difference/submissions/1988753574/?envType=problem-list-v2&envId=string

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

var findTheDifference = function(s, t) {
    let xor = 0;

    for (let ch of s) {
        xor ^= ch.charCodeAt(0);
    }

    for (let ch of t) {
        xor ^= ch.charCodeAt(0);
    }

    return String.fromCharCode(xor);
};

//I used XOR because same characters cancel each other (a ^ a = 0), so the remaining 
// value is the extra added character.

//Time Complexity: O(n)
//Space Complexity: O(1)