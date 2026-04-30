//https://leetcode.com/problems/first-unique-character-in-a-string/description/?envType=problem-list-v2&envId=string

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = {};

    // Count frequency
    for (let ch of s) {
        map[ch] = (map[ch] || 0) + 1;
    }

    // Find first unique character
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) {
            return i;
        }
    }

    return -1;
};

//Count character frequencies first, then scan again to find the first character with frequency 1.
//Time Complexity: O(n)
//Space Complexity: O(1) only 26 lowercase letters max