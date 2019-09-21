/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
    let maxArea = 0
    let i = 0, j = height.length - 1
    while (i < j) {
        const area = (j - i) * (height[i] > height[j] ? height[j] : height[i])
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
}

// 双指针
