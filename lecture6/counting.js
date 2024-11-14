const items = ['apple', 'banna', ' orange', 'banna', 'banna', 'apple']

const itemCount = new Map();

items.forEach(item => {
    if(itemCount.has(item)) {
        itemCount.set(item, itemCount.get(item) +1)
    }
    else {
        itemCount.set(item, 1);
    }
});

console.log(itemCount);


