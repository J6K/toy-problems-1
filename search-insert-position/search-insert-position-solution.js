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

  if (nums[0] >= target) {
    return 0
  } else if (nums[nums.length - 1] < target) {
    return nums.length
  }

  while (searching) {
    if (start === end) {
      break
    }

    // find half way index
    half = start + Math.floor((end - start + 1) / 2)

    // if half way point is target
    if (nums[half] === target) {
      return half
    }

    // if start is target
    if (nums[start] === target) {
      return start
    }

    // if end is target
    if (nums[end] === target) {
      return end
    }

    // if start and end are right next to each other, stop searching
    if (end - start === 1) {
      searching = false
    }

    // if half way point is greater than target, set the end to half way point
    // otherwise set start to half
    if (nums[half] > target) {
      end = half
    } else {
      start = half
    }
  }

  // at this point, we know it fits between the start and end,
  // and the start and end are right next to each other, so therefore we return the ending index.
  return end
}
