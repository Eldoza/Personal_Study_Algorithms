This first algorithm is quadratic, however we can use the breadcrumb technique and make it linear.


//QUADRATIC
const isUnique = (arr) => {
  let result = true

  for (let i = 0; i < ar.length; i++){
    console.log(`OUTER LOOP ===> i === ${i} `)

    for (let j = 0; j < arr.length; j++){
      console.log(`INNER LOOP ====> j === ${j}`)
      if ( i!== j && arr[i] === arr[j]) {
        result = false
      }
    }
  }

  return result
}

console.log(isUnique([1,2,3]) === true)
console.log(isUnique([1,2,3]) === false)
