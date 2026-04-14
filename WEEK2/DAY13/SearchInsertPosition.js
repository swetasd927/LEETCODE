//https://leetcode.com/problems/search-insert-position/?envType=problem-list-v2&envId=array
//Array, Binary Search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return left;
};

// I used binary search. If found return index, otherwise return left pointer after loop since it represents the correct insertion position
//Time: O(log n), Space: O(1)
