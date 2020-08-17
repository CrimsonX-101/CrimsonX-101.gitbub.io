const correctAnswers = ['A', 'B', 'B', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');


form.addEventListener('submit', a => {
    a.preventDefault();

    let score = 0;
    const userAnswers = [form.Q1.value, form.Q2.value, form.Q3.value, form.Q4.value];

    //check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
        score += 25;
        }
    });

//showing result

scroll(0,0); //scroll right up to score after submit

//result.querySelector('span').textContent = `${score}%`
result.classList.remove('d-none');

let output = 0;
const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if(output === score){
        clearInterval(timer);
    } else {
        output++;
    }
}, 80);

});


/*setTimeout(() => {
    alert('welcome retards');
}, 1500);*/