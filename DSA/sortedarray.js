//Brute force Soln
function sortedSquare(array){
    const newArray = new Array(array.length).fill(0);
    for(var i=0;i<array.length;i++){
        newArray[i] = Math.pow(array[i],2);
    }
    newArray.sort(function(a,b){return a-b});
    return newArray;
}

//sorted array
a = [1,6,9,24];
b= [-2,-4,-6,12];
c = []

console.log(sortedSquare(a))
console.log(sortedSquare(b))
console.log(sortedSquare(c))

//Time complexity O(nlogn)