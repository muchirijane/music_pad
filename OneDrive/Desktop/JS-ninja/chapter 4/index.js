//FUNCTION DELARATION
/*
function greet(){
    console.log('Hello there');
}

greet();

//FUNCTION EXPRESSION

const speak = function (){
    console.log('Good day, Boss Lady');
};

speak();
*/

/*
//arguments & parameters

const speak = function (name = 'Shaun', time = 'Morning'){
    console.log(`Good ${time}, ${name}`);
};

speak();
speak('Tracy', 'Night');
*/

/*
//RETURNING VALUES

const calcArea = function(radius){
    let area = 3.14 * radius**2;
    return area;
    //return 3.14 * radius**2;
};

const area = calcArea(13);
console.log(area);
*/

//ARROW FUNCTION

// const calcArea = (radius) => {
//     return 3.14 * radius**2;
// };

// const calcArea = radius => 3.14 * radius**2;

// const area = calcArea(13);
// console.log('The area is ',area);

// const great = () =>   'Hello World';

// console.log(great());

/*
const bill = (products, tax) => {
    let total = 0;

    for(let i = 0; i < products.length; i++ ){
        total =+ products[i] + products[i]* tax;
    }
    return total;
};

let totalBill = bill([20, 30, 40], 2);
console.log(totalBill);
*/
/*
// FUNCTIONS VS METHODS

//METHODS = they are functions associated with an object or data type

const name = 'Shaun';

const great = () => 'Hello world';
let result = great();
console.log(result);

console.log(name.toUpperCase());
*/

//CALLBACKS AND FOREACH METHOD

//Callback = A callback function is a function passed into another function as an argument, 
//which is then invoked inside the outer function to complete some kind of routine or action.

/*
const myFunc = (callbackFunc) =>{
    //do something

    let value = 50;
    callbackFunc(value);
};

myFunc(function(value){
    //do something

    console.log(value);
});

const myFunc = (callbackFunc) =>{
    //do something

    let value = 50;
    callbackFunc(value);
};

myFunc((value) =>{
    //do something

    console.log(value);
});
*/
/*
let people = ['Shaun', 'Luigi', 'Joey', 'Charlie', 'Chun-li', 'Tracy'];

people.forEach(function(person, index){
    console.log(`${index}: Hello ${person}`);
});
*/

//Foreach = requires a callback as a value

/*
let people = ['Shaun', 'Luigi', 'Joey', 'Charlie', 'Chun-li', 'Tracy'];

people.forEach((person, index) =>{
    console.log(`${index}: Hello ${person}`);
});
*/
/*
let people = ['Shaun', 'Luigi', 'Joey', 'Charlie', 'Chun-li', 'Tracy'];

let logPerson = (person, index) => {
    console.log(`${index}: Hello ${person}`);
};
people.forEach(logPerson);
*/

//CALLBACK FUNCTIONS IN ACTION
/*
const ui = document.querySelector('.people');

const people = ['Shaun', 'Luigi', 'Joey', 'Charlie', 'Chun-li', 'Tracy'];

let html = ``;

people.forEach(function(person){
   html += `<li style="color: #292929;">${person}</li>`; 
});

console.log(html);

ui.innerHTML = html;
*/
//ARROW FUNCTION
// const ui = document.querySelector('.people');

// const people = ['Shaun', 'Luigi', 'Joey', 'Charlie', 'Chun-li', 'Tracy'];

// let html = ``;

// people.forEach((person)=>{
//    html += `<li style="color: #292929;">${person}</li>`; 
// });

// console.log(html);

// ui.innerHTML = html;

// const greetings =  (name='Tracy', learn='Javascript') =>{

//     console.log(`Hello, ${name}, go learn ${learn}`);
// }

// greetings();

// const calcArea = radius =>{
//     let area = 3.14 * radius **2;
//     return area;
// }

// const area = calcArea(34);
// console.log(area);

// const dream = (goals) =>{
//     let goal = 'Be rich and live In California';
//     goals(goal);
// }

// dream = (future) =>{
//     console.log(future);
// }

var a = 20;

var b = function(){
    
    var a = 21;
    console.log(a);
}

b();



