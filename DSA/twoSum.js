var findSum = function(num, target) {
    for(var i=0;i<num.length;i++){
      for(var j=i+1;j<num.length;j++){
        if(num[i]+num[j]===target){
          return [i,j];
        }
      }
    }return -1;
};
console.log(findSum([1,3,5,6,8],6));