//https://leetcode.com/problems/monotonic-array/?envType=problem-list-v2&envId=array
/**
 * @param {number[]} nums
 * @return {boolean}
 */

var isMonotonic = function(nums) {
    let inc = true, dec = true;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) dec = false;
        if (nums[i] < nums[i - 1]) inc = false;
    }

    return inc || dec;
};

//Traverse once while tracking whether the array can still be 
//increasing or decreasing; if both fail, it’s not monotonic.
//Time: O(n), Space:O(1)