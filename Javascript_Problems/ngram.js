// N-Grams Code Challenge
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

const createNGram = (nGramString) => {
  const stringsArr = nGramString.split(" ");
  const stringsArrLength = stringsArr.length;
  let ngramsArray = [];

  for (let i = 0; i < stringsArrLength; i++) {
    for (let j = 1; j < stringsArrLength + 1; j++) {
      ngramsArray.push(stringsArr.slice(i, j).join(" "));
    }
  }
  return ngramsArray.filter((word) => word.trim() !== "");
};

const stringToGram = "Make a killer impression this is it.";
console.log(createNGram(stringToGram));
