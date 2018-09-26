// Charlie N-Grams Code Challenge
//
// This is a small programming problem to test your technical ability and coding style. Use the programming language of your choice.
//
// Write a simple script to generate a set of n-grams from a string of text. N-grams are a contiguous sequence of n words from a string of text, and have many applications from full-text search indexes to machine learning. You'll generate a set of every permutation of contiguous n-grams from a string of text, from 1-gram to n-grams where n is the number of words in the string
//
//
// Example
//
// "Make a killer impression."
// Returns
//
// [
//   "Make", 0
//   "Make a", 01
//   "Make a killer", 012
//   "Make a killer impression", 0123
//   "a", 1
//   "a killer", 12
//   "a killer impression", 123
//   "killer", 2
//   "killer impression", 23
//   "impression", 3
// ]

var str = "Make a killer impression"

function nGram (str) {
  let splitArr = str.split(' ')
  let arrLength = splitArr.length
  let finalArr = []
  let gram 
  for (let i = 0; i < arrLength; i++ ){
    for (let j = i; j < arrLength; j++){
       gram = splitArr.slice(j, j + 1)
      finalArr.push(gram)
    }
    
  }   
  return finalArr
}

console.log(nGram(str))
