//creating object literals
/*
let user = {
    name: 'Tracy',
    age: 24,
    email: 'tracyjane@gmail.com',
    location: 'California',
    blogs: ['Learning JS with Net Ninja', 'Getting a software developer job with no degree']
};

let result = user.location;
console.log(result);

user.age = 18;
console.log(user.age);

console.log(user ['name']);

user['name'] = 'Jane';
console.log(user['name']);
*/
// user['age'] = 20;

// console.log(user['age']);

// console.log(user['location']);

// console.log(typeof user);


//This keyword
/*
let user = {
    name: 'Tracy',
    age: 24,
    email: 'tracyjane@gmail.com',
    location: 'California',
    blogs: ['Learning JS with Net Ninja', 'Getting a software developer job with no degree'],
    login: function(){
        console.log('You are logged in');
    },
    logout: function(){
        console.log('You are logged out');
    },
    logBlogs: function(){
        console.log('The user has written the following blogs: ');
        this.blogs.forEach(blog =>{
            console.log(blog);
        });
    }
    // wholeObject(){
    //     console.log(this);
    // }
};
//console.log(user.wholeObject());
user.logBlogs();

//console.log(this);
*/


//Object in arrys

// const blogs = [
//     {title: 'Learning JS with Net Ninja', likes: 30},
//     {title: 'Getting a software developer job with no degree', likes: 50}
// ];
// console.log(blogs);
/*
let user = {
    name: 'Tracy',
    age: 24,
    email: 'tracyjane@gmail.com',
    location: 'California',
    blogs: [
        {title: 'Learning JS with Net Ninja', likes: 30},
        {title: 'Getting a software developer job with no degree', likes: 50}
    ],
    login: function(){
        console.log('You are logged in');
    },
    logout: function(){
        console.log('You are logged out');
    },
    logBlogs: function(){
        console.log('The user has written the following blogs: ');
        this.blogs.forEach(blog =>{
            console.log(blog.title, blog.likes);
        });
    }
};

user.logBlogs();
*/

//MATH OBJECT

//console.log(Math);

//console.log(Math.PI);

//console.log(Math.E);

const area = 7.3;

//console.log(Math.random(area));

//console.log(Math.round(area)); // rounds off to nearest number
//console.log(Math.floor(area)); // rounds off to the lowest number
//console.log(Math.ceil(area)); // rounds off to the biggest number
//console.log(Math.trunc(area)); // removes a decimal in a interger and returns the whole number

const randomNumber = Math.random();

//console.log(randomNumber);

console.log(Math.round(randomNumber * 100));

let user = {
    name: 'Tracy',
    age: 24,
    email: 'tracyjane@gmail.com',
    location: 'California',
    blogs: ['Learning JS with Net Ninja', 'Getting a software developer job with no degree'],
    login: function(){
        console.log('You are logged in');
    },
    logout: function(){
        console.log('You are logged out');
    },
    logBlogs: function(){
        console.log('The user has written the following blogs: ');
        this.blogs.forEach(blog =>{
            console.log(blog);
        })
    }
};

user.logBlogs();