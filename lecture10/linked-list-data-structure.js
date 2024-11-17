class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length =0;
    }

    insert(element) {
        const temp = new Node(element);
        if(this.head === null) {
            this.head = temp;
        }
        else {
            let currentNode = this.head;
            while(currentNode.next !== null){
                currentNode = currentNode.next;
            }
            currentNode.next = temp;
        }
        this.length++;
    }

    delete(element) {
        let currentNode = this.head
        let previousNode;
        
        //if the 1st node is the element to delete
        //pint the head to the 2nd node 
        if(currentNode.data === element){
            this.head =currentNode.next;
        }
        else{
            while(currentNode.data !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            //found, link 'next' of prev node to the next node
            // it mean jump through the node u want to remove
            previousNode.next = currentNode.next;
        }
        this.length--;
    }

    //search
    search(element) {
        let currentNode = this.head
        while(currentNode && currentNode.data !== element){
            currentNode = currentNode.next;
        }
        
        return currentNode;
    }

   
}
const mylist = new LinkedList()
console.log(mylist)

//insert
mylist.insert('a')
console.log(mylist)
mylist.insert('b')
console.log(mylist)

//delete
console.log('---after delete---')
mylist.delete('a')
console.log(mylist)

//search
mylist.insert('c')
mylist.insert('d')
mylist.insert('e')
console.log(mylist.search('e')) // return a node
console.log(mylist.search('f')) // return null if not found



