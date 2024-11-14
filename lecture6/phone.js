const phoneBook = new Map();

// Add entries to the phonebook
phoneBook.set('Van Thinh', '0123321123');
phoneBook.set('PhanPhuong', '0234324324');
phoneBook.set('Dinh Hung', '0113114115');
phoneBook.set('Dinh Hung', '0113114112');

console.log(phoneBook)
// Retrieve phone number
const firstName = 'PhanPhuong';
const phoneNumber = phoneBook.get(firstName);
console.log(`Phone number for ${firstName}: ${phoneNumber}`);
