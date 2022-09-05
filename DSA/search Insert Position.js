/**
 * https://leetcode.com/problems/search-insert-position/
 * search Insert Position
 */
var searchInsert = function(nums, target) {
    var min =0;
    var max = nums.length-1;
    while(min<=max){
        let midIndex = Math.floor((min+max)/2);
        if(nums[midIndex]<target){
            min = midIndex+1;
        }
      else if(nums[midIndex]>target){
            max = midIndex-1;
      }else{
            return midIndex;
      }
    }return min;
};
console.log(searchInsert([1,3,4,6],5));