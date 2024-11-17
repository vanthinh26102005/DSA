const phoneBook = new Map();

// add a contact -> write
function addContact(firstName, phoneNumber) {
    if(phoneBook.has(firstName)) {
        //if firstName exist => add new number & duplicate names
        phoneBook.get(firstName),push(phoneNumber);
    }
    else {
        // createa a new one
        phoneBook.set(firstName, [phoneNumber]);
    }
}

//look up a contact -> read
function lookUpContact(firstName) {
    if(phoneBook.has(firstName)){
        return phoneBook.get(firstName)
    }
    else {
        return "No contact found.";
    }
}

// delete a contact -> delete
function deleteContact(firstName) {
    if(phoneBook.has(firstName)) {
        phoneBook.delete(firstName);
        return `${firstName} has been deleted`;
    }
    else {
        return "No contact found.";

    }
}
//test:

// Adding contacts
addContact("Thinh" , "0123456789");
addContact("Phan" , "0321321321");
addContact("Hung" , "0456455456");
console.log(phoneBook)
//lookup contacts
console.log(lookUpContact("Phan"));
console.log(lookUpContact("Thuy"));

//delete
console.log(deleteContact("Phan"));
console.log(deleteContact("Thuy"));




