//https://leetcode.com/problems/add-strings/description/?envType=problem-list-v2&envId=string

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

var addStrings = function(num1, num2) {
    let i = num1.length - 1, j = num2.length - 1;
    let carry = 0, res = "";

    while (i >= 0 || j >= 0 || carry) {
        let sum = carry;

        if (i >= 0) sum += num1.charCodeAt(i--) - 48;
        if (j >= 0) sum += num2.charCodeAt(j--) - 48;

        res = (sum % 10) + res;
        carry = Math.floor(sum / 10);
    }

    return res;
};

//Traverse both strings from right to left, add digits with carry, and build the result string.
//Time: O(max(n, m))
//Space: O(n)