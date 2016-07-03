const sudokuCheck = str => {
  let rows = str.split('\n').map(row => row.split(''))
  let columns = makeColumns(rows)
  let blocks = makeBlocks(rows)

  let result = [...rows, ...columns, ...blocks]
    .reduce((bool, cur) => {
      console.log('cur = ', cur);
      return bool && cur.sort().join('') === "123456789"
    }, true)

  return result ? 'solved' : 'invalid'
}

const makeColumns = rows => {
  return rows[0].map((_, columnIndex) => {
    return rows.map((row) => {
      return row[columnIndex]
    })
  })
}

const makeBlocks = rows => {
  let result = [];
  for (let r = 1; r <= 7; r += 3) {
    for (let c = 1; c <= 7; c += 3) {
      result.push([
        rows[r-1][c-1], rows[r-1][c], rows[r-1][c+1],
        rows[r][c-1],   rows[r][c],     rows[r][c+1],
        rows[r+1][c-1], rows[r+1][c], rows[r+1][c+1]
      ])
    }
  }
  return result;
}
