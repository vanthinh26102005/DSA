class Queue {
    constructor() {
        this.queue = []
    }
    //add data to the queue, O(1)
    enqueue(val) {
        this.queue.push(val)
        return val
    }
    dequeue() {
        return this.queue.shift()
    }

    // see queue size, O(1)
    size() {
        return this.queue.length
    }

    // see first element in line, O(1)
    peek() {
        return this.queue[0]
    }
    
    print() {
        console.log(this.queue)
    }
}

const queue = new Queue()

//insert
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print() 

// get first - delete
console.log(queue.dequeue())
queue.print() 

// see first - peek
console.log(queue.peek())

//size
console.log(queue.size())
