//https://leetcode.com/problems/1-bit-and-2-bit-characters/description/?envType=problem-list-v2&envId=array
//Mid Level, Array

/**
 * @param {number[]} bits
 * @return {boolean}
 */


var isOneBitCharacter = function(bits) {
    let i = 0;

    while (i < bits.length - 1) {
        if (bits[i] === 1) {
            i += 2; // 2-bit character
        } else {
            i += 1; // 1-bit character
        }
    }

    return i === bits.length - 1;
};

/**
 * I traverse the array greedily. If I see 1, it must be part of a 2-bit character so 
 * I skip two positions. If I see 0, it is a 1-bit character so I move one step. I stop 
 * before the last bit and check whether I land exactly on it.

Time: O(n)
Space: O(1)
 */