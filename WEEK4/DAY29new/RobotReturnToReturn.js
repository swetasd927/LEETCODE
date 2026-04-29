//https://leetcode.com/problems/robot-return-to-origin/?envType=problem-list-v2&envId=string

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let x = 0, y = 0;

    for (let move of moves) {
        if (move === 'U') y++;
        else if (move === 'D') y--;
        else if (move === 'L') x--;
        else if (move === 'R') x++;
    }

    return x === 0 && y === 0;
};

//Track x and y coordinates for each move and return true if both end at 0.

//Time Complexity: O(n)
//Space Complexity: O(1)
