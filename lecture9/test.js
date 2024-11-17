class EmergencyRoomQueue {
    constructor() {
        this.queue = []; // Store patients as [name, priority, waitTime]
    }

    // Add a new patient to the queue
    addPatient(name, priority) {
        this.queue.push([name, priority, 0]); // Initialize with 0 wait time
        this._sortQueue();
    }

    // Serve the next patient (dequeue)
    servePatient() {
        if (this.queue.length === 0) {
            console.log("No patients to serve.");
            return null;
        }
        return this.queue.shift(); // Remove and return the first patient
    }

    // Increase the wait time of all patients who are not being served
    increaseWaitTime() {
        for (let i = 1; i < this.queue.length; i++) {
            this.queue[i][2]++; // Increment wait time
            if (this.queue[i][2] > 0 && this.queue[i][1] < 2) {
                this.queue[i][1]++; // Increase priority if below the cap
            }
        }
        this._sortQueue(); // Re-sort based on updated priorities
    }

    // Private method to sort the queue based on priority and then wait time
    _sortQueue() {
        this.queue.sort((a, b) => {
            if (a[1] === b[1]) {
                return b[2] - a[2]; // Sort by wait time if priorities are equal
            }
            return b[1] - a[1]; // Higher priority first
        });
    }

    // Display the queue for debugging purposes
    displayQueue() {
        console.log("Current Queue:");
        for (const [name, priority, waitTime] of this.queue) {
            console.log(`Name: ${name}, Priority: ${priority}, Wait Time: ${waitTime}`);
        }
    }
}

// Example usage
const erQueue = new EmergencyRoomQueue();
erQueue.addPatient("Alice", 1);
erQueue.addPatient("Bob", 0);
erQueue.addPatient("Charlie", 1);

console.log("Initial Queue:");
erQueue.displayQueue();

// Serve one patient
console.log("\nServing Patient:", erQueue.servePatient());

// Increase wait time and adjust priorities
erQueue.increaseWaitTime();
console.log("\nQueue After Wait Time Increase:");
erQueue.displayQueue();

// Add a new patient
erQueue.addPatient("Diana", 1);
console.log("\nQueue After Adding Diana:");
erQueue.displayQueue();

// Serve one more patient
console.log("\nServing Patient:", erQueue.servePatient());
console.log("\nFinal Queue:");
erQueue.displayQueue();
