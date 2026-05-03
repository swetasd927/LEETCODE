//https://leetcode.com/problems/intersection-of-two-arrays/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let result = new Set();

    for (let num of nums2) {
        if (set1.has(num)) {
            result.add(num);
        }
    }

    return Array.from(result);
};

//I use a hash set to store elements of the first array. Then I iterate over the second array 
// and check membership in O(1). I store results in another set to ensure uniqueness. This gives 
// O(n + m) time.

//Time: O(n + m), Space: O(n)