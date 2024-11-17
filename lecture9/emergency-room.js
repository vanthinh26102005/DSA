class EmergencyRoomQueue {
    constructor() {
        this.queue = []; // store [name, priority, waitTime]
    }

    // add patient to the queue - enqueue
    addPatient(name, priority) {
        this.queue.push([name, priority, 0]); // initialize waitTime = 0
        this.sortQueue();
    }

    // serve patient - dequeue
    servePatient() {
        if (this.queue.length === 0) {
            console.log("No patints to serve");
            return null;
        }
        return this.queue.shift(); //remove patient from our queue and return that patiten itself
    }
    // sort after changed queue (because priority has changed too)
    sortQueue() {
        this.queue.sort((a, b) => {
            if (a[1] === b[1]) { // if priority index is the same
                return b[2] - a[2]; // sort by waitingTime the more time , the more priority
            }
            return a[1] - b[1]; // the less priority, the more priorty
        });
    }

    //increase waitTime of all patients who are not being served
    increaseWaitTime() {
   
        for (let i = 1; i < this.queue.length; i++) {
            this.queue[i][2]++; // increase wait time of patient i
        }
        
    }
    //increase priority of patient on first queue
    increasePriority(){
        if(this.queue[0][2] > 0){ // waitTime > 0
            this.queue[0][1]++; // increase priority
        }
        this.sortQueue() 
    }
    print() {
        for(const [name,priority, waitTime] of this.queue) {
            console.log(`Name: ${name}, Priority: ${priority}, Wait: ${waitTime}`)
        }
    }
}




const erQueue = new EmergencyRoomQueue();
erQueue.addPatient("Alice", 1);
erQueue.addPatient("Bob", 0);
erQueue.addPatient("Charlie", 1);

console.log("Initial Queue:");
erQueue.print();

// Serve one patient
console.log("\nServing Patient:", erQueue.servePatient());

// Increase wait time and adjust priorities
erQueue.increaseWaitTime();
console.log("\nQueue After Wait Time Increase:");
erQueue.print();

// Add a new patient
erQueue.addPatient("Diana", 1);
console.log("\nQueue After Adding Diana:");
console.log("\nAfter Adding Diana but first Queue is Charlie has not served yet");
console.log("\nWe will increase priority")
erQueue.increasePriority();

erQueue.print();

// Serve one more patient
console.log("\nServing Patient:", erQueue.servePatient());
console.log("\nFinal Queue:");
erQueue.print();


