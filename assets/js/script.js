// To-write: Java-script to make it work
var bodyEl = document.body;
var timerEl = document.createElement("h1");
var questionEl = document.createElement("h2");
var answersList = document.createElement("ul");
var answersEle1 = document.createElement("li");
var answersEle2 = document.createElement("li");
var answersEle3 = document.createElement("li");
var answersEle4 = document.createElement("li");

timerEl.classList.add("timer");
questionEl.classList.add("question");
answersList.classList.add("answers");

bodyEl.appendChild(timerEl);
bodyEl.appendChild(questionEl);
questionEl.appendChild(answersList);
answersList.appendChild(answersEle1);
answersList.appendChild(answersEle2);
answersList.appendChild(answersEle3);
answersList.appendChild(answersEle4);

var timeLeft = 120;


function quizTimer() {
    var countDown = setInterval(function() {
    timeLeft--;
    timerEl.textContent = timeLeft + " seconds left to complete.";

    if(timeLeft === 0) {
        clearInterval(countDown);

        timerEl.textContent = "Your time is up!";
    }
    }, 1000);
}

function generateQuestion() {
    var quizQuestion = ["Choose the selector which targets the last item of an array with a length of 5.", "The DOM refers to what?", 'Which of these adds an HTML element to the page?', "A Boolean value is a declaration of what?", "Your score is..."];

    for (var i = 0; i < quizQuestion.length; i++) {
        questionEl.textContent = quizQuestion[i];
    };
}

function generateAnswers() {
    var answerA = ["0", "The Body Element", "body.appendChild('h1')", "A Number"]
    var answerB = ["5", "The HTML of the page"];
    var answerC = [];
    var answerD = [];

    for (var i = 0; i < answerA.length; i++) {
        answersEle1.textContent = answerA[i];
    };

    for (var i = 0; i < answerB.length; i++) {
        answersEle2.textContent = answerB[i];
    };

    for (var i = 0; i < answerC.length; i++) {
        answersEle3.textContent = answerC[i];
    };

    for (var i = 0; i < answerB.length; i++) {
        answersEle4.textContent = answerD[i];
    };
};

quizTimer();

generateQuestion();

generateAnswers();