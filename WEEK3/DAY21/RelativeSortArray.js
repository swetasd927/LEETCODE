//https://leetcode.com/problems/relative-sort-array/description/?envType=problem-list-v2&envId=array
//Mid level Array Hash Table Sorting


/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */


var relativeSortArray = function(arr1, arr2) {
    let count = Array(1001).fill(0);

    for (let num of arr1) count[num]++;

    let res = [];

    for (let num of arr2) {
        while (count[num]-- > 0) {
            res.push(num);
        }
    }

    for (let i = 0; i < 1001; i++) {
        while (count[i]-- > 0) {
            res.push(i);
        }
    }

    return res;
};

//Use counting to place elements in arr2 order, then append remaining in ascending order.

//Time: O(n + k)
// Space: O(k) ≈ O(1)
