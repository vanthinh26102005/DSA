/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {

    // list visted room
    let visited = new Set()             // Time: O(1), Space: O(n)

    const dfs = (room) =>{              // Time: O(n), Space: O(n) recursive call stack
        // flag
        if(visited.has(room)) return;   // Time: O(1), Space: O(1)
        visited.add(room);              // Time: O(1), Space: O(1)

        // get key from room and continue find
        for(let key of rooms[room]) {   // Time: O(n), Space: O(n)
            dfs(key);
        }
    }
    dfs(0);

    // if number of visited room = all rooms we have => return true
    return visited.size === rooms.length;   // Time: O(1), Space: O(1)

};

console.log(canVisitAllRooms([[1], [2], [3], []]))
console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]))
