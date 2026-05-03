//https://leetcode.com/problems/intersection-of-two-arrays-ii/description/?envType=problem-list-v2&envId=array
//Array, Hash Table, Two pointers, binary search sorting

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersect = function(nums1, nums2) {
    let map = {};
    let result = [];

    // count frequency of nums1
    for (let num of nums1) {
        map[num] = (map[num] || 0) + 1;
    }

    // check nums2
    for (let num of nums2) {
        if (map[num] > 0) {
            result.push(num);
            map[num]--;
        }
    }

    return result;
};

//I use a hash map to store frequencies of elements from the first array. Then I 
// iterate over the second array and check if the element exists in the map with a 
// positive count. If yes, I add it to the result and decrease the count.

//Time: O(n + m)
//Space: O(min(n, m))
