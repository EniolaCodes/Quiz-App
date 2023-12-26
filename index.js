const startButton = document.querySelector(".start-btn button");
const infoBox = document.querySelector(".info-box");
const exitButton = document.querySelector(".exit");
const continueButton = document.querySelector(".restart");
const quizContainer = document.querySelector("#display-container");
const timeLeft = document.querySelector(".time-left");
const countOfQuestion = document.querySelector(".number-of-question");
const quizBox = document.querySelector("#quiz-box");
const nextButton = document.querySelector("#next-button");
const scoreCountainer = document.querySelector(".score-container");
const userScore = document.querySelector("#user-score")
const restartButton = document.querySelector("#restart");
const scoreCount = 0;
const count = 11;
let questionCount ;
let countdown ;


startButton.onclick = () =>{
    infoBox.style.display = "block"
}
exitButton.onclick = () =>{
    infoBox.style.display ="none"
}
continueButton.onclick = () =>{
quizContainer.style.display = "block"
infoBox.style.display ="none"
}  

