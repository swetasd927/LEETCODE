//https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/description/?envType=problem-list-v2&envId=array

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */

var countCharacters = function(words, chars) {
    let base = {};

    for (let ch of chars) {
        base[ch] = (base[ch] || 0) + 1;
    }

    let total = 0;

    for (let word of words) {
        let freq = { ...base };
        let valid = true;

        for (let ch of word) {
            if (!freq[ch]) {
                valid = false;
                break;
            }
            freq[ch]--;
        }

        if (valid) total += word.length;
    }

    return total;
};

//Count available characters first, then for each word check 
//if it can be formed without exceeding character limits.

//Time Complexity: O(n × m)
//Space Complexity: O(1)