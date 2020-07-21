const correctAnswers =['B', 'B', 'B', 'B'];

const form = document.querySelector('.quiz-form');
const updateScore = document.querySelector('span');
const result = document.querySelector('div.result');

form.addEventListener('submit', e =>{
    e.preventDefault();


    let score = 0;
    const answers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //check answer

    answers.forEach((answer, index) =>{
        if(answer === correctAnswers[index]){
            score += 25;
        }

    })

    //show result on page
    scrollTo(0,0);
    result.classList.remove('d-none');
    //updateScore.innerText = `${score}%`;

    let output = 0;

    const timer = setInterval( () => {
        updateScore.innerText = `${output}%`;

        if(output === score){
            clearInterval(timer);
        }else{
            output++;
        }
    }, 10);
    
});

