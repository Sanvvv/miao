// diagonal traverse
var findDiagonalOrder = function(matrix) {
  let m = matrix.length
  let n = matrix[0].length
  let arr = []
  let i = 0
  let j = 0

  // while (j < n) {
  //   let countj = j
  //   arr.push(i)
  // }

  for (let j = 0; j < n; j++) {
    if (j % 2 === 0) {
      let x = j
      let y = 0
      while (x >= 0) {
        arr.push(matrix[x][y])
        x--
        y++
      }
    } else {
      let x = 0
      let y = j
      while (y >= 0) {
        arr.push(matrix[x][y])
        x++
        y--
      }
    }
  }

  for (let i = 1; i < m; i++) {
    if (i % 2 === 1) {
      let x = i
      let y = n - 1
      while (y >= 0) {
        arr.push(matrix[x][y])
        x++
        y--
      }
    }
  }

  console.log(arr)
};

var a = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
  [ 10, 11, 12 ]
 ];

 findDiagonalOrder(a)