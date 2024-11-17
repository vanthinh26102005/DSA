//build priority queue data structure
//naive approach:

class PriorityQueue {
    constructor() {
        this.queue = []
    }

    //add data to the queue, O(n)
    //using 'heap' datastructure will give O(logn)
    enqueque(element) {
        //queue is empty, add element immidiatly
        if (this.queue === 0) {
            return this.queue.push(element)
        }

        //queue is not empty
        //go through all existing element
        //add element right after existing element which has the same priority
        //1 is highest priority
        var added = false;
        for (let i = 0; i < this.queue.length; i++) {
            if (element[1] < this.queue[i][1]) {
                this.queue.splice(i, 0, element);
                added = true;
                break;
            }

        }
        if(!added) {
            this.queue.push(element)
        }
        return element
    }

    // remove first element in queue
    // Note O(n) with this implementation (for simplycity)
    // If we use `heap` data structure, we will have o(logn)
    dequeue() {
        return this.queue.shift()
    }

    // see queue size, O(1)
    size(){
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

//create a priority queue
const PQ = new PriorityQueue();

// initial
PQ.queue = [['a', 2], ['b', 5], ['c', 8]]
console.log('initial: ');
PQ.print();

//insert 
PQ.enqueque(['d',3])
PQ.enqueque(['e',4])
console.log('after insert: ');
PQ.print();

//delete - first priority go first
PQ.dequeue();
console.log('after delete: ');
PQ.print();

//peek
console.log('peek: ', PQ.peek());

//size()
console.log('size:', PQ.size());
