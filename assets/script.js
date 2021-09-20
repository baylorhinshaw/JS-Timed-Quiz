//60 Second Countdown Timer
const timeEl = document.querySelector('.time');

function quizTime () {
    let secondsLeft = 60;
    let timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + 's to finish!';
        
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);    
}
///////////////////////////

//The start btn for quiz
const beginQuizBtn = document.querySelector('#begin-quiz');
const questionsContainerEl = document.querySelector('#questions-box');

const qna = [
    {
        question: 'What year was JavaScript created?',
        answers: [
            {text: '1995', correct: true},
            {text: '1969', correct: false},
            {text: '1977', correct: false},
            {text: '2012', correct: false}
        ]
    },
    {
        question: 'Which is not a JS variable?',
        answers: [
            {text: 'let', correct: false},
            {text: 'const', correct: false},
            {text: 'null', correct: true},
            {text: 'var', correct: false}
        ]
    },
    {
        question: 'what is 6 + 1',
        answers: [
            {text: '1', correct: true},
            {text: '2', correct: false},
            {text: '3', correct: false},
            {text: '4', correct: false}
        ]
    },
    {
        question: 'what is 3 + 1',
        answers: [
            {text: '1', correct: true},
            {text: '2', correct: false},
            {text: '3', correct: false},
            {text: '4', correct: false}
        ]
    },
    {
        question: 'what is 1 + 1',
        answers: [
            {text: '1', correct: true},
            {text: '2', correct: false},
            {text: '3', correct: false},
            {text: '4', correct: false}
        ]
    },    {
        question: 'what is 2 + 1',
        answers: [
            {text: '1', correct: true},
            {text: '2', correct: false},
            {text: '3', correct: false},
            {text: '4', correct: false}
        ]
    }
]

document.querySelector('#question').innerHTML = qna

function beginQuiz () { 
    quizTime()
    beginQuizBtn.classList.add('hide')
    questionsContainerEl.classList.remove('hide')
    Object.values(qna)
}



beginQuizBtn.addEventListener('click', beginQuiz);
/////////////////

//must be able to show the next question

const questionEl = document.querySelector('#question')
let btnGridEl = document.querySelector('.btn-grid')

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('ans-btn')
        button.addEventListener('click', choosingAnswer)
        
        if (qna.answers) {
            button.dataset.correct = answer.correct
            currentQuestion.classList.remove
        }
        btnGridEl.appendChild(button)
    });
}


function choosingAnswer(e) {
    
}

////////////////////////////

let done = document.querySelector('.done')
let goBack = document.querySelector('#end-btn')

function finisedQuiz () {
    done.classList.remove('hide')
    goBack.classList.remove('hide')
}