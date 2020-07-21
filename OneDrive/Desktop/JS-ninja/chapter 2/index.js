/*
//variable used to store values

let age = 25;
let year = 2020;
console.log(age, year);

age = 30;
console.log(age);

//const creates a variable that doesn't change it's value or be overidden at any poin of the program.

const points = 200;
console.log(points);

var score = 75; // old way of writing a variable
console.log(score);

// THE DON'T OF VARIABLE
// variable can start with letters, underscores(_) or dollar sign ($) but not numbers or reserved js keywords like  let or const

*/

/*
Data types

1) Number :   1, 2, 3,, 4.5
2) string : 'hello word' "janemuchiri33@gmail.com"
3) Boolean: true or false
4) Null -  set it to a variable to say that it has no value 
5) Undefined -  Given to variables that have not yet been defined
6) Object - have a complex data structures - Arrays, Dates, Literals
7) Symbol - Used with objects

*/

/*
//strings
console.log('hello world');

let email = 'muchirijane00@gmai.com';
console.log(email);

//string concatenation - joining two strings together
let firstName = 'Jane';
let lastName = 'Muthoni';
let fullName = firstName + ' ' + lastName;
console.log(fullName);


//getting characters
console.log(firstName[3]);

//string lenth  - getting to know the property of the variable
console.log(lastName.length);

//string method

console.log(fullName.toUpperCase());

let result = fullName.toLowerCase();
console.log(result);

console.log(email.indexOf('@')); // gets the positing number of the character in the string

*/

/*
//common string method

let email = 'janemuchiri@gmail.com';
//console.log(email.lastIndexOf('i')); //The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.
//console.log(email.indexOf('i'));

//let result = email.slice(0,5); //string.slice(start-from, end-to)

let result = email.substr(4,5); //string.substr(start, length)

//let result = email.replace('jane', 'tracy'); //string.replace(searchvalue, newvalue)

console.log(result);


//numbers

let radius = 10;
const pi = 3.14;

// math operators +, -, *, %, **
console.log(radius % 3);

//let result = pi * radius**2;

// order of operation =  B I M A S
let result = 5 * (10 - 3) **2;
console.log(result);
*/

/*
let likes = 10;
//likes++;
//likes--;
//likes = likes + 10;
//likes += 10;
//likes -= 5;
//likes *= 4;
//likes /= 23.9989;

// NaN = not a number
// console.log('jane' / 3);
//let result = 'I have spent ' + likes + ' months coding.';
console.log(result);
*/

 /*
//template strings
const title = 'Best reads of 2019';
const author = 'Jane';
const likes = 30;

//concatenantion way

//let result = 'The blog called ' + title + ' by ' + author + ' has ' + like + ' likes';
//console.log(results);

//template string way
//let result = `The blog called ${title} written by ${author} has ${likes} likes`;

//console.log(result);

//creating html templates

let html = `
   <h2> ${title}</h2>
   <p> ${author}</p>
   <span> This blog has ${likes} likes</span>
`;

console.log(html);
*/

//Arrays 
/*
let ninja = ['chun-li', 'Kiko', 'rya'];
/*
//console.log(ninja);
 ninja[1] = 'Jane';
*/
/*
//ARRAY MRTHODS

//let result = ninja.join(', ');
let result = ninja.concat(['Charlie', 'chase', 'Tayler', 'Addison']);
console.log(result);

*/

//Undefined and Null
//let age = null;
//result of undefined var = undefined NaN "The age is undefined"
// for null = null 2 "The age is null"
//console.log(age, age + 2, `The age is ${age}`);

//Boolean

//let email = 'muchirijane00@gmail.com';

//let result = email.includes('@');

/*
let age = 25;
//let result = age == 25; // == equal

//let result = age != 25; // != not equal

console.log(age < 20); // less than
console.log(age > 20);  // greater than
console.log(age <= 25);
console.log(age >= 25);
console.log(age == 20);
console.log(age !== 20);
*/
//Loose comparison
/*
console.log(age == 25);
console.log(age == '25'); // true = 25 =='25'
console.log(age != 25); //false
console.log(age != '25'); // false


//Strict comparison 
//console.log(age === 25);
//console.log(age === '25'); //false
//console.log(age !== 25); //false
//console.log(age != 25);
console.log(age !== '25'); //true
*/

//type conversion
// let score = '100';

// score = Number(score);
// console.log(typeof score);
// console.log(score + 1);

// let text = 100;
// text = String(text);
// console.log(text);
// console.log(typeof text);

// All positive and negative numbers are true values but 0 is a false value
//Below are explicit type conversion

//let result = Boolean(0);  //false
//let result = Boolean(-1); //true
//let result = Boolean(10); //true
//let result = Boolean('0'); //true = all strings are true booleans
let result = Boolean(''); // false
console.log(result);

