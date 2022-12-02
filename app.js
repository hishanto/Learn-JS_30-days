//day 7
//Functions
// Function with many arguments
function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {  // argunments is a keyword of the function which is a array
      sum += arguments[i]
    }
    return sum
  }
  
  console.log(sumAllNums(1, 2, 3, 4)) // 10
  console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
  console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173