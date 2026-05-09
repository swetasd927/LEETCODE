//https://leetcode.com/problems/maximum-number-of-balloons/?envType=problem-list-v2&envId=hash-table

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let b = 0, a = 0, l = 0, o = 0, n = 0;

    for (let ch of text) {
        if (ch === 'b') b++;
        else if (ch === 'a') a++;
        else if (ch === 'l') l++;
        else if (ch === 'o') o++;
        else if (ch === 'n') n++;
    }

    l >>= 1; 
    o >>= 1;

    return Math.min(b, a, l, o, n);
};

//Count only the required characters for ‘balloon’ and 
//return the limiting frequency after adjusting l and o by half.

//Time: O(n)
//Space: O(1)
