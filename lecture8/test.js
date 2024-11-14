class TicketSystem {
    constructor(totalTickets) {
        this.totalTickets = totalTickets;
        this.soldTickets = 0;
        this.queue = [];
    }

    // Function to handle a ticket request
    requestTicket(userId) {
        if (this.soldTickets < this.totalTickets) {
            // If tickets are still available, add user to the queue
            this.queue.push(userId);
            return `Request received. Processing... ${userId} `;
        } else {
            // Tickets sold out
            return "Tickets sold out.";
        }
    }

    // Process ticket requests in FIFO order
    processRequests() {
        while (this.queue.length > 0 && this.soldTickets < this.totalTickets) {
            const userId = this.queue.shift(); // FIFO: process the first in line
            console.log(`Ticket confirmed for : ${userId}`);
            this.soldTickets++;
        }

        // If queue has requests left after tickets are sold out
        if (this.soldTickets >= this.totalTickets) {
            this.queue.forEach(userId => {
                console.log(`Sorry, User: ${userId} - Tickets sold out.`);
            });
            this.queue = []; // Clear remaining requests
        }
    }
}

// Example Usage
const totalTickets = 30;
const ticketSystem = new TicketSystem(totalTickets);

// Simulating a million users trying to buy tickets
for (let i = 1; i <= 30; i++) {
    const result = ticketSystem.requestTicket(`User${i}`);
    if (i % 1 === 0) console.log(result); // Output sample responses
}

// Process all requests and issue tickets or sold-out messages
ticketSystem.processRequests();

for (let i = 31; i <= 36; i++) {
    const result = ticketSystem.requestTicket(`User${i}`);
    if (i % 1 === 0) console.log(result); // Output sample responses
}
ticketSystem.processRequests();
