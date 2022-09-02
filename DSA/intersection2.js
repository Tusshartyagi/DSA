//Intersection of Two Arrays II
//https://leetcode.com/problems/intersection-of-two-arrays-ii/
var intersect = function (nums1, nums2) {
  let map = {};
  let result = [];
  // Setting each value and its count in the map
  for (let i = 0; i < nums2.length; i++) {
    if (map[nums2[i]]) {
      map[nums2[i]] = (map[nums2[i]] + 1);
    } else {
      map[nums2[i]]= 1;
    }
  }

  // Looping over another array, decreasing the count in the map if the key exists
  for (let i = 0; i < nums1.length; i++) {
    if (map[nums1[i]] && map[nums1[i]] >= 1) {
      result.push(nums1[i]);
      map[nums1[i]]= (map[nums1[i]]- 1);
    }
  }
  
  return result;
};

console.log(intersect([1,2,2,1],[2]))