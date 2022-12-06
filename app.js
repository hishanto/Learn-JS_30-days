//day 7
//Functions
// Unlimited number of parameters in ARROW function
//arraw function declaration
const sumAllNums = (... args) =>{
  let sum = 0
  for(const element of args){
    sum += element
  }
  return sum
}
console.log(sumAllNums(1, 2, 3, 4));
console.log(sumAllNums(10, 20, 13, 40, 10));
console.log(sumAllNums(15,25,30,25,10,33,40));