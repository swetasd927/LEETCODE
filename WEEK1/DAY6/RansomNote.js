//https://leetcode.com/problems/ransom-note/description/?envType=problem-list-v2&envId=rab78cw1
//hash table, string, counting

var canConstruct = (ransomNote, magazine) => {
    let count = {};

    for(let char of magazine) {
        count[char] = (count[char] || 0) + 1;   
    }
    for(let char of ransomNote) {
            if(!count [char]) return false;
            count[char]--;
        }
    return true;
};

/**
 * O(m + n)
m = length of magazine
n = length of ransomNote
 Space Complexity:O(1):(Since only 26 lowercase letters → constant space)
 */

 //using a frequency map of the magazine and decrement counts while matching ransomNote characters.”