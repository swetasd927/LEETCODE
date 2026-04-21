//https://leetcode.com/problems/find-common-characters/description/?envType=problem-list-v2&envId=array
//Mid level array hashtable string

/**
 * @param {string[]} words
 * @return {string[]}
 */


var commonChars = function(words) {
    let freq = Array(26).fill(Infinity);

    for (let word of words) {
        let temp = Array(26).fill(0);

        for (let ch of word) {
            temp[ch.charCodeAt(0) - 97]++;
        }

        for (let i = 0; i < 26; i++) {
            freq[i] = Math.min(freq[i], temp[i]);
        }
    }

    let res = [];
    for (let i = 0; i < 26; i++) {
        while (freq[i]-- > 0) {
            res.push(String.fromCharCode(i + 97));
        }
    }

    return res;
};

//Take character frequency of each word and keep the minimum frequency across all words.
//Time: O(n * m) n = words.length, m = max word length
//Space: O(1) fixed 26 letters