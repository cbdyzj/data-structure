
function reverse(arr, i, j) {
    while (i < j) {
        const tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
        i++
        j--
    }
}

const nextPermutation = function (nums) {
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            let target = i + 1
            for (let j = i + 2; j < nums.length; j++) {
                if (nums[j] > nums[i] && nums[j] <= nums[target]) {
                    target = j
                }
            }
            const tmp = nums[i]
            nums[i] = nums[target]
            nums[target] = tmp
            reverse(nums, i + 1, nums.length - 1)
            return nums
        }
    }
    reverse(nums, 0, nums.length - 1)
    return nums
}

// 全排列字典序列法
// 1. 从右向左找到第一个第一个非递增的数nums[i]（如果没有找到则说明是最大排列）
// 2. 从右向左找到nums[i]右侧第一个大于nums[i]且小于等于右侧其他数的数nums[j]
// 3. 交换nums[i]与nums[j]
// 4. 逆置nums[i]右侧数
