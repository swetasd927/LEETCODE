//https://leetcode.com/problems/next-greater-element-i/description/?envType=problem-list-v2&envId=array


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var nextGreaterElement = function(nums1, nums2) {
    let stack = [];
    let map = new Map();

    for (let num of nums2) {
        while (stack.length && num > stack[stack.length - 1]) {
            let prev = stack.pop();
            map.set(prev, num);
        }
        stack.push(num);
    }

    // remaining elements → no greater element
    while (stack.length) {
        map.set(stack.pop(), -1);
    }

    // build result
    return nums1.map(num => map.get(num));
};

//I use a monotonic decreasing stack to process nums2. Whenever I find a greater element, I resolve previous 
// elements and store their next greater in a map. Then I simply map results for nums1. This gives O(n) time 
// instead of O(n²).

//Time: O(n) 
//Space: O(n)
