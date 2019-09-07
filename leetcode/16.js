/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    var diff = Number.MAX_SAFE_INTEGER
    var closest = 0
    for (var i = 0; i < nums.length - 2; i++) {
        for (var j = i + 1; j < nums.length - 1; j++) {
            for (var k = j + 1; k < nums.length; k++) {
                var curNum = nums[i] + nums[j] + nums[k]
                var curDiff = Math.abs(curNum - target)
                if (curDiff < diff) {
                    diff = curDiff
                    closest = nums[i] + nums[j] + nums[k]
                }
            }
        }
    }
    return closest
}

// 应该用双指针（O(n^2)），但是三重循环（O(n^3)）也AC了😳
