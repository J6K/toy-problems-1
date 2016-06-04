/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Brute Force Method
var twoSum = function(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

// Using a constant time look-up storage
var twoSum2 = function(nums, target) {
  var storage = {}
  var current
  var other

  for (var i = 0; i < nums.length; i++) {
    current = nums[i]
    other = target - current

    if (storage[current]) {
      storage[current].count++
    } else {
      storage[current] = {
        index: i,
        count: 1
      }
    }

    if (current === other && storage[current].count === 2) {
      return [storage[current].index, i]
    } else if (current !== other && storage[other]) {
      return [storage[other].index, i]
    }
  }
}
