//https://leetcode.com/problems/sum-of-all-odd-length-subarrays/description/?envType=problem-list-v2&envId=prefix-sum

/**
 * @param {number[]} arr
 * @return {number}
 */

var sumOddLengthSubarrays = function(arr) {
    let n = arr.length;
    let result = 0;

    for (let i = 0; i < n; i++) {
        let totalSubarrays = (i + 1) * (n - i);

        let oddCount = Math.floor((totalSubarrays + 1) / 2);

        result += arr[i] * oddCount;
    }

    return result;
};

//Instead of generating subarrays, I calculated how many odd-length 
//subarrays each element belongs to using combinatorics: total subarrays 
//involving index i is (i+1)(n-i), half of them are odd. Then I summed 
//contributions in O(n) time and O(1) space.