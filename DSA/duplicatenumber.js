/**
 * https://leetcode.com/problems/find-the-duplicate-number/
 * Find the Duplicate Number
 */
var findDuplicate = function(nums) {
    const hashMap = {};
  var count =1;
  for(var i =0; i<nums.length;i++){
    if(!hashMap[nums[i]]){
      hashMap[nums[i]] = count;
    }else{
      hashMap[nums[i]] = count+1;
    }
  }
  for(var el in hashMap){
    if(hashMap[el]==2){
      return el;
    }
  }
};