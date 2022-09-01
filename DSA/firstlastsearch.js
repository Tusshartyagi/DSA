var search = function(nums, target) {
    return [nums.indexOf(target), nums.lastIndexOf(target)];
}
console.log(search([1,3,5,9,9,0],9));