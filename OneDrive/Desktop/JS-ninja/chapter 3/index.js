//CONTROL FLOW 
/*
1) LOOP = REPEAT A SECTION OF CODE
2) CONDITIONAL STATEMENT = TO RUN A SECTION OF CODE BASED ON A CERTAIN CONDICTION
*/

/*
//FOR LOOP
for(let i = 0; i< 5; i++){  // INITIALIZATION VARIABLE ( let i= 0; ) CONDITION (i < 5) EXPRESSION (i++)
    console.log( 'In loop', i);
}
console.log('finished loop');


const names = ['Shaun', 'Leo', 'Joey'];

for(let i = 0; i < names.length; i++){
    //console.log(names[i]);

    let html = `<div>${names[i]}</div>`; // HTML TEMPLATE
    console.log(html);
}
*/

/*
//WHILE LOOP

let i = 0;
while(i < 5){
    console.log('In loop', i);
    i++;
}


const names = ['Shaun', 'Leo', 'Joey'];

let i = 0;

while(i < names.length){
    console.log(names[i]);
    i++;
}
*/

/*
// DO WHILE LOOP
//This loop will always be executed at least once, even if the condition is false,
 because the code block is executed before the condition is tested:
 
let i = 2;

do{
    console.log('var i is: ', i);
    i++;
} 
while(i < 5);

*/

// IF STATEMENTS
/*
const password = 'pass';

if(password.length >= 8){
    console.log('Your password is long enough');
}else{
    console.log('Your password is not long enough!');
}


const ninjas = ['shaun', 'rya', 'chun-li', 'lui'];

if(ninjas.length > 3){
    console.log('That\'s a lot of ninjas');
}else{
    console.log('You have less ninjas.')
}


const password = 'pass123heythere';

if(password.length >= 12){
    console.log('Your password is very strong')
}else if(password.length >= 8){
    console.log('Your password is long enough');
}else{
    console.log('Your password is not long enough!');
}
*/

/*
//LOGICAL OPERATORS
// They include  OR || and AND &&
// || if one of the condition is true
// && if all of the conditions is true

const password = 'passwordhey';

if(password.length >= 12 && password.includes('@')){
    console.log('Your password is very strong')
}else if(password.length >= 8 || password.includes('@') && password.length >= 5){
    console.log('Your password is long enough');
}else{
    console.log('Your password is not long enough!');
}
*/

//NOT LOGICAL OPPERATOR
/*
let user = false;

if(!user){
    console.log('You should log in to continue');
}

console.log(!true); //false
console.log(!false); //true


const scores = [50, 20, 0, 30, 100, 25, 80];

for(let i = 0; i < scores.length; i++){
    if(scores[i] === 0){
        continue;
    }
    console.log('Your scores is: ', scores[i]);
    
    if(scores[i] === 100){
        console.log('Congrats, you have won!!');
        break;
    }
}
*/

//SWITCH STATEMENT
/*
const grade = 'D';

if(grade === 'A'){

}else if(grade === 'B'){

}else if(grade === 'C'){
    
}else if(grade === 'D'){
    
}else if(grade === 'E'){
    
}else{

}
*/

/*
const grade = 'D';

switch(grade){
    case 'A' :
         console.log('You got an A!');
         break;
    case 'B' :
        console.log('You got an B!'); 
        break;
    case 'C' :
        console.log('You got an C!');  
        break;
    case 'D' :
        console.log('You got an D!'); 
        break;
    case 'E' :
        console.log('You got an E!'); 
        break;
    
     default:
         console.log('You haven\'t been graded yet');
}

*/
/*

let age = 30; // The global scope variable

if(true){
     //age = 40; // refers to the global scope variable

     let age = 40; // the local scope variable only available in the if statent  code block
    console.log('Intside the code block: ', age);

    if(true){
        let age = 50;
        console.log('Inside the code block 2: ', age);
    }
}

console.log('Outside the code block: ', age);
*/
/*
let grade = 'D';

switch(grade){
    case 'A' :
        console.log('You got an A!');
        break;
    case 'C' :
        console.log('You got a C');
        break;
    case 'D' : 
        console.log('You got a D');
        break; 
    default:
        console.log('Not a valid grade');           
}
*/