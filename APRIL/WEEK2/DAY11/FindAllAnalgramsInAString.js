//https://leetcode.com/problems/find-all-anagrams-in-a-string/description/?envType=problem-list-v2&envId=rab78cw1
//String, Hash Table, Sliding Window, Junior

/**
 * Count frequency of p
Maintain a sliding window of size p.length in s
Compare frequency of window with p
If same → record index
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

function findAnagrams(s, p) {
    let result = [];
    
    if (s.length < p.length) return result;

    let pCount = new Array(26).fill(0);
    let sCount = new Array(26).fill(0);

    let aCharCode = 'a'.charCodeAt(0);

    // build frequency of p
    for (let ch of p) {
        pCount[ch.charCodeAt(0) - aCharCode]++;
    }

    let left = 0;

    for (let right = 0; right < s.length; right++) {
        // add current char
        sCount[s[right].charCodeAt(0) - aCharCode]++;

        // shrink window if size exceeds p.length
        if (right - left + 1 > p.length) {
            sCount[s[left].charCodeAt(0) - aCharCode]--;
            left++;
        }

        // compare arrays
        if (right - left + 1 === p.length) {
            if (matches(pCount, sCount)) {
                result.push(left);
            }
        }
    }

    return result;
}

function matches(a, b) {
    for (let i = 0; i < 26; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}


//I maintain a sliding window of size equal to p and compare frequency counts of 
// characters in the window and p. If they match, it is an anagram starting at that index.

//Time:O(26 × n)  basically O(n)
// Space:O(1) (fixed 26 arrays)
