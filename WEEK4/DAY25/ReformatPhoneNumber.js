//https://leetcode.com/problems/reformat-phone-number/description/?envType=problem-list-v2&envId=string

/**
 * @param {string} number
 * @return {string}
 */

var reformatNumber = function(number) {
    let digits = number.replace(/[- ]/g, ""); 
    let res = [];
    let i = 0;

    while (digits.length - i > 4) {
        res.push(digits.slice(i, i + 3));
        i += 3;
    }

    let remaining = digits.length - i;

    if (remaining === 4) {
        res.push(digits.slice(i, i + 2));
        res.push(digits.slice(i + 2, i + 4));
    } else {
        res.push(digits.slice(i));
    }

    return res.join("-");
};

//First remove spaces/dashes, then group digits in 3s until 4 or fewer remain, and 
// handle the last 2–4 digits based on the rules.

//Time: O(n) traverse string once
//Space: O(n)  for storing formatted result