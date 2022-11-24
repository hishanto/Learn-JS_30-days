// // Primitive data types are immutable(non-modifiable) data types
// let numOne = 3
// let numTwo = 3

// console.log(numOne == numTwo)      // true

// let js = 'JavaScript'
// let py = 'Python'

// console.log(js == py)             //false 

// let lightOn = true
// let lightOff = false

// console.log(lightOn == lightOff) // false
// //Non-Primitive Data Type are mutable
// let nums = [1, 2, 3]

// nums[0] = 10
// console.log(nums);  // [10, 2, 3]

// // non-primitive can no be compared
// nums[0] = 1 // 1,2,3
// let numbers = [1, 2, 3];
// let newNumbers = nums


// console.log(nums == numbers); //false
// console.log(nums == newNumbers); // true
// let userOne = {
//     name:'Asabeneh',
//     role:'teaching',
//     country:'Finland'
//     }
    
//     let userTwo = {
//     name:'Asabeneh',
//     role:'teaching',
//     country:'Finland'
//     }

//     console.log(userOne == userTwo);//false

//     //numbers
//     let age = 35
//     const gravity = 9.81  // we use const for non-changing values, gravitational constant in  m/s2
//     let mass = 72         // mass in Kilogram
//     const PI = 3.14       // pi a geometrical constant
    
//     // More Examples
//     const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant
//     const bodyTemp = 37      // oC average human body temperature, which is a constant
    
//     console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)
// const PI = Math.PI

// console.log(PI)                            // 3.141592653589793

// // Rounding to the closest number
// // if above .5 up if less 0.5 down rounding

// console.log(Math.round(PI))                // 3 to round values to the nearest number

// console.log(Math.round(9.81))              // 10

// console.log(Math.floor(PI))                // 3 rounding down

// console.log(Math.ceil(PI))                 // 4 rounding up

// console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value

// console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

// const randNum = Math.random() // creates random number between 0 to 0.999999
// console.log(randNum)

// // Let us  create random number between 0 to 10

// const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
// console.log(num)

// //Absolute value
// console.log(Math.abs(-10))      // 10

// //Square root
// console.log(Math.sqrt(100))     // 10

// console.log(Math.sqrt(2))       // 1.4142135623730951

// // Power
// console.log(Math.pow(3, 2))     // 9

// console.log(Math.E)             // 2.718

// // Logarithm
// // Returns the natural logarithm with base E of x, Math.log(x)
// console.log(Math.log(2))        // 0.6931471805599453
// console.log(Math.log(10))       // 2.302585092994046

// // Returns the natural logarithm of 2 and 10 respectively
// console.log(Math.LN2)           // 0.6931471805599453
// console.log(Math.LN10)          // 2.302585092994046

// // Trigonometry
// Math.sin(0)
// Math.sin(60)

// Math.cos(0)
// Math.cos(60)
//    Strings
// let space = ' '           // an empty space string
// let firstName = 'Hus'
// let lastName = 'faaa'
// let country = 'mal'
// let city = 'Dha'
// let language = 'JavaScript'
// let job = 'teacher'
// let quote = "The saying,'Seeing is Believing' is not correct in 2022."
// let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2022.`
// age = 300
// //String Concatenation
// let fullName = firstName + space + lastName; // concatenation, merging two string together.
// let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition
// console.log(fullName);
// console.log(personInfoOne);
// // long literal Strings
// const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
// I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
// Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
// In the end of 2019, I was thinking to expand my teaching and to reach \
// to global audience and I started a Python challenge from November 20 - December 19.\
// It was one of the most rewarding and inspiring experience.\
// Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
// I hope you are enjoying too."

console.log(paragraph)
// \n: new line
// \t: Tab, means 8 spaces
// \\: Back slash
// \': Single quote (')
// \": Double quote (")
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')
//Template Literals (Template Strings)
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I practice ${language}.`
console.log(personInfoThree)
let a = 2
let b = 3
console.log(`${a} is greater than ${b}: ${a > b}`)// false
//      String method
let js = 'JavaScript'
console.log(js.length)         // 10
console.log(firstName.length)  // 8

let stringN = 'JavaScript'

console.log(stringN.toUpperCase())     // JAVASCRIPT



console.log(firstName.toUpperCase())  // 
console.log(firstName.toLocaleLowerCase()) 
console.log(country.toUpperCase())    // 


// subtract from string -- substr(index, slices)
console.log(string.substr(4,6)) 

// subtract from string -- substring(index, end)
console.log(string.substring(4,10)) 
console.log(string.substring(4)) 

//trim(): Removes trailing space in the beginning or the end of a string.
let string = '   30 Days Of JavaScript   '
console.log(string);
console.log(string.trim(' ')); // 
//includes(): It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.


console.log(string.includes('Days'))     // true
console.log(string.includes('days'))     // false - it is case sensitive!
console.log(string.includes('Script'))   // true
console.log(string.includes('script'))   // false
console.log(string.includes('java'))     // false
console.log(string.includes('Java'))     // true

//