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

    //numbers
    let age = 35
    const gravity = 9.81  // we use const for non-changing values, gravitational constant in  m/s2
    let mass = 72         // mass in Kilogram
    const PI = 3.14       // pi a geometrical constant
    
    // More Examples
    const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant
    const bodyTemp = 37      // oC average human body temperature, which is a constant
    
    console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)