//question link: https://leetcode.com/problems/product-of-array-except-self/description/?envType=problem-list-v2&envId=rab78cw1
//medium: array, prefix sum


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = (nums)  => {
    let n = nums.length;
    let ans = new Array(n).fill(1);

    let prefix = 1;
    for(let i = 0; i<n; i++){
        ans[i] = prefix;
        prefix *= nums[i];//prefix:1 1 2 6
    }

    let suffix = 1;
    for(let i = n-1; i >= 0; i--) {
        ans[i] *= suffix;
        suffix *= nums[i];//suffix:24 12 8 6
    }
    return ans;
};//tc:O(n), sc:O(1): reducing output array

//i used prefix and suffix to compute result without division optimizing space
//by reusing the output array