//https://leetcode.com/problems/relative-ranks/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} score
 * @return {string[]}
 */

var findRelativeRanks = function(score) {
    let n = score.length;

    // pair score with index
    let arr = score.map((val, idx) => [val, idx]);

    // sort descending
    arr.sort((a, b) => b[0] - a[0]);

    let result = new Array(n);

    for (let i = 0; i < n; i++) {
        let index = arr[i][1];

        if (i === 0) result[index] = "Gold Medal";
        else if (i === 1) result[index] = "Silver Medal";
        else if (i === 2) result[index] = "Bronze Medal";
        else result[index] = (i + 1).toString();
    }

    return result;
};

//I pair each score with its original index, sort in descending order, then assign ranks based on position. 
// Finally, I place the result back using original indices. This ensures correct ranking while preserving 
// input order.

//Time: O(n log n) (sorting), Space: O(n)
