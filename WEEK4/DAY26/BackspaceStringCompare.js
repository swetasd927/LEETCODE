//https://leetcode.com/problems/backspace-string-compare/description/?envType=problem-list-v2&envId=string

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    function build(str) {
        let stack = [];

        for (let ch of str) {
            if (ch === "#") {
                stack.pop();
            } else {
                stack.push(ch);
            }
        }

        return stack.join("");
    }

    return build(s) === build(t);
};

//i used a stack to simulate typing—push characters normally, 
// and pop when # appears, then compare final strings.


//Time and space: O(n + m)
