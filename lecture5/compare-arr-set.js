// search in 1 million number
function generate(size) {
    const numbers = new Array()
    while (numbers.size < size) {
        numbers.push(Math.floor(Math.random()* size * 10))
    }
    return numbers;
}

const size = 1000000;

const arrayNums = generate(size);
const setNums = new Set(arrayNums);

const targetNums = 4;

// measure time
console.time('Array: ')
const arrFound = arrayNums.includes(targetNums);
console.timeEnd('Array: ');

console.time('Set: ')
const setFound = setNums.has(targetNums);
console.timeEnd('Set: ');
