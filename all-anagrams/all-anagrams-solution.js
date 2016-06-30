const allAnagrams = (string) => {
  let storage = {};

  const recurse = (built, avail) => {
    if (built.length === string.length) {
      storage[built] = true;
    } else {
      for (let i = 0; i < avail.length; i++) {
        recurse(built + avail[i], avail.slice(0, i) + avail.slice(i+1));
      }
    }
  }

  recurse('', string);

  return Object.keys(storage);
}
