const timeEl = document.querySelector('.time');
let score = 0;
let currentQuestion = 0;
const beginQuizBtn = document.querySelector('#begin-quiz');
const questionsContainerEl = document.querySelector('#questions-box');
let answer1 = document.getElementById("answer1")
let answer2 = document.getElementById("answer2")
let answer3 = document.getElementById("answer3")
let answer4 = document.getElementById("answer4")
let done = document.querySelector('.done');
let goBack = document.querySelector('#end-btn');
let resultCont = document.getElementById('result')

const qna = [{ 
    question: 'What year was JavaScript created?',
    ans1: '1995',
    ans2: '1969',
    ans3: '1977',
    ans4: '2012',
    correctAns: '1995'
},
{
    question: 'Which is not a JS variable?',
    ans1: 'let',
    ans2: 'const',
    ans3: 'null',
    ans4: 'var',
    correctAns: 'null'
},
{
    question: 'What describes JS the best?',
    ans1: 'programs the behavior of web pages',
    ans2: 'defines the content of web pages',
    ans3: 'specifies the layout of webpages',
    ans4: 'none of the above',
    correctAns: 'programs the behavior of web pages'
},
{
    question: 'Which character is used to make an array in JS?',
    ans1: '()',
    ans2: '{}',
    ans3: '[]',
    ans4: '<>',
    correctAns: '[]'
},
{
    question: 'What would you use to generate a random number?',
    ans1: 'Math.random',
    ans2: 'Math.floor',
    ans3: 'Math.wild',
    ans4: 'none of the above',
    correctAns: 'Math.random'
},    
{
    question: 'How do you comment in JS?',
    ans1: '!!',
    ans2: '==',
    ans3: '//',
    ans4: '$$',
    correctAns: '//'
}
];
    
    function beginQuiz () { 
        quizTime();
        beginQuizBtn.classList.add('hide');
        questionsContainerEl.classList.remove('hide');
        const questionEl = document.getElementById('question-display');
        questionEl.textContent = qna[0].question;
        answer1.textContent = qna[0].ans1;
        answer2.textContent = qna[0].ans2;
        answer3.textContent = qna[0].ans3;
        answer4.textContent = qna[0].ans4;
}

beginQuizBtn.addEventListener('click', beginQuiz);

    function correctAnswerSelected () {
        let answerButtonElements = document.getElementsByClassName('ans-btn'); 
        for (let i = 0; i < answerButtonElements.length; i++) {

        }
    }

    function incorrectAnswerSelected () {
        
    }

    function newQuestionDisplayed () {
        let displayNewQuestion = document.getElementsByClassName('next-question');
        for (let i = 0; i < displayNewQuestion.length; i++) {
            
        }
    }



function finisedQuiz () {
    done.classList.remove('hide');
    goBack.classList.remove('hide');
}

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