//https://leetcode.com/problems/convert-a-number-to-hexadecimal/description/?envType=problem-list-v2&envId=string

/**
 * @param {number} num
 * @return {string}
 */

var toHex = function(num) {
    if (num === 0) return "0";

    let hex = "0123456789abcdef";
    let result = "";

    while (num !== 0 && result.length < 8) {
        result = hex[num & 15] + result;
        num >>>= 4;
    }

    return result;
};

//Use bit manipulation by extracting the last 4 bits (num & 15) each time and right 
// shifting unsigned (>>> 4) to build the hexadecimal string.

//Time: O(1) :  maximum 8 iterations for 32-bit integer
//Space: O(1) : fixed extra space
