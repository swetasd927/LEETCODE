//https://leetcode.com/problems/reverse-only-letters/description/?envType=problem-list-v2&envId=string

/**
 * @param {string} s
 * @return {string}
 */

var reverseOnlyLetters = function(s) {
    let arr = s.split("");
    let left = 0, right = arr.length - 1;

    const isLetter = (ch) =>
        (ch >= 'Sa' && ch <= 'z') || (ch >= 'A' && ch <= 'Z');

    while (left < right) {
        if (!isLetter(arr[left])) {
            left++;
        } else if (!isLetter(arr[right])) {
            right--;
        } else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr.join("");
};

//Use two pointers from both ends, skip non-letters, and swap only English letters.
//Time: O(n)
//Space: O(n)