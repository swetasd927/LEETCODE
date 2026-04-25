//https://leetcode.com/problems/longest-nice-substring/description/?envType=problem-list-v2&envId=string

/**
 * @param {string} s
 * @return {string}
 */

var longestNiceSubstring = function(s) {
    if (s.length < 2) return "";

    let set = new Set(s);

    for (let ch of s) {
        if (set.has(ch.toLowerCase()) && set.has(ch.toUpperCase())) continue;

        let left = longestNiceSubstring(s.slice(0, s.indexOf(ch)));
        let right = longestNiceSubstring(s.slice(s.indexOf(ch) + 1));

        return left.length >= right.length ? left : right;
    }

    return s;
};

//Split at the first character whose uppercase/lowercase pair is missing, recursively 
// solve both sides, and return the longer valid nice substring.

//Time: O(n²) average, recursive divide and conquer
//Space: O(n) recursion stack + substring storage
