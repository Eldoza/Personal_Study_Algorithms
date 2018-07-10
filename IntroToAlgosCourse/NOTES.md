# Time Complexity of Common Operations:
  - **CONSTANT**:
    - ```O(1)``` Running a statement

  - **CONSTANT**:
    - ```O(1)``` Value look up on an array, object, variable

  - **LOGARITHMIC**:
    - ```O(logN)``` Loop that cuts problem in half every iteration

  - **LINEAR**:
    - ```O(n) ``` Looping through the values of an array

  - **QUADRATIC**:
    - ```O(n^2)``` Double nested loops

  - **EXPONENTIAL**:
    - ```O(n^3)``` Triple nested loops

  ##### QUADRATIC

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
  ##### This first algorithm is quadratic, however we can use the breadcrumb technique and make it linear.
  ###### QUADRATIC time now becomes => CONSTANT time
    isUnique = (arr) => {
      const breadcrumbs = {}
      let result = true

      for ( let i = 0; i < arr.length; i++) {
        console.log('Loop ====> i === ${i}')
        if (breadcrumbs[arr[i]]) {
          result = false
        } else {
          breadcrumbs[arr[i]] = true
        }
      }
    }

  ###### This is another breadcrumb example where we use caching, however as our breadcrumb object grows, we encounter a space complexity issue.
    const uniqSort = () => {
      const breadcrumbs = {}
      const result = []

      for (let i = 0; i < arr.length; i++) {
        if( !breadcrumbs[arr[i]]) {
          result.push(arr[i])
          breadcrumbs[arr[i]] = true
        }
      }

      return result.sort((a, b) => a - b)
    }

  #### Basic Memoization example
    - Memoization is a type of caching
    
    const cache = {}

    const memoTimes10 = (n) => {
      if ( n in cache ) {
        console.log('Fetching from cache:' n)
        return cache[n]
      } else {
        console.log('Calculating result')
        let result = times
      }
    }
