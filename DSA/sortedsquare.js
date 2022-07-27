function sortedSquarredArray(array){
    const newArray = new Array(array.length).fill(0);
    let pointerLeft = 0;
    let pointerRight = array.length-1;
    for(let i =array.length-1;i>=0;i--){
        const leftSquared = Math.pow(array[pointerLeft],2);
        const rightSquared = Math.pow(array[pointerRight],2);
        if(leftSquared>rightSquared){
            newArray[i] = leftSquared;
            pointerLeft++;
        } else{
            newArray[i]=rightSquared;
            pointerRight--;
        }
    }
    return newArray;
}

a = [1,6,9,24];
b= [-2,-4,-6,12];
c = []

console.log(sortedSquarredArray(a))
console.log(sortedSquarredArray(b))
console.log(sortedSquarredArray(c))
