//https://leetcode.com/problems/assign-cookies/description/?envType=problem-list-v2&envId=array
//Staff Array Two pointers Greedy Sorting

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

var findContentChildren = function(g, s) {
    g.sort((a,b)=>a-b);
    s.sort((a,b)=>a-b);
    
    let i = 0, j = 0, count = 0;
    
    while(i < g.length && j < s.length){
        if(s[j] >= g[i]){
            count++;
            i++;
        }
        j++;
    }
    
    return count;
};

//Sort both arrays and greedily match smallest cookie with least greedy child using two pointers.
//Time: O(n log n + m log m) sorting
//Space: O(1) in-place
