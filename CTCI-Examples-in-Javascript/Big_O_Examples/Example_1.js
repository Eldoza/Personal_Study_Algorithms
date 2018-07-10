
function foo (coolArray) {
  var sum = 0
  var product = 1

  for (var i = 0; i < coolArray.length; i++){
    sum += coolArray[i]
  }

  for (var j = 0; i < coolArray.length; i++){
    product *= array[i]
  }
  console.log("Sum:", sum)
  console.log("Product:", product)
}

//This will take 0(N) time. The fact that we iterate through the array twice doesn't matter.
