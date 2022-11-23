// Primitive data types are immutable(non-modifiable) data types
let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false 

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false
//Non-Primitive Data Type are mutable
let nums = [1, 2, 3]

nums[0] = 10
console.log(nums);  // [10, 2, 3]

// non-primitive can no be compared
nums[0] = 1 // 1,2,3
let numbers = [1, 2, 3];
let newNumbers = nums


console.log(nums == numbers); //false
console.log(nums == newNumbers); // true
let userOne = {
    name:'Asabeneh',
    role:'teaching',
    country:'Finland'
    }
    
    let userTwo = {
    name:'Asabeneh',
    role:'teaching',
    country:'Finland'
    }

    console.log(userOne == userTwo);//false
