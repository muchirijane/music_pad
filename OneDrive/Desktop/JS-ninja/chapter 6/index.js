// USING QUERY SELECTORS
// const para = document.querySelector('.error');

// const para = document.querySelector('p');
// const paras = document.querySelectorAll('p');
// console.log(para);
// console.log(paras);
// const para = document.querySelector('body > h2');
// console.log(para);

//  const paras = document.querySelectorAll('p');
//  console.log(paras[0]);

// paras.forEach(para =>{
//    console.log(para);
// });

/////******************************************************************** */

//GET ELEMENT BY ID
// const title = document.getElementById('page-title');
// console.log(title);

//GET ELEMENTS BY THEIR CLASS NAME
// const error = document.getElementsByClassName('error');
// console.log(error);

/////******************************************************************** */

//GET ELEMTS BY THEIR TAG NAME

// const paras = document.getElementsByTagName('p');
// //console.log(paras);
// console.log(paras[2]);

//ADDING AND CHANGING PAGE CONTENT
//const para = document.querySelector('p');
// console.log(para.innerText);
//para.innerText += ' Ninjas are awesome!';
//console.log(para);


// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//    para.innerText += ' New text';
// })

//const content = document.querySelector('.content');
//console.log(content.innerHTML);

//content.innerHTML += `<h2> This is a new title</h2>`;
// const content = document.querySelector('.content');

// const people = ['Mario', 'Leo', 'Chun-li'];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// })

/////******************************************************************** ****************************/

//SETTING ATTRIBUTE AND GETTING ATTRIBUTE
// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://janemuchiri.com/');

// link.innerText = 'Check out my portfolio';

// const mssg = document.querySelector('p');

// mssg.getAttribute('class');
// mssg.setAttribute('style', 'color: orangered;');

// const img = document.querySelector('img');

// img.setAttribute('src', 'dot.jpg');

/////******************************************************************** ****************************/

//CHANGE CSS SYTLE

// const title = document.querySelector('h2');

// //title.setAttribute('style', 'margin: 40px;');

// title.style.margin = '50px';
// title.style.fontSize = '40px';
// title.style.color = 'crimson';

// // deleting a style
// title.style.margin = '';

// console.log(title.style);

/////******************************************************************** ****************************/

//HOW TO ADD AND REMOVE CLASSES

//const content = document.querySelector('p');

// content.classList.add('success');
// content.classList.remove('success');

// const paras = document.querySelectorAll('p');

// paras.forEach(para =>{
//     if(para.textContent.includes('success')){
//         para.classList.add('success');
//     }else if(para.textContent.includes('error')){
//         para.classList.add('error');
//     }
// })

/////******************************************************************** ****************************/

//PARENTS , CHILDREN , SIBLINGS

// const article = document.querySelector('article');

// console.log(article.children);
// console.log(Array.from(article.children));

// Array.from(article.children).forEach(child =>{
//     child.classList.add('child-element');
// })

//const title = document.querySelector('h2');

//console.log(title.parentElement);
// console.log(title.parentElement.parentElement);

// console.log(title.nextElementSibling);

// console.log(title.previousElementSibling);

//console.log(title.nextElementSibling.parentElement.children);

/////******************************************************************** ****************************/

//EVENT BASIC CLICK EVENTS
// const button = document.querySelector('button');

// button.addEventListener('click', () =>{
//     console.log('i have been clicked!!');
// })

// const items = document.querySelectorAll('li');

// items.forEach(item =>{
//     item.addEventListener('click', e => {
//         //console.log(e.target);
//         e.target.style.textDecoration = 'line-through';
//     });
// })

////******************************************************************** ****************************/

//CREATING AND REMOVING ELEMENTS
// const ul = document.querySelector('ul');
// const button = document.querySelector('button');

// button.addEventListener('click', () =>{
//    // ul.innerHTML += '<li>Added something new </li>';
//    const li = document.createElement('li');
//    li.textContent = 'Something new';
//    //ul.append(li); //adds at the bottom
//    ul.prepend(li); //adds the element at the top
// });

// const items = document.querySelectorAll('li');

// // items.forEach(item =>{
// //     item.addEventListener('click', e => {
// //         e.target.remove();
// //     })
// // })

// ul.addEventListener('click', e =>{
//     //console.log(e);
//     //e.target.remove();
//     if(e.target.tagName === 'LI'){
//         e.target.remove();
//     }
// });

////******************************************************************** ****************************/
//MORE DOM EVENTS

const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () =>{
    console.log('OI!! That\'s under copyright');
});

const box = document.querySelector('.box');

box.addEventListener('mousemove', e =>{
    box.textContent = `pos X - ${e.offsetX}, Pos Y - ${e.offsetY}`;
});

document.addEventListener('scroll', e =>{
    console.log(e);
    console.log(`The Pos X - ${e.pageX}, Pos Y - ${e.pageY}`);
});