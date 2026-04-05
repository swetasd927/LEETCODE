//https://leetcode.com/problems/count-vowel-substrings-of-a-string/

/**
 * @param {string} word
 * @return {number}
 */

var countVowelSubstrings = function(word) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        let seen = new Set();

        for (let j = i; j < word.length; j++) {
            if (!vowels.has(word[j])) break;

            seen.add(word[j]);

            if (seen.size === 5) count++;
        }
    }

    return count;
};

//contain any vowels, count all 5 vowels: a e i o u

//generate all strings
//stop when constant appears
//track vowel using a set
//if size becomes 5, count ++

//tc:O(n^2): [n<=100 so fine]
//sc:O(1): [only 5 vowels max in a set]