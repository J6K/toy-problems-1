/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  // If version1 > version2 return 1, if version1 < version2 return -1, otherwise return 0.

  v1 = version1.split('.').map(function(item) { return parseInt(item) })
  v2 = version2.split('.').map(function(item) { return parseInt(item) })
  count = 0

  while (true) {
    if (v1[count] === undefined && v2[count] !== 0) {
      return -1
    } else if (v2[count] === undefined && v1[count] !== 0) {
      return 1
    } else if (v1[count] > v2[count]) {
      return 1
    } else if (v1[count] < v2[count]) {
      return -1
    } else if (v1[count+1] !== undefined || v2[count+1] !== undefined) {
      count++
    } else {
      return 0
    }
  }
};
