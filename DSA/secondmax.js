function highestNumber(arr){
  let max = 0, result = 0;

  for (const value of arr) {
    const nr = Number(value)

    if (nr > max) {
      [result, max] = [max, nr] // save previous max
    } else if (nr < max && nr > result) {
      result = nr; // new second biggest
    }
  }

  return result;
}

console.log(highestNumber([52,41,33,65,43]))