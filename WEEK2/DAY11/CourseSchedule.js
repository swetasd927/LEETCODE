//https://leetcode.com/problems/course-schedule/description/?envType=problem-list-v2&envId=rab78cw1
//BFS, DFS, Graph Theory, Tropological SOrt

// /indegree array (how many prerequisites a course has)
//queue (courses that can be taken)

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */


function canFinish(numCourses, prerequisites) {
    let graph = Array.from({ length: numCourses }, () => []);
    let indegree = Array(numCourses).fill(0);

    // build graph
    for (let [course, pre] of prerequisites) {
        graph[pre].push(course);
        indegree[course]++;
    }

    let queue = [];

    // push all courses with no prerequisites
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) queue.push(i);
    }

    let count = 0;

    while (queue.length > 0) {
        let node = queue.shift();
        count++;

        for (let nei of graph[node]) {
            indegree[nei]--;
            if (indegree[nei] === 0) {
                queue.push(nei);
            }
        }
    }

    return count === numCourses;
}

//I model courses as a directed graph and use Kahn’s BFS topological sort. If I 
// can process all nodes, it means there is no cycle, so all courses can be completed.

//Time: O(V + E)
// Space: O(V + E)(V = courses, E = prerequisites)