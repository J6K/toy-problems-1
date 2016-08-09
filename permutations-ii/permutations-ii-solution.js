/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  var results = [];

  var recurse = function(built, avail) {
    if (avail.length === 0) {
      results.push(built);
      return;
    }

    var alreadySeen = {};

    for (var i = 0; i < avail.length; i++) {
      if (alreadySeen[avail[i]] === undefined) {
        alreadySeen[avail[i]] = true;
        built.push(avail[i]);
        recurse(built.slice(), [].concat(avail.slice(0, i), avail.slice(i + 1)));
        built.pop();
      }
    }
  }

  recurse([], nums);

  return results;
};
