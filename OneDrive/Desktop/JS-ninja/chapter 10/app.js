// ******************  Date and Time   *****************************************

// const now = new Date();
// console.log( now);

// console.log(typeof now);

// // ******************  Date and Time methods  *****************************************
// const now = new Date();
// console.log(now);
// const year = now.getFullYear();

// console.log(year);

//************ */month******************
// const month = now.getMonth(); 

// console.log(month);

// //************* Day ************ */
// const day = now.getDay(); 

// console.log(day);

// //************* Date ************ */
// const date = now.getDate(); 

// console.log(date);

// //************* hours ************ */
// const hours = now.getHours(); 

// console.log(hours);

// //************* minutes ************ */
// const minutes = now.getMinutes(); 

// console.log(minutes);

// //************* seconds ************ */
// const seconds = now.getSeconds(); 

// console.log(seconds);

// //************* time ************ */
// const time = now.getTime(); 

// console.log(time);


//************* Miliseconds ************ */
// const time = now.getMilliseconds(); 

// console.log(time);

//************* Timestands ************ */
// const timeStands = now.getTime(); //Gets the time value in miliseconds

// console.log(timeStands);


//************* Date string ************ */
// const dateString = now.toDateString();  //returns a date as a string value

// console.log(dateString);
// console.log('Time string: ', now.toTimeString());
// console.log('Locale string: ', now.toLocaleString());

// ******************  Timestamps and comparisons  *****************************************
// const before = new Date('February 1 2020 7:30:59');
// const now = new Date();

// //console.log(now.getTime(), before.getTime());

// const diff = now.getTime() - before.getTime(); // diff btw 1 jan 1970 and now  - jan 1 1970 and before 

// console.log(diff);

// const mins = Math.round( diff / 1000 / 60) ;

// console.log(mins);

// const hours = Math.round( mins / 60) ;

// console.log(hours);

// const days = Math.round( hours / 24) ;

// console.log(days);

// console.log(`this blog was created ${days} days ago`);

// const timeStands = 69322170719809;

// console.log(new Date(timeStands));


// ******************  Date fns library  *****************************************
// const before = new Date('February 1 2020 7:30:59');
 const now = new Date();

 //console.log(dateFns.isToday(now));

 //formatting date

console.log(dateFns.format(now, 'YYYY'));

console.log(dateFns.format(now, 'MMMM'));

console.log(dateFns.format(now, 'Do'));

console.log(dateFns.format(now, 'dddd'));

console.log(dateFns.format(now, 'dddd Do MMMM YYYY'));

// comparing dates

const before = new Date('February 1 2020 7:30:59');

console.log(dateFns.distanceInWords(now , before, {addSuffix: true}));
