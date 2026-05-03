//https://leetcode.com/problems/count-binary-substrings/description/?envType=problem-list-v2&envId=string


/**
 * @param {string} s
 * @return {number}
 */

var countBinarySubstrings = function(s) {
    let prev = 0, curr = 1, count = 0;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            curr++;
        } else {
            count += Math.min(prev, curr);
            prev = curr;
            curr = 1;
        }
    }

    count += Math.min(prev, curr);
    return count;
};

//Count consecutive groups of 0s and 1s, and for each adjacent pair add min(previousGroup, currentGroup).
//Time: O(n)
//Space: O(1)