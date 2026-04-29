//https://leetcode.com/problems/greatest-common-divisor-of-strings/?envType=problem-list-v2&envId=string

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) return "";

    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

    return str1.slice(0, gcd(str1.length, str2.length));
};

//If str1 + str2 !== str2 + str1, no answer; otherwise return prefix of length gcd(len1, len2).

//Time Complexity: O(n + m)
//Space Complexity: O(1)