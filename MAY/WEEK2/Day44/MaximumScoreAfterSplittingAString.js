//https://leetcode.com/problems/maximum-score-after-splitting-a-string/submissions/2002921135/?envType=problem-list-v2&envId=prefix-sum

/**
 * @param {string} s
 * @return {number}
 */

var maxScore = function(s) {
    let ones = 0;

    // count total 1s
    for (let ch of s) {
        if (ch === "1") ones++;
    }

    let zeros = 0;
    let maxScore = 0;

    // split before last char (non-empty right)
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === "0") zeros++;
        else ones--;

        maxScore = Math.max(maxScore, zeros + ones);
    }

    return maxScore;
};

//I first count total 1s, then iterate while maintaining left 
//zeros and decreasing right ones dynamically. At each split, 
//I compute zerosLeft + onesRight and track the maximum. 
//Time complexity and SPace complexity for this is O(n).