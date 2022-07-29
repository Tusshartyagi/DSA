//Time complexity O(n)
//space complexity O(1)
const reverse = function(nums, start,end) {
  while(start<end){
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
  
}
const solution = function(nums,k){
  k=k%nums.length;
  reverse(nums,0,nums.length-1);
  reverse(nums,0,k-1);
  reverse(nums,k,nums.length-1);
  return nums;
}
console.log(solution([1,2,3,4],5));