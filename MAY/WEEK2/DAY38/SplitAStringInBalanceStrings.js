//https://leetcode.com/problems/split-a-string-in-balanced-strings/?envType=problem-list-v2&envId=greedy

/**
 * @param {string} s
 * @return {number}
 */

var balancedStringSplit = function(s) {
    let balance = 0;
    let count = 0;

    for (let ch of s) {

        if (ch === 'R') {
            balance++;
        } else {
            balance--;
        }

        if (balance === 0) {
            count++;
        }
    }

    return count;
};

//We greedily track balance using +1 for R and -1 for L, 
//and split whenever balance becomes zero, maximizing 
//the number of balanced substrings.
//time: O(n), space: O(1)