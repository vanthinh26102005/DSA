/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {

    // build adj list
    const graph = new Map();                            // Time: O(1), Space: O(n)
    const numberPre = new Array(numCourses).fill(0);    // Time: O(n), Space: O(n)
    // store course that need to done prereq
    // and count the number of prereq they ned
    for (let [course, prereq] of prerequisites) {       // Time: O(e), Space: O(e)
        if (!graph.has(prereq)) graph.set(prereq, []);  // Time: O(1), Space: O(1)
        graph.get(prereq).push(course)                  // Time: O(1), Space: O(1)
        numberPre[course]++;                            // Time: O(1), Space: O(1)
    }

    //stack  store course with no pre
    // => course in this stack if pop => done
    const noPreCourse = []                              // Time: O(1), Space: O(n)
    for (let i = 0; i < numCourses; i++) {              // Time: O(n), 
        if (numberPre[i] === 0) noPreCourse.push(i);    // Time: O(1), Space: O(1)
    }

    let count = 0; // store number of course are done
    let res = []
    while (noPreCourse.length > 0) {                    // Time: O(n)
        const course = noPreCourse.pop();                // Time: O(1), Space: O(1)
        res.push(course)
        count++;                                        // Time: O(1), Space: O(1)

        if (graph.has(course)) {
            // this course is done => if another course has this course
            // as its prereq course can be study
            for (let neighbor of graph.get(course)) {               // Time: O(e)
                numberPre[neighbor]--; // decrease numberPre        // Time: O(1), Space: O(1)
                if (numberPre[neighbor] === 0) { // if no more prereq courese => it can be done
                    noPreCourse.push(neighbor)                      // Time: O(1), Space: O(1)
                }
            }
        }
    }
    // if the number of courese === number of course are done -> return true
    return count === numCourses; 
};

console.log(canFinish(2, [[1, 0]]))
console.log(canFinish(2, [[1, 0], [0, 1]]))
console.log(canFinish(3, [[1, 0], [2, 1], [3, 2]]))