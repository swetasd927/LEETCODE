//https://leetcode.com/problems/largest-odd-number-in-string/?envType=problem-list-v2&envId=greedy

/**
 * @param {string} num
 * @return {string}
 */

var largestOddNumber = function(num) {
    // traverse from end
    for (let i = num.length - 1; i >= 0; i--) {
        // check odd digit
        if ((num[i] - '0') % 2 !== 0) {
            return num.slice(0, i + 1);
        }
    }

    return "";
};

//An odd number must end with an odd digit, so I traverse from the end to 
//find the first odd digit and return the prefix till that index. This 
//gives the largest possible odd substring in O(n) time and O(1) space.