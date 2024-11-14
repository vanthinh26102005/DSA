// build stack-data structure

class Stack {
    constructor() {
        this.stack = []
    }
    // add data to stack, O(1)
    push(val) {
        this.stack.push(val)
        return val
    }
    // remove data from stack, O(1)
    pop() {
        return this.stack.pop()
    }
    // size O(1)
    size() {
        return this.stack.length
    }
    
    //see element on the top of stack, O(1)
    peek() {
        return this.stack[this.stack.length-1]
    }

    //see all data in stack, O(1)
    print() {
        console.log(this.stack)
    }
}

//create
const stack = new  Stack()
//console.log(stack.push(1));
stack.print();

//insert
console.log('-------INSERT--------')
stack.push(1);
stack.print();
stack.push(2);
stack.print();
stack.push(3);
stack.print();

//delete
console.log('-------DELETE--------')
console.log(stack.pop())
stack.print()

//peak
console.log('-------PEAK--------')
console.log(stack.peek())

//size
console.log('-------SIZE--------')
console.log(stack.size())