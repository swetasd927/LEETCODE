//https://leetcode.com/problems/string-to-integer-atoi/description/?envType=problem-list-v2&envId=rab78cw1
//String
/**
 * @param {string} s
 * @return {number}
 */
 
var myAtoi = function(s) {
    let i = 0, sign = 1, num = 0;
    const INT_MAX = 2**31 - 1, INT_MIN = -(2**31);

    // skip spaces
    while (s[i] === ' ') i++;

    // sign
    if (s[i] === '+' || s[i] === '-') {
        if (s[i] === '-') sign = -1;
        i++;
    }

    // number
    while (s[i] >= '0' && s[i] <= '9') {
        let digit = s[i] - '0';

        // clamp (overflow check)
        if (num > Math.floor(INT_MAX / 10) || 
           (num === Math.floor(INT_MAX / 10) && digit > 7)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }

        num = num * 10 + digit;
        i++;
    }

    return num * sign;
};
//We skip spaces, detect sign, build number digit by digit, stop at non-digit, clamp overflow.

//I simulate the parsing process by skipping spaces, handling sign, reading digits, and preventing overflow using bounds

/**
Time Complexity: O(n) we scan the string once from start to end, ignoring non-digit characters after the number.

Space Complexity: O(1)  only a few variables (i, num, sign) are used, no extra space proportional to input size.
 */