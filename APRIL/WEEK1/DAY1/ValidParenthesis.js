/**
 * Given a string s containing just the characters
 *  '(', ')', '{', '}', '[' and ']', 
 * determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

Example 5:

Input: s = "([)]"

Output: false

 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 
 * 
 */


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = (s) => {
    const stack = [];
    const map = {
        ')':'(', 
        ']':'[', 
        "}":"{"
    };
    for ( let char of s) {
        if (char === '(' || char === '[' || char === '{'){
            stack.push(char);
        } else {
            if(stack.pop() !== map[char]) return false;
        }
    }
    return stack.length === 0;
};

//Time complexity: we iterate through the string once: O(n)
//Space complexity: : O(n):in the worst case (all opening brackets), the stack stores all characters.

var isValid = function(s) {
    let stack = [];
    let map = { '(': ')', '{': '}', '[': ']' };

    for (let char of s) {
        if (map[char]) {
            stack.push(map[char]);
        } else if (stack.pop() !== char) {
            return false;
        }
    }

    return stack.length === 0;
};