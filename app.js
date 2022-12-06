//day 7
//Functions
// Anonymous Function
//Anonymous function or without name
const anonymousFun = function() {
  console.log(
    'I am an anonymous function and my value is stored in anonymousFun'
  )
}
console.log(anonymousFun);

//Expression Function
// Expression functions are anonymous functions. After we create a function without a name and we assign it to a variable. To return a value from the function we should call the variable. Look at the example below.

// Function expression
const square = function(n) {
  return n * n
}

console.log(square(2)) // -> 4

// self invoking functions
(function(n) {
  console.log(n * n)
})(2)
let squaredNum = (function(n) {
  return n * n
})(10)

console.log(squaredNum)