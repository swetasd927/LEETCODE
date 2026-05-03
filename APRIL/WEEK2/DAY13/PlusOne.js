//https://leetcode.com/problems/plus-one/description/?envType=problem-list-v2&envId=array
//Array, Math

/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    return [1, ...digits];
};


//Traverse from right, handle carry. If digit < 9, increment and return. If all 9s, prepend 1.

//Time: O(n), Space: O(1) (ignoring output)