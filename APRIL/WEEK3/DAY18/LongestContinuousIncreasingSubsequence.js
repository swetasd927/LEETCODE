//https://leetcode.com/problems/longest-continuous-increasing-subsequence/description/?envType=problem-list-v2&envId=array
//Mid level, array

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let maxLen = 1;
    let currLen = 1;
    
    for(let i =1; i< nums.length; i++){
        if(nums[i] > nums[i-1]) {
            currLen++; //continue increasing
        }else{
            currLen = 1; //reset
        }
        maxLen = Math.max(maxLen, currLen);
    }
    return maxLen;
};

//I traverse the array once while maintaining a current increasing streak. If the current element 
//is greater than the previous one, I extend the streak; otherwise, I reset it. I track the maximum 
//length during traversal. This gives O(n) time and O(1) space.