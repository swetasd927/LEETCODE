/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let len = 0;
    let i = s.length - 1;
    //skipping spaces
    while(i >= 0 && s[i] === ' ') i--;
    //counting last word char
    while(i >= 0 && s[i] !== ' '){
        len++;
        i--;
    }
    return len;
};
//we only traverse the string once, starting from the end, so we ignore
//leading/trailing spaces efficiently and directly count the last word

//Time complexity:O(n) : n is the length of the string s
//Space complexity:O(n) : no extra arrays or string are created