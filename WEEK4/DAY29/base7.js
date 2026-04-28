//https://leetcode.com/problems/base-7/?envType=problem-list-v2&envId=string

/**
 * @param {number} num
 * @return {string}
 */

var convertToBase7 = function(num) {
    return num.toString(7);
};

//JavaScript’s built-in toString(7) to directly convert the number into base 7 representation.

//Time  and Space Complexity: O(log₇n)

