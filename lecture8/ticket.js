class TicketSystem {
    constructor(totalTickets) {
        this.totalTickets = totalTickets;
        this.soldTickets = 0;
        this.queue = [];
    }

    enqueue(val) {
        this.queue.push(val);
        return val;
    }

    dequeue() {
        return this.queue.shift();
    }

    // Handle ticket request
    request(user) {
        // If we still have tickets left -> push user to the queue
        if (this.soldTickets < this.totalTickets) {
            this.enqueue(user);
            return "Accept. Processing...";
        } else {
            // If sold out
            return "Disaccept. SOLD OUT!";
        }
    }

    // Processing request
    process() {
        while (this.queue.length > 0 && this.soldTickets < this.totalTickets) {
            const id = this.dequeue(); // FIFO
            console.log(`${id} is confirmed`);
            this.soldTickets++;
        }

        // If tickets are sold out, notify remaining users in the queue
        if (this.soldTickets >= this.totalTickets && this.queue.length > 0) {
            this.queue.forEach(id => {
                console.log(`Sorry ${id} - Tickets sold out!`);
            });
        }

        this.queue = []; // Clear queue
    }
}

// const totalTickets = 40000;
// const TS = new TicketSystem(totalTickets);

// // Handle 1 million users
// for (let i = 1; i <= 1000000; i++) {
//     const res = TS.request(`User${i}`);
//     if (i % 250000 === 0) console.log(res);
// }
// TS.process();

// Example Usage
const totalTickets2 =5;
const ticketSystem = new TicketSystem(totalTickets2);

// Simulating a million users trying to buy tickets
for (let i = 1; i <= 10; i++) {
    const result = ticketSystem.request(`User${i}`);
    if (i % 1 === 0) console.log(result); // Output sample responses
}

// Process all requests and issue tickets or sold-out messages
ticketSystem.process();

// for (let i = 6; i <= 10; i++) {
//     const result = ticketSystem.request(`User${i}`);
//     if (i % 1 === 0) console.log(result); // Output sample responses
// }
// ticketSystem.process();
