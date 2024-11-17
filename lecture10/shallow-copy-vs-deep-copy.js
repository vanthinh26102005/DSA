let original = { a : 123 }
const shallowCopy = original
const deepCopy = JSON.parse(JSON.stringify(original))

console.log('original:', original)
console.log('shallowCopy:', shallowCopy)
console.log('deepCopy:', deepCopy)

// modife original
original.a =456
console.log('\nmodify original -> 456. What happen: ')
console.log('original:', original)
console.log('shallowCopy:', shallowCopy)
console.log('deepCopy:', deepCopy)

//modify shallow copy
shallowCopy.a=789
console.log('\nmodify shallow copy -> 789. What happen: ')
console.log('original:', original)
console.log('shallowCopy:', shallowCopy)
console.log('deepCopy:', deepCopy)

//re-assign original copy
original = {b: 111}
console.log('\nre-assign original -> 789. What happen: ')
console.log('original:', original)
console.log('shallowCopy:', shallowCopy)
console.log('deepCopy:', deepCopy)

