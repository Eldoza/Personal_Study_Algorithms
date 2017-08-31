// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
//
// Kata.getMiddle("test") should return "es"
//
// Kata.getMiddle("testing") should return "t"
//
// Kata.getMiddle("middle") should return "dd"
//
// Kata.getMiddle("A") should return "A"
//

function getMiddle(s) {
  var stringArray = s.split("")
  var stringArrayLength = stringArray.length
  var middleIndex;
  var thingToReturn = []

 function isEven(stringArrayLength){
    if (stringArrayLength % 2 == 0){
      var middleIndex = Math.floor(stringArray.length / 2)
      thingToReturn.push(stringArray[middleIndex - 1])
      thingToReturn.push(stringArray[middleIndex])

      return thingToReturn.join('')
    }else{
      middleIndex = Math.floor(stringArray.length / 2)
      thingToReturn.push(stringArray[middleIndex])

      return thingToReturn.join('')
    }
 }

 return isEven(stringArrayLength)

}

 
