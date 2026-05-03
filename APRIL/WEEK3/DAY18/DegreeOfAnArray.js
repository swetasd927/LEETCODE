//https://leetcode.com/problems/degree-of-an-array/description/?envType=problem-list-v2&envId=array
//Mid Level, Array, Hash Table

var findShortestSubArray = function(nums) {
    let count = {};
    let first = {};

    let degree = 0;
    let minLen = nums.length;  

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (first[num] === undefined) {
            first[num] = i;
        }

        count[num] = (count[num] || 0) + 1;

        if (count[num] > degree) {
            degree = count[num];
            minLen = i - first[num] + 1;
        } 
        else if (count[num] === degree) {
            minLen = Math.min(minLen, i - first[num] + 1);
        }
    }

    return minLen;
};

/**
 * This solution runs in linear time O(n) since we process each element once. 
 * Space complexity is O(n) due to the hashmap storing frequency and first 
 * occurrence. I also optimized it to a single pass by updating the degree 
 * and minimum length during traversal.
 */
