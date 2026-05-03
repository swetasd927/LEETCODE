//https://leetcode.com/problems/squares-of-a-sorted-array/description/?envType=problem-list-v2&envId=array


/**
 * @param {number[]} nums
 * @return {number[]}
 */


var sortedSquares = function(nums) {
    let n = nums.length;
    let res = new Array(n);
    
    let l = 0, r = n - 1;
    let i = n - 1;

    while (l <= r) {
        if (Math.abs(nums[l]) > Math.abs(nums[r])) {
            res[i--] = nums[l] * nums[l];
            l++;
        } else {
            res[i--] = nums[r] * nums[r];
            r--;
        }
    }

    return res;
};

//Since the array is sorted but has negative values, the largest square will come from 
// either end. So I use two pointers, compare absolute values, and fill the result array 
// from the back in sorted order.

//Time: O(n)
//Space: O(n)