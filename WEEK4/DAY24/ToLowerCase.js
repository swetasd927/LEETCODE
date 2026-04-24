//https://leetcode.com/problems/to-lower-case/description/?envType=problem-list-v2&envId=string

/**
 * @param {string} s
 * @return {string}
 */

var toLowerCase = function(s) {
    let result = "";

    for (let ch of s) {
        let code = ch.charCodeAt(0);

        if (code >= 65 && code <= 90) {
            result += String.fromCharCode(code + 32);
        } else {
            result += ch;
        }
    }

    return result;
};

//Check each character’s ASCII value, and if it’s uppercase (A-Z), 
//add 32 to convert it into lowercase.
//Time: O(n)
//Space: O(n)
