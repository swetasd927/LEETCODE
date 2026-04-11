//https://leetcode.com/problems/valid-anagram/description/?envType=problem-list-v2&envId=rab78cw1
//Hash Table, String, Sorting

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    //create a hashmap to store character frequencies
    const count = {};
    //counting freq of each char
    for(let char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    //dec freq based on t
    for(let char of t) {
        if(!count[char]) return false;
        count[char] --;
    }
    return true;
};

//use a hashmap to count character frequencies from the first string. 
// Then I iterate over the second string, decrementing counts. If any 
// character is missing or count becomes invalid, I return false. If 
// all characters match, the strings are anagrams

//tc: O(n): we iterate over both strings 
// sc: O(1) : max 26 lowercase letters


var isAnagram = (s, t) => {
    if(s.length !== t.length) return false;
    const count = {};
    for(let char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    for(let char of t){
        if(!count[char]) return false;
        count[char] --;
    }
    return true;
}