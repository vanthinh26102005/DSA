class queueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class queueList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // enqueue add 1 element to the end of list O(1) -> insert
    enqueue(element) {
        const temp = new queueNode(element)
        if (!this.head) {
            this.head = temp;
            this.tail = temp;
        }
        else {
            this.tail.next = temp;
            temp.prev = this.tail;
            this.tail = temp;
        }
        this.length++;
    }
    // dequeue: 1 element out of the queue O(1) -> delete
    dequeue() {
        if (!this.head) return null;
        const value = this.head.data;
        if (this.head) {
            this.head = this.head.next;
            this.head.prev = null;
        }
        else{
            this.head = null;
            this.tail = null;
        }
        this.length--;
        return value;
    }
    display() {
        let currentNode = this.head;
        const res = [];
        while(currentNode) {
            res.push(currentNode.data);
            currentNode = currentNode.next;
        }
        console.log(res);
    }
}

// Example:
const queue1 = new queueList();
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
queue1.display();


queue1.dequeue();
queue1.display();
