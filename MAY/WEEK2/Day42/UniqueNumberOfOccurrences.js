//https://leetcode.com/problems/unique-number-of-occurrences/submissions/2001539453/?envType=problem-list-v2&envId=hash-table

/**
 * @param {number[]} arr
 * @return {boolean}
 */

var uniqueOccurrences = function(arr) {
    let freq = {};

    // count frequency
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }

    // get all frequencies
    let values = Object.values(freq);

    // check uniqueness
    let set = new Set(values);

    return values.length === set.size;
};

//I used a hashmap to count frequencies, then stored those counts in a Set. If the Set 
//size matches the number of frequencies, all occurrence counts are unique. Time complexity
//and space complexity is O(n).