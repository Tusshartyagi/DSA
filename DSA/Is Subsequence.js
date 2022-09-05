/**
 * https://leetcode.com/problems/is-subsequence/
 * Is Subsequence
 */
var isSubsequence = function(s, t) {
  let j=0;
  if(s.length==0&&t.length==0){
    return true;
  }
  for(var i =0;i<t.length;i++){
    if(s[j]==t[i]){
      j++;
    }
    if(j == s.length){
      return true;
    }
  }return false;
};
console.log(isSubsequence("",""));