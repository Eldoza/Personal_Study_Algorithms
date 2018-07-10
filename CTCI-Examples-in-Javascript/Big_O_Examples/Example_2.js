
function printPairs(coolArray){
  for (var i = 0; i < coolArray.length; i++){
    for( var j = 0; j < coolArray.length; j++){
      console.log('i ===>', array[i])
      console.log('j ===>', array[j])
    }
  }
}

//The inner for loop has O(N) iterations and it is called N times. Therefore, the runtime is O(N^2)
