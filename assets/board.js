// leetcode

// function chunk(array, size = 1) {
//   var res = []
//   for (var i = 0; i < array.length; i += size) {
//     arr.push(array.slice(i, i + size))
//   }
//   return res
// }

// console.log(chunk([''], 3))


// lodash

// var test = {
//   difference: function (array, values) {
//     if (values) {
//       return array.filter((element) => values.indexOf(element) === -1)
//     } else return array
//   }
// }

var a = [1.3,2.4,3.1]
var b = Sanvvv.differenceBy(a, [1,2.2])
// b[0] = 'no'
// console.log('origin:', a, 'result:', b)
console.log(b)

// console.log(Sanvvv.difference(
//   a
// ))