// initialize
let str = 'Today is a good day to learn DSA'
// print out
console.log(str)

// insert
str = str + ' VAN THINH'
console.log('after 1:', str)
console.log('afer 2:',str.concat(' is learning DSA with his fen abcd '))

console.log(str.length)
console.log(str) // so concat dont change the root str


// access 
console.log('access:', str[29])
console.log('access:', str.substring(29, 40))

// search - return true false
console.log('find: ',str.includes('good day')) //true


let url = "https://www.example.com/product/123";
let message = "Hey, are you coming to the party tonight?";
let filePath = "/users/john/documents/file.txt";
let jsonData = '{"name": "John", "age": 30}';
let timestamp = "2024-11-11 14:30:00";
