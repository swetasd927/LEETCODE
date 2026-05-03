//https://leetcode.com/problems/binary-search/?envType=problem-list-v2&envId=rab78cw1
//Array and Binary Search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
};

//Used binary search to repeatedly divide the sorted array and find the target in O(log n) time.

//TC:O(log n), SC:O(1)