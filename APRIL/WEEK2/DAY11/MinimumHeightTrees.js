//https://leetcode.com/problems/minimum-height-trees/description/?envType=problem-list-v2&envId=rab78cw1
//DFS, BFS, Graph Theory, Tropological Sort

//BFS from graph
/**
 * Build adjacency list
Find all leaves (degree = 1)
Remove leaves level by level
Stop when ≤ 2 nodes remain
Remaining nodes are answer
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */

function findMinHeightTrees(n, edges) {
    if (n === 1) return [0];

    let graph = Array.from({ length: n }, () => []);
    let degree = Array(n).fill(0);

    // build graph
    for (let [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
        degree[u]++;
        degree[v]++;
    }

    // find initial leaves
    let queue = [];
    for (let i = 0; i < n; i++) {
        if (degree[i] === 1) queue.push(i);
    }

    let remainingNodes = n;

    // BFS trim leaves
    while (remainingNodes > 2) {
        let size = queue.length;
        remainingNodes -= size;

        let newLeaves = [];

        for (let i = 0; i < size; i++) {
            let node = queue.shift();

            for (let nei of graph[node]) {
                degree[nei]--;
                if (degree[nei] === 1) {
                    newLeaves.push(nei);
                }
            }
        }

        queue = newLeaves;
    }

    return queue;
}
//BEATS LOW

//“I build adjacency list and repeatedly remove leaf nodes using BFS. 
// The process stops when ≤2 nodes remain, which are the centroids of 
// the tree, giving minimum height trees.


//Time:O(n)(each node processed once)
//Space:O(n)(graph + queue)
