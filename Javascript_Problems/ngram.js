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
//   "Make", 
//   "Make a", 
//   "Make a killer", 
//   "Make a killer impression", 
//   "a", 
//   "a killer", 
//   "a killer impression", 
//   "killer",
//   "killer impression", 
//   "impression", 
// ]

var str = "Make a killer impression"

// function nGram (str) {
//   let splitArr = str.split(' ')
//   let arrLength = splitArr.length
//   let finalArr = []
//   let gram 
//   for (let i = 0; i < arrLength; i++ ){
//     for (let j = i; j < arrLength; j++){
//        gram = splitArr.slice(j, j + 1)
//       finalArr.push(gram)
//     }
    
//   }   
//   return finalArr
// }
let nGrams = string => {
  let stringToArray = string.replace(/[^\w\s]/gi, '').split(' ');
  let result = []
  for (i = 0; i < stringToArray.length; i++) {
    let wordsRemaining = stringToArray.length;
    let nGramArray = []
    while (wordsRemaining > 0) {
      let killerCombo = stringToArray.slice(i, wordsRemaining).join(' ');
      killerCombo !== "" && nGramArray.push(killerCombo);
      wordsRemaining = wordsRemaining - 1;
    }
    nGramArray.reverse().forEach(element => result.push(element));
  }
  console.log(result);
}

nGrams('Make a killer impression.');

// console.log(nGrams(str))
