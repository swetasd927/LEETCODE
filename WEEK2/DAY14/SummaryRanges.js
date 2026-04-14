//https://leetcode.com/problems/summary-ranges/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums
 * @return {string[]}
 */

var summaryRanges = function(nums) {
    let res = [];
    let i = 0;

    while (i < nums.length) {
        let start = nums[i];

        // move while consecutive
        while (i + 1 < nums.length && nums[i] + 1 === nums[i + 1]) {
            i++;
        }

        let end = nums[i];

        // push result
        if (start === end) {
            res.push(start.toString());
        } else {
            res.push(start + "->" + end);
        }

        i++;
    }

    return res;
};

//time:O(n), space:O(1)

//Since the array is sorted and unique, I iterate once and group consecutive numbers into ranges. 
// I track the start, extend while numbers are continuous, and push either a single number or range
//  string. This gives O(n) time and O(1) extra space

//Time: O(n) (one pass)
//Space: O(1) (excluding output)