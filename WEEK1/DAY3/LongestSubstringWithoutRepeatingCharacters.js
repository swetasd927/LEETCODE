/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = (s) => { 
    let set = new Set();//stores unique char in curr window
    let left = 0, maxLen = 0;

    for(let right =0; right <s.length; right++){
        //if char is dup, remove from left
        while(set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]); //add current character
        maxLen = Math.max(maxLen, right - left +1);//update maxlength
    }    
    return maxLen;
};

/**
 * Time: O(n) → each character is added & removed at most once
Space: O(min(n, charset)) → set stores unique characters

If only ASCII letters, space is O(128), otherwise O(n) for unicode
 */


/**
 * I use a sliding window with two pointers. I expand the window to include new 
 * characters until I hit a duplicate. Then I shrink the window from the left 
 * until the duplicate is removed. I track the max length of the window during 
 * this process. This gives O(n) time and O(min(n, charset)) space.”
 */

//practice
var lengthOfLongestSubstring = (s) => {
    let set = new Set();
    let left = 0, maxLen = 0;

    for(let right = 0; right < s.length; right++){
        while(set.has(s[right])){
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}