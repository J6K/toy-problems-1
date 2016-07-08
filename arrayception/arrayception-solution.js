const arrayception = (array, n) => {
  n = n || 1;

  let depths = array.map((v) => {
    if (Array.isArray(v)) {
      return arrayception(v, n + 1);
    } else {
      return n;
    }
  });

  return depths.length ? Math.max(...depths) : 0;
}
