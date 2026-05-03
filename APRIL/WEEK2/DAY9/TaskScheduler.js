//https://leetcode.com/problems/task-scheduler/?envType=problem-list-v2&envId=rab78cw1

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
function leastInterval(tasks, n) {
    const freq = new Array(26).fill(0);

    // Count frequencies
    for (let t of tasks) {
        freq[t.charCodeAt(0) - 65]++;
    }

    freq.sort((a, b) => b - a);

    const maxFreq = freq[0];
    let maxCount = 0;

    for (let f of freq) {
        if (f === maxFreq) maxCount++;
    }

    return Math.max(tasks.length, (maxFreq - 1) * (n + 1) + maxCount);
}

//Fill the most frequent tasks first and use others (or idle) to maintain cooling gaps
//Time: O(n), Space : O(1)