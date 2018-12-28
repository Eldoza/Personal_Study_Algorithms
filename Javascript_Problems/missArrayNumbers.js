// Suppose you are given an array of size 1 to N. Write a function that will log to console which values between 1 and N are NOT in the array. For example, given an array of size 5 containing values [5, 2, 5, 1, 1] your function would print to console "3, 4". On the other hand, given an array of size 6 that contained values [6, 3, 4, 1, 2, 5], your function would print nothing (or "").

const coolArr = [5,2,5,1,1]

function returnMissingNumbers (numbers) {
  const sortedNums = numbers.sort((a, b) => a - b )
  const uniqueNums = [...new Set(sortedNums)]
  let missingNums = []

  for (let i = 1; i < numbers.length; i++){
    if(uniqueNums.indexOf(i) === -1) {
      missingNums.push(i)
    }
  }
  return missingNums
}

console.log('answerrrr ===>', returnMissingNumbers(coolArr))

groups.items