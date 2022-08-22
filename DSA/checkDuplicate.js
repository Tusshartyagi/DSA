var checkDuplicate = function(num){
  var set = new Set(num);
  return set.size != num.length;
};
console.log(checkDuplicate([1,3,5,6,9]));