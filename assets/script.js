let score = 0;
let currentQuestion = 0;
let secondsLeft = 60;
let timeEl = document.querySelector('.time');
let beginQuizBtn = document.querySelector('#begin-quiz');
let questionsContainerEl = document.querySelector('#questions-box');
let questionContainerEl = document.getElementById('ans-btns')
let questionTitleEl = document.getElementById('question-display');
let done = document.querySelector('.done');
let resultCont = document.getElementById('result');

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
    renderQuestion();
}

function renderQuestion() {
    let firstQuestion = qna[currentQuestion];
    let options = firstQuestion.options;
    let title = firstQuestion.question;

    questionTitleEl.textContent = title;
    removeAllChildNodes(questionContainerEl);

    for (let i = 0; i < options.length; i++) {
        let answer = options[i];
        let newEl = document.createElement('button');
        newEl.className = 'ans-btn';
        newEl.textContent = answer;
        questionContainerEl.append(newEl);

        if (newEl) {
            newEl.addEventListener('click', function (e) {
                answerSelected(answer, options[firstQuestion.answer])
            })
        }
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


beginQuizBtn.addEventListener('click', beginQuiz);


function answerSelected(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        score += 1;
    } else {
        secondsLeft -= 5;
        timeEl.textContent = secondsLeft + 's to finish!';
    }
    if (currentQuestion === qna.length - 1) {
        finisedQuiz();
    } else {
        currentQuestion++;
        renderQuestion();
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

let finalScore = document.getElementById('final-score');
let submitButton = document.getElementById("submit");

function finisedQuiz() {
    done.classList.remove('hide');
    submitButton.classList.remove('hide');
    questionsContainerEl.classList.add('hide');
    finalScore.textContent = 'Your score is:' + score;
}

function saveScore(initials, score){
    let scores = localStorage.getItem("scores");
    if (scores === undefined){
        scores = {}
    } else {
        scores = JSON.parse(scores);
    }
    scores[initials] = score;
    localStorage.setItem("scores", JSON.stringify(scores));
}

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    let initials = document.getElementById("initials").value;
    saveScore(initials, score);
})