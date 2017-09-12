// You get an array of numbers, return the sum of all of the positives ones.
//
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: array may be empty, in this case return 0.

function positiveSum(arr) {
  var positive = []
  var negative = []

  arr.map( num => {
    if (Math.sign(num) === 1) {
      positive.push(num)
    }
    else if(Math.sign(num) === -1) {
      negative.push(num)
    }
    else if(Math.sign(num) === 0) {
      return 0
    }
  })

  return positive.reduce((a, b) => a + b, 0)
}
