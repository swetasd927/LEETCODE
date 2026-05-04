//https://leetcode.com/problems/largest-substring-between-two-equal-characters/submissions/1995320496/?envType=problem-list-v2&envId=hash-table


/**
Track the first occurrence index of each character using a map.
As you iterate:

If character is seen before → compute substring length:
currentIndex - firstIndex - 1
Keep updating the maximum length

 */

/**
 * @param {string} s
 * @return {number}
 */

var maxLengthBetweenEqualCharacters = function(s) {
    let map = new Map();
    let maxLen = -1;

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            maxLen = Math.max(maxLen, i - map.get(s[i]) - 1);
        } else {
            map.set(s[i], i);
        }
    }

    return maxLen;
};

//Store first index of each char, and whenever it repeats, 
//compute distance minus one and track max in one pass.

//Time: O(n) (single pass)
//Space: O(1) (at most 26 chars if lowercase)