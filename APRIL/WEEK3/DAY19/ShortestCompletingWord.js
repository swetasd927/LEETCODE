//https://leetcode.com/problems/shortest-completing-word/description/?envType=problem-list-v2&envId=array
//Staff, array, hash table, sorting

/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */

function shortestCompletingWord(licensePlate, words) {
    //  build frequency map for licensePlate
    const need = new Array(26).fill(0);

    for (let ch of licensePlate.toLowerCase()) {
        if (ch >= 'a' && ch <= 'z') {
            need[ch.charCodeAt(0) - 97]++;
        }
    }

    let result = null;

    for (let word of words) {
        const count = new Array(26).fill(0);

        for (let ch of word) {
            count[ch.charCodeAt(0) - 97]++;
        }

        // check if word satisfies requirement
        let isValid = true;
        for (let i = 0; i < 26; i++) {
            if (count[i] < need[i]) {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            if (result === null || word.length < result.length) {
                result = word;
            }
        }
    }

    return result;
}

/**
Time: O(n * k) (n = number of words, k = max word length)
Space: O(1) (fixed 26 array)

I build a frequency map of required characters from the license plate, then check 
each word against it and return the shortest valid one.
 */