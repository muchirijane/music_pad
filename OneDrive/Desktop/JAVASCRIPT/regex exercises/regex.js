/*
const regex = /^(\(?\d{3}\)?)[-.](\d{3})[\-\.](\d{4})$/g;

const str = '(789)-876-4378';
const str1 = '899-876-4378';
const str2 = '219.876.4378';

const replacement = '$1-xxx-xxxx';
const result = str.replace(regex, replacement);

console.log(result);
*/
const regex = /^\[(.*?)\](\(.*?\))$/;
const str = '[Google](http://www.google.com)';


const replacement = '<a href ="$2">$1</a>';

const result = str.replace(regex, replacement);

console.log(result);