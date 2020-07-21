// console.log(new String('tracy'));
// console.log(new Number(20));
// console.log(new Boolean(true));
// console.log(user ={});
// console.log(object());
//null and undefined don't have properties or methods
/*
const userOne = {
    username: 'ryu',
    email: 'ryu@gmail.com',
    login(){
        console.log('User logged in')
    },
    logout(){
        console.log('user logged out')
    }
}

console.log(userOne.username, userOne.email)

const userTwo = {
    username: 'chun-li',
    email: 'chunli@gmail.com',
    login(){
        console.log('User logged in')
    },
    logout(){
        console.log('user logged out')
    }
}

console.log(userTwo.username, userTwo.email)
*/

//cLASS CONSTRUCTORS
// const userThree = new User('shun@gmail.com', 'shun');

// console.log(userThree)
/*
class User {
    constructor (username, email){
        this.username = username,
        this.email = email
    }

}

const userOne = new User('Tracy', 'tracyninja@netninja.com');

console.log(userOne);
*/

/*
//*********************** *Class methods and method chaining ********************** /

class User {
    constructor (username, email){
        this.username = username,
        this.email = email,
        this.score = 0;
    }

    login(){
        console.log(`${this.username} has logged in.`);
        return this;
    }
    logout(){
        console.log(`${this.username} has logged out.`);
        return this;
    }

    incScore(){
        this.score ++;
        console.log(`${this.username} has scored ${this.score} points`)
        return this;
    }
}

const userOne = new User('Tracy', 'tracynetninja@netninja.com');

userOne.login().logout().incScore().incScore()
*/


//*********************************** */Class inheritance ****************************/

/*
class User {
    constructor (username, email){
        this.username = username,
        this.email = email,
        this.score = 0;
    }

    login(){
        console.log(`${this.username} has logged in.`);
        return this;
    }
    logout(){
        console.log(`${this.username} has logged out.`);
        return this;
    }

    incScore(){
        this.score ++;
        console.log(`${this.username} has scored ${this.score} points`)
        return this;
    }
}

class Admin extends User{
    deleteUser(user){
        users =  users.filter(u => u.username !== user.username)
    }
}

const userOne = new User('Tracy', 'tracynetninja@netninja.com');
const userTwo = new User('Jane', 'janenetninja@netninja.com');
const userThree = new Admin('Chun-li', 'chun;ininja@netninja.com');

let users = [userOne, userTwo, userThree]

userThree.deleteUser(userTwo);
console.log({users})

//console.log(userThree);

*/

//*********************************** SUPER () ****************************/


// class User {
//     constructor (username, email){
//         this.username = username,
//         this.email = email,
//         this.score = 0;
//     }

//     login(){
//         console.log(`${this.username} has logged in.`);
//         return this;
//     }
//     logout(){
//         console.log(`${this.username} has logged out.`);
//         return this;
//     }

//     incScore(){
//         this.score ++;
//         console.log(`${this.username} has scored ${this.score} points`)
//         return this;
//     }
// }

/*
/*
function User (username, email){
    this.username = username;
    this.email = email;
    this.login = function (){
        console.log(`${this.username} has logged in/`)
    }

}
class Admin extends User{
    constructor(username, email, title){
        super(username, email);
        this.title = title;
    }

    deleteUser(user){
        users =  users.filter(u => u.username !== user.username)
    }
}

const userOne = new User('Tracy', 'tracynetninja@netninja.com');
const userTwo = new User('Jane', 'janenetninja@netninja.com');
const userThree = new Admin('Chun-li', 'chun;ininja@netninja.com', 'black-belt-ninja');


console.log(userThree);

*/

//*********************************** Prototype model ****************************/
// function User (username, email){
//     this.username = username;
//     this.email = email;
//     this.login = function (){
//         console.log(`${this.username} has logged in.`);
//     }

// }

// 



// function User (username, email){
//     this.username = username;
//     this.email = email;

// }

// User.prototype.login = function(){
//     console.log(`${this.username} has logged in.`);
// }
// User.prototype.logout = function(){
//     console.log(`${this.username} has logged out.`);
// }
// const userOne = new User('Tracy', 'tracynetninja@netninja.com');
// const userTwo = new User('Jane', 'janenetninja@netninja.com');

// console.log(userOne, userTwo);

//*********************************** Prototype inheritance ****************************/

function User (username, email){
    this.username = username;
    this.email = email;

}

User.prototype.login = function(){
    console.log(`${this.username} has logged in.`);
    return this;
}
User.prototype.logout = function(){
    console.log(`${this.username} has logged out.`);
    return this;
}

function Admin(username, email, title){
    User.call(this, username, email);

    this.title = title;
}

Admin.protoype = Object.create(User.prototype);


const userOne = new User('Tracy', 'tracynetninja@netninja.com');
const userTwo = new User('Jane', 'janenetninja@netninja.com');
const userThree = new Admin('Ryu', 'ryuninja@netninja.com', 'black-belt-ninja');

console.log(userOne, userTwo, userThree);

//getting information
// db.collection('recipes').get().then((snapshot) =>{
//   // console.log(snapshot.docs[0].data())
//    //console.log(snapshot)
//    snapshot.docs.forEach(doc =>{
//        addRecipe(doc.data(), doc.id);
//    })

// }).catch(
//     err=> console.log(err)
// );