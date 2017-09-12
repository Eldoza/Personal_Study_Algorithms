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

str = "Make a killer impression"

function nGram(str) {
  var convertedText = str.split(" ");
  var gramArr = []
  for (var i = 0; i < convertedText.length; i++){
    var tempArr = []
    var slicedItemArr = convertedText.slice(0, i + 1)

    for(var j = i; j < slicedItemArr.length; j++){
      var slicedGram = slicedItemArr.slice(0, i + 1)
      tempArr.push(slicedGram.join(' '))
      var gramToPush = tempArr[0]
    }

    gramArr.push(gramToPush)
  }
  return gramArr
}

console.log(nGram(str))
