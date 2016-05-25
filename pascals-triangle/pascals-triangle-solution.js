/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(n) {
  if (!n) {
    return [];
  }
  
  var result = [[1]]
  var x = 1
  var cur
  var last

  while ( x < n ) {
    cur = []
    last = result[x - 1]
    cur.push(1)
    for (var i = 1; i < x; i++) {
      cur.push(last[i] + last[i-1])
    }
    cur.push(1)
    result[x++] = cur
  }
  return result
}
