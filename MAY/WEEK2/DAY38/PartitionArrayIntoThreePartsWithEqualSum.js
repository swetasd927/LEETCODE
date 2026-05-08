//https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/description/?envType=problem-list-v2&envId=greedy

/**
 * @param {number[]} arr
 * @return {boolean}
 */

var canThreePartsEqualSum = function(arr) {
    let total = arr.reduce((a, b) => a + b, 0);

    if (total % 3 !== 0) return false;

    let target = total / 3;
    let sum = 0;
    let count = 0;

    for (let num of arr) {
        sum += num;

        if (sum === target) {
            count++;
            sum = 0;
        }
    }

    // we need at least 3 parts
    return count >= 3;
};


//We greedily form partitions whenever running sum reaches 
//target, instead of trying all split positions.

//Time: O(n)
//Space: O(1)