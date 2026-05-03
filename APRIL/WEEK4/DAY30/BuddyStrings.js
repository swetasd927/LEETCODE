//https://leetcode.com/problems/buddy-strings/description/?envType=problem-list-v2&envId=string

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if (s.length !== goal.length) return false;

    // If strings are already same,
    // need at least one duplicate character
    if (s === goal) {
        let set = new Set(s);
        return set.size < s.length;
    }

    let diff = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            diff.push(i);
        }
    }

    return diff.length === 2 &&
        s[diff[0]] === goal[diff[1]] &&
        s[diff[1]] === goal[diff[0]];
};

//If strings are equal, check for duplicate chars; otherwise exactly 
// two mismatches must cross-match after one swap.

//Time Complexity: O(n)
// Space Complexity: O(1)
