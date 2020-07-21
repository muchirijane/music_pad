//////*************************************************************************** */
//Submit Events
// const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

// form.addEventListener('submit', e =>{
//     e.preventDefault();
//     //console.log(username.value);
//     console.log(form.username.value);
// });

//////*************************************************************************** */
//TESTING REGULAR EXPRESSION PATTERNS

// const username = 'shaunpp';
// const pattern = /^[a-z]{6,}$/;

// //let result = pattern.test(username);
// //console.log(result);

// // if(result){
// //     console.log('regx test passed :)');
// // }else{
// //     console.log('regx test failed :(');
// // }

// let result = username.search(pattern);
// console.log(result);

//////*************************************************************************** */
//FORM VALIDATION

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
let usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e =>{
    e.preventDefault(); //prevents the browser default refreshing state

    //validation
    const username = form.username.value;


    if(usernamePattern.test(username)){
        feedback.textContent = 'the username is valid';
    }else{
        feedback.textContent = 'the username must contain letters only with characters between 6-12 letters';
    }
});

//LIVE UPDATE

form.username.addEventListener('keyup', e =>{
    //console.log(e);
   if(usernamePattern.test(e.target.value)){
       form.username.setAttribute('class', 'success')
   }else{
       form.username.setAttribute('class', 'error');
   }
});