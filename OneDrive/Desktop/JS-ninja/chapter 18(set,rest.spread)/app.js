//rest parameter
//Helps to put all parameters inside a function in one array
const ageEntries = (...ages)=>{
   console.log(ages);
   //create a new array with double ages
   return ages.map(age => age * 3);
}

const results = ageEntries(18, 22, 24, 25, 26, 17, 28, 29, 30);
console.log(results);

//spread syntax (arrays)
//turns array components into individual values
const people = ['Jane', 'Shelly', 'Rico', 'Tom'];
const members = ['Mary', 'Luke', ...people];

console.log(...people);
console.log(members);

//spread syntax (objects)

const personDetails = {name: 'Jane', age: 30, job: 'programmer',};

const personDetails2 = {...personDetails, hobbies: 'cooking', movies: 'Harry Potter'};
                   
console.log(personDetails);
console.log(personDetails2);


//set
const nameArrays = ['Jane', 'Shelly', 'Rico', 'Tom', 'Jane'];
console.log(nameArrays);

const nameSet = new Set(nameArrays);
console.log(nameSet);

const nameSet2 = [...nameSet];
console.log(nameSet2);
const nameSet3 = [... new Set(nameArrays), 'John'];
console.log(nameSet3);

const ages = new Set();
ages.add(20);
ages.add(30).add(40);
ages.delete(40);
console.log(ages, ages.size);
console.log(ages.has(20), ages.has(40));

const entries = new Set([
   {name: 'Adam', age: 20 },
   {name: 'George', age: 20},
   {name: 'Paul', age: 40}
]);

entries.forEach(entry => {
   console.log(entry.name, entry.age);
})

//Symbol is a primitive type
//Can be used as keys or property names in objects
const symbolOne = Symbol(' my name is');
const symbolTwo = Symbol(' my name is');

console.log(symbolOne, typeof symbolOne);
console.log(symbolOne === symbolTwo);

const names = {}
names.first = 'Jane';
names['second'] = 'Rico';

names[symbolOne] = 'Angela';
names[symbolTwo] = 'Beyonce';

console.log(names);
