//https://leetcode.com/problems/happy-number/description/?envType=problem-list-v2&envId=hash-table

/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function(n) {
    let seen = new Set();

    const getNext = (num) =>
        num.toString().split("").reduce((sum, d) => sum + d * d, 0);

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = getNext(n);
    }

    return n === 1;
};

//Keep replacing the number with sum of squares of digits and detect a 
// loop—if you reach 1 then happy, else not.

//Time Complexity: O(log n)
//Space Complexity: O(log n)