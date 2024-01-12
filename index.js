const form = document.querySelector('form')
const btn = document.querySelector('button')

const answers = ['A', 'A', 'A', 'A', 'A']
const qname = ['.question1', '.question2','.question3','.question4','.question5']

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value]
    // console.log(userAnswers)
    let count = 0

    for(let i = 0; i<answers.length; i++){
        if(userAnswers[i] == answers[i]){
            count++
            document.querySelector(qname[i]).classList.add('green')
        }else{
            document.querySelector(qname[i]).classList.add('red')
        }
    }

    document.querySelector('.score').classList.remove('hidden')
    document.querySelector('.score_value').innerText = 'you scored ' + count + '/5'

})


btn.addEventListener('click', (event) => {
    document.querySelector('.score').classList.add('hidden')

    for(let i = 0; i<qname.length; i++){
        document.querySelector(qname[i]).classList.remove('green')
        document.querySelector(qname[i]).classList.remove('red')
    }

    let radios = document.querySelectorAll('input[type=radio]')

    radios.forEach(radio => {
        radio.checked = false;
    });

})