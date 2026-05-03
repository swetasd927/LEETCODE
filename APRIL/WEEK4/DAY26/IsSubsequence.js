//https://leetcode.com/problems/is-subsequence/description/?envType=problem-list-v2&envId=string

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0; // pointer for s
    let j = 0; // pointer for t

    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }

    return i === s.length;
};

//two pointers moves through t, and whenever characters match, 
// move pointer of s; if all characters of s are matched, it is a subsequence.

//Time Complexity: O(n) where n = t.length
//Space Complexity: O(1)