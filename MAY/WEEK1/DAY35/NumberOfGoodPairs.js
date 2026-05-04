//https://leetcode.com/problems/number-of-good-pairs/?envType=problem-list-v2&envId=hash-table

var numIdenticalPairs = function(nums) {
    let count = {};
    let res = 0;

    for (let num of nums) {
        if (count[num]) {
            res += count[num]; // already seen count[num] times
        }
        count[num] = (count[num] || 0) + 1;
    }

    return res;
};

//Count frequencies and add existing count 
// for each repetition to get pairs in one pass.

//Time: O(n)
//Space: O(n) (or O(1) since values ≤ 100)