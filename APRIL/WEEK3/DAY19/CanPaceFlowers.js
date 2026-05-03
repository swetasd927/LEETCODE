//https://leetcode.com/problems/can-place-flowers/?envType=problem-list-v2&envId=array
//Senior, Array, Greedy

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

function canPlaceFlowers(flowerbed, n) {
    let count = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        if (
            flowerbed[i] === 0 &&
            (i === 0 || flowerbed[i - 1] === 0) &&
            (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
        ) {
            flowerbed[i] = 1;
            count++;
            i++; // skip next spot
        }

        if (count >= n) return true;
    }

    return count >= n;
}

/**
 This is a greedy approach where I iterate once and plant a flower only when both adjacent 
 spots are empty, ensuring maximum valid placements without violating the constraint.
 
   Time:O(n) single pass through the array
   Space: O(1) no extra space, in-place modification
 */