//https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/?envType=problem-list-v2&envId=string

/**
 * @param {string} s
 * @return {string}
 */

var removeDuplicates = function(s) {
    let stack = [];

    for (let ch of s) {
        if (stack.length && stack[stack.length - 1] === ch) {
            stack.pop();
        } else {
            stack.push(ch);
        }
    }

    return stack.join("");
};

//Use a stack: if current character matches the top, remove it; otherwise push it.
//Time: O(n)
//Space: O(n)
