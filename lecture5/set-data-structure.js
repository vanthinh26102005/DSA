// initialize
const setA = new Set([1, 2, 'a', 'b'])
const setB = new Set([2, 3, 'b', 'c'])

//print 
console.log(setA)
console.log(setB)

// function takes in 2 sets and return their union set
function union (setA, setB) { // hội - gộp 2 tập hợp 
    let _union = new Set(setA) 
    for(let element of setB){
        _union.add(element)
    }
    return _union
}

// function takes in 2 sets and return their intersection set

function intersection(setA, setB) {
    let _intersection = new Set()
    for (let element of setB) {
        if (setA.has(element)) {
            _intersection.add(element)
        }
    }
    return _intersection
}

//union
console.log('after-union        :',union(setA,setB))
console.log('after-intersection :',intersection(setA,setB))

//add
setA.add('add-1')
console.log('after-add          ',setA)

//delete
setA.delete('add-1')
console.log('after-delete       ',setA)

//search
console.log(setA.has('a'))
console.log(setA.has('c'))



