//https://leetcode.com/problems/calculate-digit-sum-of-a-string/description/?envType=problem-list-v2&envId=string

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var digitSum = function(s, k) {
    while (s.length > k) {
        let newStr = "";

        for (let i = 0; i < s.length; i += k) {
            let group = s.slice(i, i + k);
            let sum = 0;

            for (let ch of group) {
                sum += Number(ch);
            }

            newStr += sum.toString();
        }

        s = newStr;
    }

    return s;
};

//Repeatedly split the string into groups of size k, replace each group 
// with its digit sum, and continue until length becomes ≤ k.

//Time: O(n × rounds) each round traverses the string
//Space: O(n) for building new string
