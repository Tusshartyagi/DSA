/**
 * https://leetcode.com/problems/plus-one/
 * Plus One
 */
var plusOne = function(digits) {
    var j=digits.length;
    for(let i=j-1;i>=0;i--){
        if(digits[i]<9){
            digits[i]++;
            return digits;
        }
        digits[i]=0;
    }
    var test = new Array(j+1).fill(0);
    test[0] = 1;
    return test;
};