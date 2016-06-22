var coins = [1, 2, 5, 10, 50, 100, 200];

function coinSums(target) {
  // initialize our to-be 2-d array
  var lookup = [];

  // iterate over every coin (c)
  coins.forEach(function(coin, row) {

    lookup[row] = [1];

    // iterate over every number from 0 to target (t)
    for (var t = 1; t <= target; t++) {

      // initialize combs
      var combs = 0;

      // check cell above
      if (lookup[row - 1] && lookup[row - 1][t]) {
        // add to combs the found value or 0 if out of bounds.
        combs += lookup[row - 1][t];
      }

      // check cell 'coin' digits to the left
      if (lookup[row][t - coin]) {
        // add to combs the found value or 0 if out of bounds.
        combs += lookup[row][t - coin];
      }

      // set the current cell value to combs
      lookup[row][t] = combs;
    }

  });

  // return the last element of the last array
  var last = lookup[lookup.length - 1];
  return last[last.length - 1];
}
