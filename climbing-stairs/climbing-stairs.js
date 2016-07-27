var climbStairs = function(n) {
  if (n === 0) return 0;
  var lookup = [1, 1];
  var count = 2;
  while (count <= n) {
    lookup[count] = lookup[count-1] + lookup[count-2];
    count++;
  }
  return lookup[n];
};
