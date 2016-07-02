const isSubset = (array, sub) => {
  for (let i = 0; i < sub.length; i++) {
    let c = array.indexOf(sub[i]);
    if (c === -1) {
      return false;
    } else {
      array.splice(c, 1);
    }
  }
  return true;
}
