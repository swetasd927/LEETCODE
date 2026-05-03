//https://leetcode.com/problems/minimum-index-sum-of-two-lists/description/?envType=problem-list-v2&envId=array


/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */


var findRestaurant = function(list1, list2) {
    let map = new Map();

    // Step 1: store list1 indices
    for (let i = 0; i < list1.length; i++) {
        map.set(list1[i], i);
    }

    let minSum = Infinity;
    let result = [];

    // Step 2: check list2
    for (let j = 0; j < list2.length; j++) {
        if (map.has(list2[j])) {
            let i = map.get(list2[j]);
            let sum = i + j;

            if (sum < minSum) {
                minSum = sum;
                result = [list2[j]];
            } else if (sum === minSum) {
                result.push(list2[j]);
            }
        }
    }

    return result;
};

//I use a hash map to store indices of list1. Then I iterate through list2 and compute index sums for 
// common strings. I track the minimum sum and update the result accordingly.

//Time: O(n + m)
//Space: O(n)