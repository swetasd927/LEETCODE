//https://leetcode.com/problems/container-with-most-water/?envType=problem-list-v2&envId=rab78cw1

//Time: O(n) (only one pass), Space: O(1) (no extra memory)
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while(left  < right) {
        let h = Math.min(height[left], height[right]);
        let width = right - left;
        max = Math.max(max, h * width)

        if(height[left] < height[right]){
            left++;
        }else{
            right--;
        }
    }
    return max;
};
//Use two pointer, always move the shorter line and track max area
//start with left = 0, right = n-1
//area = (right - left) * min(height[left], height[right])

//move the pointer with smallest height because that limits the water