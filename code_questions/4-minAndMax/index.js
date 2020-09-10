// Return the key and the number of appearances for the least and most frequent entry of an array
// Example minAndMax(['a', 'a', 'b']) => { min: { b: 1 }, max: { a: 2 }}

const { isCompositeComponent } = require("react-dom/test-utils");

// exports.minAndMax = (itemArray) => {
//   console.log({ itemArray });
// };

////// foo =================> 00000001: {x: "baz"}
const multiply = (numberArr) => {
  numberArr.forEach((number, index) => {
    number[index] = number * 2;
  });

  return numberArr;
};

const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = multiply(numbers);

console.log({ numbers, doubleNumbers });
