//https://leetcode.com/problems/height-checker/?envType=problem-list-v2&envId=sorting
//day 47

/**
 * @param {number[]} heights
 * @return {number}
 */

var heightChecker = function(heights) {
    let count = Array(101).fill(0), idx = 0, ans = 0;

    for (let h of heights) count[h]++;

    for (let i = 1; i <= 100; i++) {
        while (count[i]--) {
            if (heights[idx] !== i) ans++;
            idx++;
        }
    }

    return ans;
}; //time:O(n), space: O(1)

//I first counted the frequency of each height, then reconstructed the expected sorted order while 
//comparing it directly with the original array. Every mismatch increases the answer count.