function bubbleSort(array) {
  var sorted = false
  var temp

  while (!sorted) {
    sorted = true
    for (var i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i+1]) {
        sorted = false
        temp = array[i+1]
        array[i+1] = array[i]
        array[i] = temp
      }
    }
  }

  return array
}
