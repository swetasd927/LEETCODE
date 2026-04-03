/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    const count = {};
    //counting freq of each char
    for(let char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    //dec freq based on t
    for(let char of t) {
        if(!count[char]) return false;
        count[char] --;
    }
    return true;
};
//tc: O(n): we iterate over both strings 
// sc: O(1) : max 26 lowercase letters