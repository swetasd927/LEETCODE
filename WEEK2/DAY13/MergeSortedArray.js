//https://leetcode.com/problems/merge-sorted-array/description/?envType=problem-list-v2&envId=array
//Array, Two Pointers, Sorting

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }

    // If nums2 still has elements
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
};


//Use three pointers from the end to avoid overwriting and merge in-place.
//Time complexity: O(m+n), space: O(1) in place