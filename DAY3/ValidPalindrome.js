//easy: two pointers, string
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = (s) => {
  let left =0;//start of string
  let right = s.length -1; //end of string
  //loop until pointers meets at the middle
  while(left < right) {
     // Skip non-alphanumeric characters from left
    while(left < right && !isAlphaNum(s[left])) left++;
    // Skip non-alphanumeric characters from right
    while(left < right && !isAlphaNum(s[right])) right--;
      // Compare characters in lowercase
    if(s[left].toLowerCase() !== s[right].toLowerCase()){
        return false;
    }
    left++;
    right--;
  }  
  return true;
};
function isAlphaNum(char){
     return /^[a-z0-9]$/i.test(char);
}


/*
Time Complexity:  O(n)
- We traverse the string at most once with two pointers.
- Skipping non-alphanumeric characters and comparison are O(1) per character.

Space Complexity: O(1)
- We use only constant extra space for pointers and no extra strings are created.
*/