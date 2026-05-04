//https://leetcode.com/problems/longest-harmonious-subsequence/description/?envType=problem-list-v2&envId=hash-table

/**
 * @param {number[]} nums
 * @return {number}
 */

var findLHS = function(nums) {
    let map = {};
    
    for (let n of nums) {
        map[n] = (map[n] || 0) + 1;
    }

    let maxLen = 0;

    for (let key in map) {
        let num = Number(key);
        if (map[num + 1]) {
            maxLen = Math.max(maxLen, map[num] + map[num + 1]);
        }
    }

    return maxLen;
};

//Count frequencies and find max sum of counts of numbers differing by exactly 1.
//Time Complexity: O(n)
//Space Complexity: O(n)