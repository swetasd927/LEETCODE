//https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/?envType=problem-list-v2&envId=array
//Mid level, array, binary search,

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

function nextGreatestLetter(letters, target) {
    let left = 0;
    let right = letters.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (letters[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // wrap-around
    return letters[left % letters.length];
}

/**
 I used binary search to find the first character greater than target, and handled the 
 wrap-around case using modulo.
 Time: O(log n)
Space: O(1)

 */
