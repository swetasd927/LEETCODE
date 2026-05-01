//https://leetcode.com/problems/reverse-vowels-of-a-string/

/**
 * @param {string} s
 * @return {string}
 */

var reverseVowels = function(s) {
    let arr = s.split("");
    let vowels = "aeiouAEIOU";
    let left = 0, right = arr.length - 1;

    while (left < right) {
        while (left < right && !vowels.includes(arr[left])) left++;
        while (left < right && !vowels.includes(arr[right])) right--;

        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr.join("");
};

//Use two pointers from both ends, swap only vowels, and keep moving inward until they meet.
//Time Complexity: O(n)
//Space Complexity: O(n)