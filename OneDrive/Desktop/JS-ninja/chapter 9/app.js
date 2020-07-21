// ******************  Filter Method   *****************************************

// const scores = [ 10, 20, 25, 30, 40, 50];

// const finalScore = scores.filter(score => {
//     return score > 20;
// } );

// console.log(finalScore);

// const users = [
//     {name: 'shaun', premium: true},
//     {name: 'yoshi', premium: false},
//     {name: 'mario', premium: false},
//     {name: 'chun-li', premium: true}
// ];

// // const userPremium = users.filter(user =>{
// //     return user.premium;
// // });

// const userPremium = users.filter(user => user.premium);
// console.log(userPremium);

// ******************  Map Method   *****************************************

// const prices = [ 10, 20, 25, 30, 40, 50, 60, 80];

// // const finalPrice = prices.map(price =>{
// //    return price/2;
// // });

// const finalPrice = prices.map(price => price/2);

// console.log(finalPrice);


// const products = [
//     {name: 'gold star', price: 20},
//     {name: 'mushroom', price: 40},
//     {name: 'green shells', price: 30},
//     {name: 'banana skin', price: 10},
//     {name: 'red shells', price: 50}
// ];

// const finalProduct = products.map(product => {
//     if(product.price > 20){
//         return {name: product.name, price: product.price / 2};
//     }else{
//         return product;
//     }
// });

// console.log(finalProduct);

// ******************  Reduce Method   *****************************************

// const scores = [ 10, 20, 25, 30, 40, 50, 60, 80, 90];

// const finalScore = scores.reduce((acc,curr) =>{
//     if(curr > 50){
//         acc++;
//     }
//     return acc;
// }, 0);

// console.log(finalScore);

// const scores = [
//     {player: 'mario', score: 50},
//     {player: 'yoshi', score: 30},
//     {player: 'mario', score: 70},
//     {player: 'crystal', score: 60},
//     {player: 'mario', score: 50},
//     {player: 'yoshi', score: 30},
//     {player: 'mario', score: 70},
//     {player: 'crystal', score: 60},
//     {player: 'mario', score: 50},
//     {player: 'yoshi', score: 30},
//     {player: 'mario', score: 70},
//     {player: 'crystal', score: 60}
// ];

// const finalScore = scores.reduce((acc, curr) =>{
//     if(curr.player === 'mario'){
//         acc += curr.score; //360
//         //acc++; // 6
//     }
//     return acc;
    
// }, 0)

// console.log(finalScore);

// ******************  Find Method   *****************************************

// const scores = [ 10, 20, 25, 30, 40, 50, 60, 80, 90];

// const finalScore = scores.find(score =>{
//     return score > 50;
// });

// console.log(finalScore);

// ******************  Sort Method   *****************************************

// const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

// //names.sort();
// names.reverse();
// console.log(names);

// const scores = [10, 50, 20, 5, 35, 70, 45];

// // scores.sort();
// scores.reverse();
// console.log(scores);

// const players = [
//     {name: 'mario', score: 20},
//     {name: 'luigi', score: 10},
//     {name: 'chun-li', score: 50},
//     {name: 'yoshi', score: 30},
//     {name: 'shaun', score: 70}
// ];

// players.sort((a,b) =>{
//     if(a.score > b.score){
//         return -1;
//     }else if(b.score > a.score){
//         return 1;
//     }else{
//         return 0;
//     }
// });

// players.sort((a,b) =>{
//     return a.score - b.score;
// });

//players.sort((a,b) => a.name.localeCompare(b.name)); // a-z names 

//console.log(players);

// ******************  chaining Method   *****************************************

// const products = [
//     {name: 'gold star', price: 30},
//     {name: 'green shell', price: 10},
//     {name: 'red shell', price: 40},
//     {name: 'banana skin', price: 5},
//     {name: 'mushroom', price: 50}
// ];

// // const filtered = products.filter(product =>{
// //     return product.price > 20;
// // });

// // const finalProduct = filtered.map(product =>{
// //     return `The ${product.name} is ${product.price / 2}`;
// // });


// const finalProduct = products
//     .filter(product => product.price > 20)
//     .map(product => `The ${product.name} is ${product.price / 2} pounds` );
// console.log(finalProduct);

// ******************  practice   *****************************************

// var animals = [
//     {name: 'fluffykins',  species: 'rabbit'},
//     {name: 'Caro',        species: 'dog'},
//     {name: 'Hamliton',    species: 'dog'},
//     {name: 'Ursula',      species: 'cat'},
//     {name: 'jimmy',       species: 'fish'}
// ];

// const animalCategory = animals.map(animal => `${animal.name} is a ${animal.species}`);

// console.log(animalCategory);

var orders = [
    {amount: 250},
    {amount: 550},
    {amount: 350},
    {amount: 200},
];

const total = orders.reduce((sum, order) =>{
     sum += order.amount;
     return sum++;
}, 0);

console.log(total);