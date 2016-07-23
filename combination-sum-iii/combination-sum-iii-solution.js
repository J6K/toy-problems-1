/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {

  var result = [];

  function recurse(built, avail) {
    if (built.length === k && sum(built) === n) {
      result.push(built.slice());
      return;
    } else if (built.length > k) {
      return;
    }

    avail.forEach(function(item, idx) {
      built.push(item)
      recurse(built, avail.slice(idx+1));
      built.pop();
    });
  }

  recurse([], [1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return result;
};

var sum = function(arr) {
  arr = arr || [];
  return arr.reduce(function(a, b) {
    return a + b;
  });
}
