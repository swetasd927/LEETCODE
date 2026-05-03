//https://leetcode.com/problems/valid-mountain-array/submissions/1994336580/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} arr
 * @return {boolean}
 */

var validMountainArray = function(arr) {
    let i = 0;
    let n = arr.length;

    if (n < 3) return false;

    while (i + 1 < n && arr[i] < arr[i + 1]) {
        i++;
    }

    if (i === 0 || i === n - 1) return false;

    while (i + 1 < n && arr[i] > arr[i + 1]) {
        i++;
    }

    return i === n - 1;
};

//Go up the mountain first, then go down—if both 
//happen correctly and end at last index, it’s valid.

//Time Complexity: O(n)
//Space Complexity: O(1)