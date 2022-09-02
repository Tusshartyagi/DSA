/**
 * https://leetcode.com/problems/power-of-two/
 * Power of Two
 */
var isPowerOfTwo = function(n) {
    var ans =1;
    for(let i=0;i<=30;i++){
       if(ans==n){
           return true;
       } 
        if(ans<=n){
            ans = ans*2;
        }
    }return false;
};