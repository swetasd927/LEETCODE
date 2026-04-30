//https://leetcode.com/problems/minimum-pair-removal-to-sort-array-i/description/?envType=problem-list-v2&envId=linked-list


/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function(nums) {
    let operations = 0;

    // Helper function to check if array is non-decreasing
    const isSorted = (arr) => {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) return false;
        }
        return true;
    };

    while (!isSorted(nums)) {
        let minSum = Infinity;
        let index = 0;

        // Find leftmost adjacent pair with minimum sum
        for (let i = 0; i < nums.length - 1; i++) {
            let sum = nums[i] + nums[i + 1];
            if (sum < minSum) {
                minSum = sum;
                index = i;
            }
        }

        // Replace the pair with their sum
        nums.splice(index, 2, minSum);
        operations++;
    }

    return operations;
};

//Repeatedly merge the leftmost adjacent pair with minimum sum until the array becomes non-decreasing.

//Time Complexity: O(n²) — each operation scans the array, and up to n removals happen.

//Space Complexity: O(1) — only constant extra space used (ignoring array modification).