// What is the expected output of the following code blocks 

// -----------------------
let x = 1
let y = x

y = 2

console.log({ x, y })
// -----------------------


// -----------------------
const x = 1
const y = x

y = 2

console.log({ x, y })
// -----------------------


// -----------------------
const x = { a: 1, b: 2}
const y = x

y.b = 3

console.log({ x, y })
// -----------------------