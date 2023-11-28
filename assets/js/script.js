// To-write: Java-script to make it work
var bodyEl = document.body;
var timerEl = document.createElement("h1");
var questionEl = document.createElement("h2");
var divEl = document.createElement("div");
var answersList = document.createElement("ul");
var answersEle1 = document.createElement("li");
var answersEle2 = document.createElement("li");
var answersEle3 = document.createElement("li");
var answersEle4 = document.createElement("li");

var buttonEle1 = document.createElement("button");
var buttonEle2 = document.createElement("button");
var buttonEle3 = document.createElement("button");
var buttonEle4 = document.createElement("button");

timerEl.classList.add("timer");
questionEl.classList.add("question");
answersList.classList.add("answers");

bodyEl.appendChild(timerEl);
bodyEl.appendChild(questionEl);
bodyEl.appendChild(divEl);
divEl.appendChild(answersList);
answersList.appendChild(answersEle1);
answersEle1.appendChild(buttonEle1);
answersList.appendChild(answersEle2);
answersEle2.appendChild(buttonEle2);
answersList.appendChild(answersEle3);
answersEle3.appendChild(buttonEle3);
answersList.appendChild(answersEle4);
answersEle4.appendChild(buttonEle4);

var quizQuestion = ["Choose the selector which targets the last item of an array with a length of 5?", "The DOM refers to what?", 'Which of these adds an HTML element to the page?', "A Boolean value is a declaration of what?", "Your score is..."];

var answerA = ["0", "The Body Element", "body.appendChild('h1')", "A Number"]
var answerB = ["5", "The HTML of the page.", "body.textContent"];
var answerC = ["4", "The CSS of the page.", "document.querySelector"];
var answerD = ["1", "The Javascript of the page.", "body.createElement",];

var timeLeft = 120;

var i = 0;
console.log("this is " + i);


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

    questionEl.textContent = quizQuestion[i];
}

function generateAnswers() {

    buttonEle1.textContent = answerA[i];

    buttonEle2.textContent = answerB[i];

    buttonEle3.textContent = answerC[i];

    buttonEle4.textContent = answerD[i];
};

function iterateAnswers() {
    buttonEle1.textContent = answerA[i];
    buttonEle2.textContent = answerB[i];
    buttonEle3.textContent = answerC[i];
    buttonEle4.textContent = answerD[i];
    questionEl.textContent = quizQuestion[i];
};

quizTimer();

generateQuestion();

generateAnswers();

buttonEle1.addEventListener("click", function() {
    i++
    console.log(i);
    iterateAnswers();
});

buttonEle2.addEventListener("click", function() {
    i++
    console.log(i);
    iterateAnswers();
});

buttonEle3.addEventListener("click", function() {
    i++
    console.log(i);
    iterateAnswers();
});

buttonEle4.addEventListener("click", function() {
    i++
    console.log(i);
    iterateAnswers();
});
