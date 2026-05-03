//https://leetcode.com/problems/reverse-string-ii/description/?envType=problem-list-v2&envId=string


/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let arr = s.split("");

    for (let i = 0; i < arr.length; i += 2 * k) {
        let left = i;
        let right = Math.min(i + k - 1, arr.length - 1);

        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr.join("");
};

//Traverse in blocks of 2k, and reverse only the first k characters of each block.
//Time Complexity: O(n)
//Space Complexity: O(n)