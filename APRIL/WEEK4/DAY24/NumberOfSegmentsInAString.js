//https://leetcode.com/problems/number-of-segments-in-a-string/description/?envType=problem-list-v2&envId=string

/**
 * @param {string} s
 * @return {number}
 */

var countSegments = function(s) {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== " " && (i === 0 || s[i - 1] === " ")) {
            count++;
        }
    }

    return count;
};

//Count a word only when the current character is not a space and the previous character 
// is a space (or it is the first character)
//Time: O(n)
//Space: O(1)