//https://leetcode.com/problems/sort-colors/description/?envType=problem-list-v2&envId=rab78cw1
//Array, Two Pointers, Sorting


//If 0 → swap with low
//If 1 → leave it
//If 2 → swap with high

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


function sortColors(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } 
        else if (nums[mid] === 1) {
            mid++;
        } 
        else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
}

//“I maintain three pointers: low, mid, and high. 
// I partition the array into regions of 0s, 1s, and 2s 
// by swapping elements in a single traversal.

//Time:O(n) (single pass)
// Space:O(1) (in-place)