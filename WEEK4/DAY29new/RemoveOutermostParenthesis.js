//https://leetcode.com/problems/remove-outermost-parentheses/?envType=problem-list-v2&envId=string

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let result = "";
    let balance = 0;

    for (let ch of s) {
        if (ch === '(') {
            // Add only if it's not outermost
            if (balance > 0) result += ch;
            balance++;
        } else {
            balance--;
            // Add only if it's not outermost
            if (balance > 0) result += ch;
        }
    }

    return result;
};
//Use a balance counter and skip the first ( and last ) of each primitive valid parentheses group.

//Time Complexity: O(n)
//Space Complexity: O(n)