let timeEl = document.querySelector('.time');
let score = 0;
let currentQuestion = 0;
let secondsLeft = 60;
let beginQuizBtn = document.querySelector('#begin-quiz');
let questionsContainerEl = document.querySelector('#questions-box');
let questionContainerEl = document.getElementById('ans-btns')
let questionTitleEl = document.getElementById('question-display');
let done = document.querySelector('.done');
let goBack = document.querySelector('#end-btn');
let resultCont = document.getElementById('result');
let newEl;

const qna = [{
    question: 'What year was JavaScript created?',
    options: [
        '1995',
        '1969',
        '1977',
        '2012'
    ],
    answer: 0,
},
{
    question: 'Which is not a JS variable?',
    options: [
        'let',
        'const',
        'null',
        'var'
    ],
    answer: 2,
},
{
    question: 'What describes JS the best?',
    options: [
        'programs the behavior of web pages',
        'defines the content of web pages',
        'specifies the layout of webpages',
        'none of the above'
    ],
    answer: 0,
},
{
    question: 'Which character is used to make an array in JS?',
    options: [
        '()',
        '{}',
        '[]',
        '<>'
    ],
    answer: 2,
},
{
    question: 'What would you use to generate a random number?',
    options: [
        'Math.random',
        'Math.floor',
        'Math.wild',
        'none of the above'
    ],
    answer: 0,
},
{
    question: 'How do you comment in JS?',
    options: [
        '!!',
        '==',
        '//',
        '$$'
    ],
    answer: 2,
}
];

function beginQuiz() {
    quizTime();
    beginQuizBtn.classList.add('hide');
    questionsContainerEl.classList.remove('hide');


    let firstQuestion = qna[0];
    let options = firstQuestion.options;
    let title = firstQuestion.question;

    questionTitleEl.textContent = title;

    for (let i = 0; i < options.length; i++) {
        let answer = options[i];
        let newEl = document.createElement('button');
        newEl.className = 'ans-btn';
        newEl.textContent = answer;
        questionsContainerEl.append(newEl);

        if (newEl) {
            let nextQuestion = 1;
            newEl.addEventListener('click', function (e) {
                correctOrIncorrectAnswerSelected(answer, options[firstQuestion.answer], nextQuestion)
            })
        }
    }
}



beginQuizBtn.addEventListener('click', beginQuiz);


function correctOrIncorrectAnswerSelected(selectedAnswer, correctAnswer, nextQuestion) {
    let answerButtonElements = document.getElementsByClassName('ans-btn');
    if (selectedAnswer === correctAnswer) {
        document.getElementById('result').innerHTML = 'You answered correctly!'
        score += 1;
        nextQuestion = nextQuestion++;
        newQuestionDisplayed(nextQuestion);
    } else {
        document.getElementById('result').innerHTML = 'You answered incorrectly!'
        secondsLeft -= 5;
        timeEl.textContent = secondsLeft + 's to finsh!';
        nextQuestion = nextQuestion++;
        newQuestionDisplayed(nextQuestion);
    }
}


function newQuestionDisplayed(nextQuestion) {
    document.querySelector('#questions-box').innerHTML = '';
    questionTitleEl.innerHTML = '';
    let displayQuestion = qna[nextQuestion];
    let options = displayQuestion.options;
    questionTitleEl.textContent = displayQuestion.question;
    for (let i = 0; i < options.length; i++) {
        let answer = options[i];
        let newEl = document.createElement('button');
        newEl.className = 'ans-btn';
        newEl.textContent = answer;
        questionsContainerEl.append(newEl);
        if (newEl) {
            console.log(nextQuestion);
            newEl.addEventListener('click', function (e) {
                correctOrIncorrectAnswerSelected(answer, options[displayQuestion.answer], nextQuestion)
    
            })
        }
    }
    
}


function quizTime() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + 's to finish!';

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            alert('Quiz over');
        }
    }, 1000);
}

let initialsInput = document.querySelector("#initials");
let submitButton = document.querySelector("submit")

function renderLastInitial () {
    var initials = localStorage.getItem("initials")
}

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
})

localStorage.setItem("initials", initialsInput);
renderLastInitial;


// function finisedQuiz () {
//     done.classList.remove('hide');
//     goBack.classList.remove('hide');
