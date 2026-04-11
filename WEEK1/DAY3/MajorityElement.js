/**
 * @param {number[]} nums
 * @return {number}
 */
//maintain candidate and  a count
var majorityElement = (nums) => {
    let count = 0;
    let candidate = null;
    for(let num of nums) {
        //traverse the array
        if(count === 0) {
            candidate = num; //pick new candidate
        }
        count += (num === candidate) ? 1: -1;
    }
    return candidate;
};

//time complexity: O(n) : single pass
//space complexity: O(1) : only two variables