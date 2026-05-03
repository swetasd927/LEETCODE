//https://leetcode.com/problems/contains-duplicate-ii/description/?envType=problem-list-v2&envId=array
//Array, Hash Table, Sliding Window

var containsNearbyDuplicate = function(nums, k) {
    const set = new Set();

    for (let i = 0; i < nums.length; i++) {

        if (set.has(nums[i])) {
            return true;
        }

        set.add(nums[i]);

        if (set.size > k) {
            set.delete(nums[i - k]);
        }
    }

    return false;
};


//I use a sliding window of size k using a Set.I iterate through the array, and if the 
// current element already exists in the Set, I return true. Otherwise, I add it. 
//If the window size exceeds k, I remove the leftmost element to maintain the window

//Time complexity is O(n) since we traverse once. Space complexity is O(k)
//  as the Set maintains only a sliding window of size k.