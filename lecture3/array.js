//initialize
const arr = ['a', 'b', 4, 2, 'v']

//print out , see how data looks like
console.log(arr)

// insert
arr.push(100)
console.log('insert:' ,arr)

//splice still add but cut from 1st-para's index 
//- 2rd-para's index elements if 2rd para = 0 <=> insert
arr.splice(1, 0, 'DSA')
console.log('splice-random:' ,arr)

//delete
arr.splice(4,1)
console.log('delete:' ,arr)

// search - return boolean
console.log(arr.includes(150)) //false
console.log(arr.includes('a')) //true






