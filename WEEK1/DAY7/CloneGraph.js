//https://leetcode.com/problems/clone-graph/description/?envType=problem-list-v2&envId=rab78cw1
//Hash Table, bfs, dfs, Graph theory

//we use hashmap to store original node to cloned node
//cause graph has cycles, so without tracking visited node, we have infinite loop

var cloneGraph = (node) => {
    if(!node) return null;

    const map = new Map();
    function dfs(curr) {
        //already cloned
        if(map.has(curr)) return map.get(curr);
        //create clone
        const clone = new Node(curr.val);
        map.set(curr, clone);
        //clone neighbors
        for(let neighbor of curr.neighbors){
            clone.neighbors.push(dfs(neighbor));
        }
        return clone;
    }
}

//dfsapproach
/*
If node is null  return null
If node already cloned return from map
Create new node
Store it in map
Recursively clone neighbors
Return cloned node
 */

/**
Time: O(N + E):visits each node and edge once
Space: O(N):hashmap and recursion/queue stores all nodes
 */
