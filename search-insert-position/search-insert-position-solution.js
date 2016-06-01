/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  var searching = true
  var start = 0
  var end = nums.length - 1
  var half

  while (searching) {
    if (start === end) {
      break
    }

    // find half way index
    half = start + Math.floor(nums.length / 2)

    // if half way point is target
    if (nums[half] === target) {
      return half
    } else if (nums[half] < target) {
      start = half
    } else (nums[half] > target) {
      end = half
    }
  }

  if (nums[start] < target) {
    return start
  } else {
    return start + 1
  }
}

// arr = 1, 3
//          |
// Math.floor(arr.length / 2) => 1

// arr = 3

// arr = 1, 2, 3, 5
//             |
// Math.floor(arr.length / 2) => 2

// arr = 1, 2, 3, 4, 5
//             |
// Math.floor(arr.length / 2) => 2
