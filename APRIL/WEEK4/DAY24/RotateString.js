//https://leetcode.com/problems/rotate-string/description/?envType=problem-list-v2&envId=string

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */

var rotateString = function(s, goal) {
    if (s.length !== goal.length) return false;

    return (s + s).includes(goal);
};

//If goal is a rotated version of s, it must always appear inside (s + s).
//Time: O(n)
//Space: O(n)