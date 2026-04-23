//https://leetcode.com/problems/reverse-string/description/?envType=problem-list-v2&envId=string

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
};

//Use two pointers from both ends and swap elements in-place until they meet.
//Time: O(n)
//Space: O(1) in-place

