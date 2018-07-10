function printUnorderedPairs(coolArray){
  for (var i = 0; i < coolArray.length; i++){
    for(var j = i + 1; j < coolArray.length; j++){
      console.log('i ===>', array[i])
      console.log('j ===>', array[j])
    }
  }
}


//Average Work
//We know that the outer loop runs N times. How much work does the inner loop do? It varies across iterations, but we can think about the average iteration.

// What is the average value of 1, 2, 3, 4, 5, 6, 7, 8 ,9 , 10? The average value will be in the middle, so it will roughly be 5.
//
// What about for 1, 2, 3 ..., N? The average value in this sequence is N/2.
//
// Therefore, since the inner loop does N/2 work on average and it is run N times, the total work is N^2/2 which is O(N^2)
