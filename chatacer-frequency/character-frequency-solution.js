const characterFrequency = (str) => {
  return groupRepeatedChars(str)
    .sort((a, b) => b.length - a.length || a.charCodeAt(0) - b.charCodeAt(0))
    .map((item) => [item[0], item.length])
}

const groupRepeatedChars = (str) => {
  // turns 'aaabbc' into ['aaa', 'bb', 'c'] with regex magic
  return str
    .split('')
    .sort()
    .join('')
    .match(/(\D)\1*/g) || [];
}
