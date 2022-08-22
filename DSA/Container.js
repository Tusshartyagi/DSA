var maxArea = function(height) {
    var waterCount=0;
    var area=0;
    for(var i =0;i<height.length-1;i++){
        for(var j=1;j<height.length;j++){
            waterCount = (Math.min(height[i],height[j]) * (j-i));
            area = Math.max(area,waterCount);
        }
    }
    return area;
};