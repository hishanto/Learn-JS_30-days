//day 6
//for loops 
for(let i = 0; i <= 5; i++){
    console.log(`${i} * ${i} = ${i * i}`)
  }
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}

//while loop
let i = 0
while (i <= 5) {
  console.log(i)
  i++
}
do {
    console.log(i)
    i++
  } while (i <= 5)
  