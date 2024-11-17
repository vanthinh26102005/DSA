class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null; //pointer to the previos node
    }

}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //insert
    insert(element) {
        const temp = new Node(element);
        if (this.head === null) {
            this.head = temp;
            this.tail = temp;
        }
        else {
            this.tail.next = temp; // link new node to the list behind tail
            temp.prev = this.tail;  // link new node with the old tail
            this.tail = temp;      // update tail after insert
        }
        this.length++;
    }

    //delete
    delete(element) {
        if (this.head === null) return false;
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.data === element) {
                if (currentNode === this.head) {
                    this.head = currentNode.next;
                    // if head != null => upadte head.prev =null
                    if (this.head) this.head.prev = null; 
                }
                else if (currentNode === this.tail) {
                    this.tail = currentNode.prev;
                    if (this.tail) this.tail.next = null;
                }
                //in the middle
                else {
                    currentNode.prev.next = currentNode.next;
                    currentNode.next.prev = currentNode.prev;
                }
                this.length--;
            }
            currentNode = currentNode.next;
        }
    }

search(data) {
    let currentNode = this.head;
    while (currentNode) {
        if (currentNode.data === data) {
            return currentNode;
        }
        currentNode = currentNode.next;
    }
    return null;
}

//display the list in an array for testing
display() {
    let currentNode = this.head;
    const res = [];
    while (currentNode) {
        res.push(currentNode.data);
        currentNode = currentNode.next;
    }
    console.log(res);
}

}
// Example:
const list = new DoublyLinkedList();

// Insert elements
list.insert(10);
list.insert(20);
list.insert(30);
list.display(); // Output: [10, 20, 30]

// Search for a value
console.log(list.search(20)); // Output: Node with value 20
console.log(list.search(40)); // Output: null

// Delete a value
list.delete(20);
list.display(); // Output: [10, 30]

// Insert more elements
list.insert(40);
list.insert(50);
list.display(); // Output: [10, 30, 40, 50]

// Delete the head and tail
list.delete(10);
list.delete(50);
list.display(); // Output: [30, 40]