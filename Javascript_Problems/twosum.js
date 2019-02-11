// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// Example:
//
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1]

// Test cases:
// Input: 
// sampleSet = [3, 3]
// Target = 6
// Expected: [0, 1]

const twoSum = function(nums, target) {
  const comp = {};
  for (let i = 0; i < nums.length; i++){
      if (comp[nums[i]] >= 0){
          console.log('comp dyamic key ===>', [comp[nums[i]], i])
          return [comp[nums[i]],i]
      }
      comp[target - nums[i]] = i
  }
};

var sampleSet = [2,7,11,15]
var sampleTarget = 9

// var twoSum  = function(numsArr, target) {
//   const indicesToReturn = []
//   for (let i = 0; i < numsArr.length; i++) {
//     for (let j = i + 1; j < numsArr.length; j++){
//       if ((numsArr[i] + numsArr[j]) === target) {
//         indicesToReturn.push(numsArr.indexOf(numsArr[i]))
//         indicesToReturn.push(numsArr.indexOf(numsArr[j]))
//       }
//     }
//   }

//   return indicesToReturn
// }

console.log(twoSum(sampleSet, sampleTarget))