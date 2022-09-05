/**
 * https://leetcode.com/problems/longest-consecutive-sequence/
 * Longest Consecutive Sequence
 */
var longestConsecutive = function(nums) {
  if (nums == null || nums.length === 0) return 0;
  const set = new Set(nums);
  let longest = 0;
  for (let num of nums) {
//Here we do num-1 (ex 100-1 =99) if it is not present in our set return true do same for all 
    if (!set.has(num - 1)) {
      let count = 0;
//here we do count + num ,0+100 present count=1; 100+1 = 101 not present go back to if again.
      while (set.has(count+num)) {
        count++;
      }
      longest = Math.max(longest,count);
    }
  }
  return longest;
};
console.log(longestConsecutive([100,4,200,1,3,2]));