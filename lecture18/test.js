let a = [];

a.push(1);
a.push(2);
a.push(3);
a.push(4);

let b = a.slice().reverse(); // Reverse a copy of array `a`
console.log(a.slice())
console.log(a); // Original array remains unchanged
console.log(b); // Reversed array
