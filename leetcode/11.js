/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    var maxArea = 0
    for (var i = 0, j = height.length - 1; i < j;) {
        var area = (j - i) * (height[i] > height[j] ? height[j] : height[i])
        if (area > maxArea) {
            maxArea = area
        }
        if (height[i] > height[j]) {
            j--
        } else {
            i++
        }
    }
    return maxArea
};

// 双指针