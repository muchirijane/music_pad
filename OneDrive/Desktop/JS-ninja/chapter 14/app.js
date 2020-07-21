// //Store data in local storage

// localStorage.setItem('name', 'Jane');
// localStorage.setItem('age', 50);

// //get data from local storage
// let name = localStorage.getItem('name');
// let age = localStorage.getItem('age');

// console.log(name, age);

//  localStorage.setItem('name', 'James');

// //name = localStorage.getItem('name');

// localStorage.name = ('Charlie');
// localStorage.age = 20;

// name = localStorage.getItem('name');
// age = localStorage.getItem('age');

// console.log(name, age);

//deleting data from the local storage

// localStorage.removeItem('name'); // removes one item



// localStorage.clear(); // removes all items
// name = localStorage.getItem('name');
// age = localStorage.getItem('age');


// console.log(name, age);

//stringifying and parsing data

const todos = [
    {"Text": "The intelligent investor", "author": "luigi"},
    {"Text": "The Rich dad Poor dad",    "author": "luigi"},
    {"Text": "Emotinal Intelligence",    "author": "luigi"}
];

console.log(JSON.stringify(todos));

localStorage.setItem(todos, JSON.stringify(todos));

const stored = JSON.stringify(todos);

console.log(JSON.parse(stored));