class Stack {
    constructor(name) {
        this.stack = [];
        this.name = name;
    }

    push(val) {
        this.stack.push(val)
        return val
    }

    pop() {
        if (!this.isEmpty()) {
            return this.stack.pop();
        }
        return null;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.stack[this.stack.length - 1];
        }
        return null;
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    toString() {
        return `${this.name}: [${this.stack.join(', ')}]`;
    }
}

function moveDisks(col1, col2) {

    if (col1.isEmpty()) {                                                           //Time: 1  ; Space: 1
        const disk = col2.pop();                                                    //Time: 1  ; Space: 1
        col1.push(disk);                                                        
        console.log(`Move disk ${disk} from ${col2.name} to ${col1.name}`)          //Time: 1  ; Space: 1        
    }

    else if (col2.isEmpty()) {                                                      //Time: 1  ; Space: 1
        const disk = col1.pop();                                                    //Time: 1  ; Space: 1
        col2.push(disk);                                                            //Time: 1  ; Space: 1
        console.log(`Move disk ${disk} from ${col1.name} to ${col2.name}`)          //Time: 1  ; Space: 1
    }

    else if (col1.peek() < col2.peek()) {                                           //Time: 1  ; Space: 1
        const disk = col1.pop();                                                    //Time: 1  ; Space: 1
        col2.push(disk);                                                            //Time: 1  ; Space: 1        
        console.log(`Move disk ${disk} from ${col1.name} to ${col2.name}`)          //Time: 1  ; Space: 1        
    }
    else {
        const disk = col2.pop();                                                    //Time: 1  ; Space: 1            
        col1.push(disk);                                                            //Time: 1  ; Space: 1
        console.log(`move disk ${disk} from ${col2.name} to ${col1.name}`)          //Time: 1  ; Space: 1
    }
}

function handle(n) {

    // create 3 tower
    const source = new Stack('A');                     // Time : 1   ;  Space: 1             
    const help = new Stack('B');                       // Time : 1   ;  Space: 1                      
    const target = new Stack('C');                     // Time : 1   ;  Space: 1         

    // initialize source    
    for (let i = numberOfDisks; i > 0; i--) {          // Time : n   ;  Space: n         
        source.push(i);                                // Time : n   ;  Space: n
    }

    const tototalMoves = Math.pow(2, n) - 1;           // Time : 1   ;  Space: 1              
    // ood/even problem:
    let [helpCol, targetCol] = n % 2 === 0             // Time : 1   ;  Space: 1                 
    ? [target, help] : [help, target];                      

    for (let i = 1; i <= tototalMoves; i++) {          //Time : 2^n-1;  Space: 1                     
        console.log(`After  ${i}th move:`)             // Time : 1   ;  Space: 1                 

        if (i % 3 === 1) {                             // Time : 1   ;  Space: 1
            //source -> target
            moveDisks(source, targetCol)               // Time : 1   ;  Space: 1     
        }
        else if (i % 3 === 2) {                        // Time : 1   ;  Space: 1      
            //source -> help
            moveDisks(source, helpCol)                 // Time : 1   ;  Space: 1 
        }
        else {
            // help -> target
            moveDisks(helpCol, target)                  // Time : 1   ;  Space: 1    
        }
        // Print our current tower after each move
        console.log(source.toString());                 // Time : 1   ;  Space: 1        
        console.log(helpCol.toString());                // Time : 1   ;  Space: 1    
        console.log(targetCol.toString());              // Time : 1   ;  Space: 1            
    }
                                            // Total: ----------------------------
                                                    //Time: (2^n-1)+16; //Space:2n+15
}

const numberOfDisks = 3;
handle(numberOfDisks)