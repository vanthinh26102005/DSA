const user1 = { id: 1, name: 'Alice' };
const user2 = { id: 2, name: 'Bob' };

const userSettings = new Map();

// use user1, user2 as a key
userSettings.set(user1, { theme: 'dark', language: 'en' });
userSettings.set(user2, { theme: 'light', language: 'fr' });

console.log(userSettings.get(user1));  // { theme: 'dark', language: 'en' }
console.log(userSettings.get(user2));  // { theme: 'light', language: 'fr' }
console.log(userSettings)