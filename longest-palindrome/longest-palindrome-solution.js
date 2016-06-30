const longestPalindrome = (string) => {
  let max = '';
  let cur = '';

  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      cur = string.substr(i, j - i + 1);
      if (isPalindrome(cur) && cur.length > max.length) {
        max = cur;
      }
    }
  }

  return max;
}

const isPalindrome = (str) => {
  return str === str.split('').reverse().join('');
}
