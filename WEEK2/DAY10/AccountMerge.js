//https://leetcode.com/problems/accounts-merge/?envType=problem-list-v2&envId=rab78cw1

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */

 var accountsMerge = function(accounts) {
    let graph = {};
    let name = {};

    // build graph
    for (let acc of accounts) {
        let n = acc[0];
        for (let i = 1; i < acc.length; i++) {
            name[acc[i]] = n;
            if (!graph[acc[i]]) graph[acc[i]] = [];
            if (i === 1) continue;
            graph[acc[i]].push(acc[i - 1]);
            graph[acc[i - 1]].push(acc[i]);
        }
    }

    let visited = new Set();
    let res = [];

    function dfs(email, list) {
        visited.add(email);
        list.push(email);
        for (let nei of (graph[email] || [])) {
            if (!visited.has(nei)) dfs(nei, list);
        }
    }

    for (let email in name) {
        if (!visited.has(email)) {
            let list = [];
            dfs(email, list);
            res.push([name[email], ...list.sort()]);
        }
    }

    return res;
};

//I build a graph of emails, connect emails within same account, then run DFS to collect connected components.
//Time: O(NK log NK) (sorting emails)
//Space: O(NK)