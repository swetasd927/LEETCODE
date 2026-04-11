//https://leetcode.com/problems/two-sum/?envType=problem-list-v2&envId=array
//Junior, Array, HashTable

/**
 * Given an array of integers nums and an integer target, return 
 * indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

You can return the answer in any order.

//two sum

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

//Time complexity: Outer loop runs n times (i=0 to n-1)
//Inner loop runs roughly n-1, n-2, times , total almost n^2 /2, 
//Big O otation ignores contants -> O(n^2)

//Space complexity: we dont use extra space except a few variable
//O(1)


//optimised using hashmap

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    //create hashmap to store numbers
    let map = {}; // value : index
//iterate through the array once
    for (let i = 0; i < nums.length; i++) {
        //for each num, i calculate component, value need to reach target
        let complement = target - nums[i];
        //if complement already exists in the hashmap
        if (map[complement] !== undefined) {
            //if found,return the index of the complement and the current index.
            return [map[complement], i];
        }
        //Otherwise, I store the current number with its index for future reference
        map[nums[i]] = i;
    }
};
//I use a hashmap to store visited elements. While iterating, for each number I compute its 
// complement (target - current value). If the complement is already in the map, I return the
//indices. Otherwise, I store the current number. This reduces time complexity to O(n) with O(n) space



//Time Complexity: O(n) (single pass)
// Space Complexity: O(n) (hashmap)

//practice
var twoSum = (nums, target) => {
    let map = {};
    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if(map[complement] !== undefined) {
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
}
