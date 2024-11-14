const arr1 = [1,2,3,4,5,6,7,8,9,10]

console.time('test')
console.log(arr1.includes(4));
console.timeEnd('test')


const map1 = new Map();
for(let i=0; i<=10; i++) {
    map1.set(`${i}`, i)
}
console.time('test1')
console.log(map1.get(4));
console.timeEnd('test1')