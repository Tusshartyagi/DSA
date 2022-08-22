var maxArea = function(array) {
  var area=0;
  let i =0;
  let j =array.length-1;
  while(i<j){
    let height = Math.min(array[i],array[j]);
    let newArea = height*(j-i);
    area = Math.max(area,newArea);
    if(array[i]<array[j])  i++; 
    else j--;
  }
  return area;
};
console.log(maxArea([2,8,6,2,5,4,8,3,9]))