//https://leetcode.com/problems/maximum-69-number/submissions/1997991251/?envType=problem-list-v2&envId=greedy

/**
 * @param {number} num
 * @return {number}
 */

var maximum69Number = function(num) {
    let s = num.toString().split("");

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '6') {
            s[i] = '9';
            break; 
        }
    }

    return parseInt(s.join(""));
};

//Time: O(n) scan digits once
//Space: O(n) string conversion

//We greedily change the leftmost 6 to 9 because it gives 
//the maximum increase in value due to place significance, 
//and only one change is allowed.”
