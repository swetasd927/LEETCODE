//https://leetcode.com/problems/k-closest-points-to-origin/submissions/1974631364/?envType=problem-list-v2&envId=rab78cw1

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    return points
        .sort((a,b) => (a[0]**2 + a[1]**2) - (b[0]**2 + b[1]**2))
        .slice(0, k);
};

//I compare points using squared distance and select the k smallest either via sorting or a max heap
//Time: O(n log n), Space: O(1) (ignoring output)