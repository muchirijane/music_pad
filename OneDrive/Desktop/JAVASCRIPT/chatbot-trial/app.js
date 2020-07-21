let mic = document.getElementById('mic');
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = function(e){
    console.log(e)
}

mic.addEventListener('click', function ()  {
    recognition.start();
    console.log('ACTIVETED!!');
})