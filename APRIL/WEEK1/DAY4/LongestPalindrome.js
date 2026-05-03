//https://leetcode.com/problems/longest-palindrome/?envType=problem-list-v2&envId=rab78cw1
//topic: hash table, greedy, string

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = (s) => {
  let set = new Set();
  let length = 0;

  for(let char of s) {
    if(set.has(char)) {
        set.delete(char);
        length+=2;
    }else {
        set.add(char);
    }
  }  
  return set.size > 0 ? length +1 : length;
};

//tc:O(n), sc:O(1): max 52 characters

//I use a Set to track unpaired characters. When I see a duplicate, I form 
// a pair and add 2 to the length. At the end, if any character is left, I add 1 for the center.