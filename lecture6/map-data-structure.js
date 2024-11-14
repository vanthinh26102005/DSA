// initialize

// object style 
const map1 = {
    'Van Thinh': 'Hoc Gioi',
    'Phan Phuong': 'Hoc Ngu',
}

// map class style
const map2 = new Map() // map name to super
map2.set('Dinh Hung', 'Hoc Kha'), 
map2.set('Tuong Vy', 'Hoc Vưa'),
console.log(map2)
map2.set('Dinh Hung', 'Hoc NGUUUU'), 
console.log(map2)

console.log('-------------')

console.log(map1)
console.log(map2)

//insert
console.log('----AFTER INSERT----')
map1['Phuong Duy'] = 'Hoc Tam Tam' // obj style
map2.set('Cong Phat', 'BIP');   // map class style
console.log(map1)
console.log(map2)


//delete
console.log('----AFTER DELETE----')
delete map1['Van Thinh'] // obj style
map2.delete('CongPhat') // map class style
console.log(map1)
console.log(map2)

//search
// obj style
console.log(map1['Phuong Duy'])  // return value
 
// map class style
console.log(map2.get('Phu Trong')) // return undefine
