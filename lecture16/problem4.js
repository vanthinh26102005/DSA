//  Adjacency List
subList = {
    // PF
    "CS 1101": ["CS 1102"],
    "CS 1102": ["CS 1103", "CS 2203"],
    "CS 1103": ["CS 2301", "CS 3303", "CS 1104", "CS 2205", "CS 2401", "CS 4402"],
    // DB
    "CS 2203": ["CS 3306"],
    "CS 3306": [""],
    // OS
    "CS 2301": ["CS 3307"],
    "CS 3307": [""],

    //DSA
    "CS 3303": ["CS 3304", "CS 3308"],
    "CS 3308": [""],
    "CS 3304": ["CS 4406", "CS 4407"],
    "CS 3306": [""],
    "CS 4407": ["CS 4408"],
    "CS 4408": [""],

    // SN
    "CS 1104": ["CS 2204"],
    "CS 2204": ["CS 4404"],
    "CS 4404": [""],
    
    //WN
    "CS 2205": ["CS 4405", "CS 3305"],
    "CS 4405": [""],
    "CS 3305": [""],

    // SE
    "CS 2401": ["CS 4403"],
    "CS 4403": [""],

    //others
    "CS 4402": [""],

}
// Adjacency Matrix

//get all unique nodes
const nodes = Array.from(
    new Set(Object.keys(subList).concat(
        ...Object.values(subList).flat()
    ))
).filter(Boolean); //removes empty strings

//initialize the adjacency matrix
const matrix = Array(nodes.length)
    .fill(0)
    .map(() => Array(nodes.length).fill(0));

// fill the adjacency matrix
nodes.forEach((node, i) => {
    if (subList[node]) {
        subList[node].forEach((neighbor) => {
            const j = nodes.indexOf(neighbor);
            if (j !== -1) {
                matrix[i][j] = 1;
            }
        });
    }
});

// output
console.log("Nodes:", nodes);
console.log("Adjacency Matrix:");
matrix.forEach((row) => console.log(row.join(" ")));