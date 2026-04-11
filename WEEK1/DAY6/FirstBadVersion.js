//https://leetcode.com/problems/first-bad-version/?envType=problem-list-v2&envId=rab78cw1




var solution = function(isBadVersion) {
    return function(n) {
        let left = 1;
        let right = n;

        while (left < right) {
            let mid = left + Math.floor((right - left) / 2);

            if (isBadVersion(mid)) {
                right = mid; 
            } else {
                left = mid + 1; 
            }
        }

        return left;
    };
};

//i used  binary search to find the first true in a monotonic boolean array.

//tc: O(log n) : binary search
//sc: O(1) : no extra space