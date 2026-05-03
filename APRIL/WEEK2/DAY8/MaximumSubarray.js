//https://leetcode.com/problems/maximum-subarray/?envType=problem-list-v2&envId=rab78cw1

var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currSum = 0;

    for (let num of nums) {
        if (currSum < 0) currSum = 0;
        currSum += num;
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
};

//I use Kadane’s Algorithm. I keep a running sum, and if it 
// becomes negative, I reset it to zero since it won’t help in maximizing future sums.”

//Time: O(n), Space: O(1)