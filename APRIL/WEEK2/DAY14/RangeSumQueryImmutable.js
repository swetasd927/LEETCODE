//https://leetcode.com/problems/range-sum-query-immutable/?envType=problem-list-v2&envId=array

var NumArray = function(nums) {
    this.prefix = [];

    this.prefix[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        this.prefix[i] = this.prefix[i - 1] + nums[i];
    }
};

NumArray.prototype.sumRange = function(left, right) {
    if (left === 0) return this.prefix[right];
    return this.prefix[right] - this.prefix[left - 1];
};

// /Since there are multiple queries, I optimize using prefix sums. I precompute cumulative
//  sums so each query can be answered in constant time
//  using prefix[right] minus prefix[left-1]. This reduces query time from O(n) to O(1)