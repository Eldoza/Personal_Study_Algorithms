// Write a function that will tell you if there are 2 items in the array that add up to the target number
// examples: containsTotal([1,2,3], 5) => true
//           cotnainsTotal([1,2,3], 6) => false
// Rules: A number can only be used once per entry
//      containsTotal([1,3], 2) => false (the number 1 can only be used one time)
// However the list may contain repeats
//      containsTotal([1,2,1], 2) => true (1 + 1 = 2)
const nums = [1, 2, 3];
const tar = 6;

// const containsTotal = (numArr, target) => {
//   let isTarget = false;
//   numArr.forEach((num1, index1) => {
//     numArr.forEach((num2, index2) => {
//       if (num1 + num2 === target && index1 !== index2) {
//         isTarget = true;
//       }
//     });
//   });
//   return isTarget;
// };

const containsTotal = (numArr, target) => {
  const dict = {}
  numArr.forEach(num => {
    if (dict[num]){
      return true
    } else {
      dict[num]
    }
  })
}

console.log(containsTotal(nums, tar));
