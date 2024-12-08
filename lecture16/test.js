// Adjacency List
const subList = {
    "CS 1101": ["CS 1102"],
    "CS 1102": ["CS 1103", "CS 2203"],
    "CS 1103": ["CS2301", "CS 3303", "CS1104", "CS2205", "CS2401", "CS4402"],
    "CS 2203": ["CS 3306"],
    "CS 3306": [""],
    "CS 2301": ["CS 3307"],
    "CS 3307": [""],
    "CS 3303": ["CS 3304", "CS 3308"],
    "CS 3308": [""],
    "CS 3304": ["CS 4406", "CS 4407"],
    "CS 4407": ["CS 4408"],
    "CS 4408": [""],
    "CS 1104": ["CS 2204"],
    "CS 2204": ["CS 4404"],
    "CS 4404": [""],
    "CS 2205": ["CS 4405", "CS 3305"],
    "CS 4405": [""],
    "CS 3305": [""],
    "CS 2401": ["CS 4403"],
    "CS 4403": [""],
    "CS 4402": [""],
};

// Helper function to normalize course codes
function normalizeCourseCode(course) {
    return course.trim().replace(/^CS(\d+)/, "CS $1");
}

// Step 1: Normalize the adjacency list
const normalizedSubList = {};
for (const [key, values] of Object.entries(subList)) {
    const normalizedKey = normalizeCourseCode(key);
    normalizedSubList[normalizedKey] = values.map(normalizeCourseCode);
}

// Step 2: Get all unique nodes
const nodes = Array.from(
    new Set(
        Object.keys(normalizedSubList).concat(
            ...Object.values(normalizedSubList).flat()
        )
    )
).filter(Boolean); // Removes empty strings

// Step 3: Initialize the adjacency matrix
const matrix = Array(nodes.length)
    .fill(0)
    .map(() => Array(nodes.length).fill(0));

// Step 4: Fill the adjacency matrix
nodes.forEach((node, i) => {
    if (normalizedSubList[node]) {
        normalizedSubList[node].forEach((neighbor) => {
            const j = nodes.indexOf(neighbor);
            if (j !== -1) {
                matrix[i][j] = 1;
            }
        });
    }
});

// Step 5: Display the result
console.log("Nodes:", nodes);
console.log("Adjacency Matrix:");
matrix.forEach((row) => console.log(row.join(" ")));
