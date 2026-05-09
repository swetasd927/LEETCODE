//https://leetcode.com/problems/rank-transform-of-an-array/submissions/1998871922/?envType=problem-list-v2&envId=hash-table

/**
 * @param {number[]} arr
 * @return {number[]}
 */
 
var arrayRankTransform = function(arr) {
    // Get unique elements and sort them
    let sorted = [...new Set(arr)].sort((a, b) => a - b);

    // Store rank of each number
    let rankMap = new Map();

    for (let i = 0; i < sorted.length; i++) {
        rankMap.set(sorted[i], i + 1);
    }

    // Replace each element with its rank
    return arr.map(num => rankMap.get(num));
};

//Store sorted unique values, assign ranks using a hash 
//map, then replace each element with its mapped rank.

//Sorting unique elements: O(n log n)
//Mapping ranks: O(n)
//Overall: O(n log n)
//space: Set + Map + sorted array: O(n)
