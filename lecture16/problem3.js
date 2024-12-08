const friendList = {
    'sam' : [''],
    'annie' : ['sam'],
    'jack' : ['annie', 'mac', 'harry', 'doug' ],
    'mac' : [''],
    'doug' : [''],
    'harry' : [''],
    'howard' : ['jack']

}

function print(friend) {
    if (friendList[friend] && friendList[friend].length > 0 && friendList[friend][0] !== '') {
        console.log(`Friend(s) of ${friend}: ${friendList[friend].join(', ')}`);
    } else if (!friendList[friend]) {
        console.log(`${friend} is not in the network.`);
    } else {
        console.log(`${friend} has no friends.`);
    }
}
console.log('**LIST**')
print('jack');
print('howard');
print('harry');

const people = ['sam', 'annie', 'mac', 'jack', 'doug', 'harry', 'howard']
//  adjacency matrix
const friendMatrix = [
// Sam   Annie  Mac  Jack Doug Harry Howard
    [0,   0,    0,   0,   0,   0,    0], // Sam
    [1,   0,    0,   0,   0,   0,    0], // Annie
    [0,   0,    0,   0,   0,   0,    0], // Mac
    [0,   1,    1,   0,   1,   1,    0], // Jack
    [0,   0,    0,   0,   0,   0,    0], // Doug
    [0,   0,    0,   0,   0,   0,    0], // Harry
    [0,   0,    0,   1,   0,   0,    0], // Howard
];

// create an index map for conver 'name' -> 'index'
const  indexMap = people.reduce((acc, friend, idx) => {
    acc[friend] = idx;
    return acc;
}, {});

function printFriendMatrix(friend) {
    const friendIndex = indexMap[friend];
    // If the friend is not found in the index map
    if (friendIndex === undefined) {
        console.log(`${friend} is not in the network`);
        return;
    }

    // If found, check their connections in the adjacency matrix
    const res = [];
    for (let i = 0; i < friendMatrix[friendIndex].length; i++) {
        if (friendMatrix[friendIndex][i] === 1) { // Check if there's a connection (1)
            res.push(people[i]); // Add the friend's name to the result array
        }
    }

    // print res
    if (res.length <= 0) {
        console.log(`${friend} has no friends.`);
    } else {
        console.log(`Friend(s) of ${friend}: ${res.join(", ")}`);
    }
}

console.log('**MATRIX**')
printFriendMatrix('jack');   
printFriendMatrix('howard'); 
printFriendMatrix('harry');  
