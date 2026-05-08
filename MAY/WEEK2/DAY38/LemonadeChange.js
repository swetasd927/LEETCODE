//https://leetcode.com/problems/lemonade-change/?envType=problem-list-v2&envId=greedy

//greedy: Make the best possible choice at each step, without worrying about future consequences

//what i did
//track $5 abd $10 bills

//if $5, return nothing
//if $10, return $5
//if $20, return $10 + $5, better strategy, else return 3 * $5
//otherwise false


/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let five = 0;
    let ten = 0;

    for(let bill of bills){
        if(bill == 5) {
            five++;
        } else if(bill == 10){
            if(five ==0)
             return  false;
            five --;
            ten++;
        } else{
            if(ten > 0 && five > 0){
                ten --;
                five --;
            } else if (five >= 3){
                five -=3;

            }else{
                return false;
            }
        }
    }
    return true;
};

//I used a greedy approach by always prioritizing giving $10 + $5 change for a 
//$20 bill to preserve more $5 bills for future customers.

//Time: O(n) traverse array once
//Space: O(1) only two variables used

