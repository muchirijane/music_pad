/***********************Async in action ***************************** */

// console.log(1);
// console.log(2);

// // setInterval(() =>{
// //     console.log('This is a callback function');
// // }, 2000);

// console.log(3);
// console.log(4);

// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () =>{
//     console.log(request, request.readyState);
// })

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');

// request.send();

/***********************response status ***************************** */

// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {
//    //console.log(request, request.readyState);

//    if(request.readyState === 4  && request.status === 200){
//        console.log(request, request.responseText);
//    }else if(request.readyState === 4){
//        console.log('Could not fetch the data');
//    }
  
// });

// request.open('GET', 'https://jsonplaceholder.typicode.com/todoss/');
// request.send();

// /***********************Callback function ***************************** */

// const getTodos =  (callback) =>{

//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//     //console.log(request, request.readyState);

//     if(request.readyState === 4  && request.status === 200){
//    
//         callback(undefined, request.responseText);
//     }else if(request.readyState === 4){
//         callback('The data couldn\'t be found', undefined);
//     }

//     });

//     request.open('GET', 'https://jsonplaceholder.typicode.com/todoss/');
//     request.send();
// }
// console.log(1);
// console.log(2)

// getTodos((err, data) => {
//     console.log('callback fired');
//     // console.log(err, data);

//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });

// console.log(3);
// console.log(4);


// /*********************** JSON DATA ***************************** */

// const getTodos =  (callback) =>{

//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//     //console.log(request, request.readyState);

//     if(request.readyState === 4  && request.status === 200){
//         const data = JSON.parse(request.responseText);
//         callback(undefined, data);
//     }else if(request.readyState === 4){
//         callback('The data couldn\'t be found', undefined);
//     }

//     });

//     request.open('GET', 'todos.json');
//     request.send();
// }
// console.log(1);
// console.log(2)

// getTodos((err, data) => {
//     console.log('callback fired');
//     // console.log(err, data);

//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });

// console.log(3);
// console.log(4);


// /*********************** CALLBACK HELL ***************************** */

// const getTodos =  (resource, callback) =>{

//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//     //console.log(request, request.readyState);

//     if(request.readyState === 4  && request.status === 200){
//         const data = JSON.parse(request.responseText);
//         callback(undefined, data);
//     }else if(request.readyState === 4){
//         callback('The data couldn\'t be found', undefined);
//     }

//     });

//     request.open('GET', resource);
//     request.send();
// }

// getTodos('todos/luigi.json', (err, data) => {
//     console.log(data);
//     // console.log(err, data);

//     getTodos('todos/mario.json', (err, data) =>{
//         console.log(data);

//         getTodos('todos/shaun.json', (err, data) =>{
//             console.log(data);
//         });
//     });
// });


/*********************** Promises ***************************** */

// const getTodos = (resource) => {

//     return new Promise((resolve, reject) => {
//       const request = new XMLHttpRequest();
  
//       request.addEventListener('readystatechange', () => {
    
//         if(request.readyState === 4 && request.status === 200){
//           const data = JSON.parse(request.responseText);
//           resolve(data);
//         } else if (request.readyState === 4){
//           reject('could not fetch the data');
//         }
    
//       });
      
//       request.open('GET', resource);
//       request.send();
//     });
  
// };

// getTodos('todos/luigi.json').then(data =>{
//     console.log('Promise resolved: ', data);
//     return getTodos('todos/mario.json');
// }).catch(err =>{
//     console.log('promise rejected: ', err);
// });

/*********************** Chaining Promises ***************************** */

// const getTodos = (resource) => {

//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
  
//       if(request.readyState === 4 && request.status === 200){
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4){
//         reject('could not fetch the data');
//       }
  
//     });
    
//     request.open('GET', resource);
//     request.send();
//   });

// };

// getTodos('todos/luigi.json').then(data =>{
//   console.log('Promise resolved 1: ', data);
//   return getTodos('todos/mario.json');
// }).then(data =>{
//   console.log('Promise resolved 2: ', data);
//   return getTodos('todos/shaun.json');
// }).then(data =>{
//   console.log('Promise resolved 3', data)
// }).catch(err =>{
//   console.log('promise rejected: ', err);
// });

//The fetch Api

// fetch('todos/luigi.json').then(response =>{
//   console.log('This is response:', response);
//   return response.json();
// }).then(data =>{
//   console.log(data);
// }).catch(err =>{ 
//   console.log('This is an error', err);
// });

//Async and Await

const getTodos = async () =>{

  const response = await fetch('todos/luigis.json');

  if(response !== 200){
    throw new Error('There is an error in getting the data');
  }

  const data = response.json();

  return data;

}

getTodos()
     .then(data => console.log('Resolved :', data))
     .catch(err => console.log(' Error: ',err.message));


const getTodos = async () =>{
  const response = await fetch('todos/luigi.json');

  if(response !== 200){
    throw new Error('this is an error message')
  }

  const data = response.json();

  return data;
}     

getTodos()
  .then(data =>{console.log('resolved: ', data)})
  .then(error =>{console.log('Error: ', error)});