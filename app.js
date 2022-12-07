//day 7
//Functions
// Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences.
// Arrow function uses arrow instead of the keyword function to declare a function. Let us see both function declaration and arrow function.
// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function
function square(n) {
  return n * n
}

console.log(square(2)) // 4

const squar = n => {
  return n * n
}

console.log(squar(2))  // -> 4

// if we have only one line in the code block, it can be written as follows, explicit return
const sqr = n => n * n  // -> 4