function insertionSort(array) {
  // iterate over the array, starting on the 2nd element
  for (var i = 1; i < array.length ; i++) {

    // initialize a current variable pointing to current index
    var current = i

    // while array at position current is less than whats to the left
    while (array[current-1] !== undefined && array[current] < array[current-1]) {

      // store the value in the slot to the left of current
      var temp = array[current-1]
      // assign the left slot to the current value
      array[current-1] = array[current]
      // assign the current slot to the left value
      array[current] = temp
      // decrement current by 1
      current--
    }

  }

  // return manipulated array
  return array
}
