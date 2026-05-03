//https://leetcode.com/problems/duplicate-zeros/?envType=problem-list-v2&envId=array
//Senior Array Two pointers


var duplicateZeros = function(arr) {
    let n = arr.length;
    let zeros = 0;

    // Count total zeros
    for (let num of arr) {
        if (num === 0) zeros++;
    }

    // Start from end
    let i = n - 1;
    let j = n + zeros - 1; // virtual extended index

    while (i >= 0) {
        if (j < n) arr[j] = arr[i];

        if (arr[i] === 0) {
            j--;
            if (j < n) arr[j] = 0;
        }

        i--;
        j--;
    }
};

//Count valid zeros, then fill the array backwards to avoid overwriting while duplicating zeros.
//Time: O(n)
//Space: O(1) in-place