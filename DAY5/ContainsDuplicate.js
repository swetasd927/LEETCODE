//https://leetcode.com/problems/contains-duplicate/?envType=problem-list-v2&envId=rab78cw1
//Array, Hash table, sorting

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length;
};

//Used a Set to track seen elements and detect duplicates in O(n) time.

//TC: O(n), SC:O(n)