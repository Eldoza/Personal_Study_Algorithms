// Problem from HackerRank
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
//
// Input Format
//
// A single line of five space-separated integers.
//
// Constraints
//
// Each integer is in the inclusive range .
// Output Format
//
// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than 32 bit integer.)
//
// Sample Input
//
// 1 2 3 4 5
// Sample Output
//
// 10 14
// Explanation
//
// Our initial numbers are 1,2 ,4 ,4 5, and . We can calculate the following sums using four of the five integers:
//
// If we sum everything except 1, our sum is 2 + 3 + 4 + 5 = 14.
// If we sum everything except 2, our sum is 1 + 3 + 4 + 5 = 13.
// If we sum everything except 3, our sum is 1 + 2 + 4 + 5 = 12.
// If we sum everything except 4, our sum is 1 + 2 + 3 + 5 = 11.
// If we sum everything except 5, our sum is 1 + 2 + 3 + 4 = 10.
// As you can see, the minimal sum is 10 and the maximal sum is 14. Thus, we print these minimal and maximal sums as two space-separated integers on a new line.
//
// Hints: Beware of integer overflow! Use 64-bit Integer.


process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

const ascendingOrder = (a, b) => a - b
const decendingOrder = (a, b) => b - a
const sum = (a, b) => a + b
const firstFourElements = [0, 4]

const min = arr => arr.sort(ascendingOrder).slice(...firstFourElements).reduce(sum)
const max = arr => arr.sort(decendingOrder).slice(...firstFourElements).reduce(sum)

function main() {
    arr = readLine().split(' ');
    arr = arr.map(Number);
    console.log(min(arr), max(arr))

}
