//https://leetcode.com/problems/search-in-rotated-sorted-array/?envType=problem-list-v2&envId=rab78cw1
//medium: array, binary search


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = (nums, target) => {
    let left = 0, right = nums.length-1;
    while(left <= right) {
        let mid = Math.floor((left + right)/2);
        if(nums[mid] === target) return mid;

        //left half sorted
        if(nums[left] <= nums[mid]) {
            if(target >= nums[left] && target < nums[mid]) {
                right = mid-1;
            }else{
                left = mid+1;
            }
        }else{
            if(target > nums[mid] && target <= nums[right]) {
                left = mid+1;
            }else {
                right = mid-1;
            }
        }
    }
     return -1;
};

//i used modified binary search by identifying the sorted half at each step and narrowing down the search space

//TC: O(n) : binary search halves the array at each step
//SC: O(1) : only a few pointers used, no extra memory