var removeDuplicates = (nums) => {
    if (nums.length === 0) return 0;

    let i = 0; // pointer for unique elements

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++; // move to next pos
            nums[i] = nums[j]; // place unique element
        }
    }

    return i + 1; // number of unique elements
};

//Time complexity: O(n) : one pass
//Space complexity: O(1) : in place, no extra space