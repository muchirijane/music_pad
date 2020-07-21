const button = document.querySelector('button');
const close = document.querySelector('.popup-close');
const popupWrapper = document.querySelector('.popup-wrapper');

button.addEventListener('click', () =>{
    popupWrapper.style.display = 'block';
});

close.addEventListener('click', () =>{
    popupWrapper.style.display = 'none';
});

popupWrapper.addEventListener('click', () =>{
    popupWrapper.style.display = 'none';
});