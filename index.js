const startBtn = document.querySelector(".start-btn button");
const infoBox = document.querySelector(".info-box");
const exitButton = document.querySelector(".exit");
const continueButton = document.querySelector(".restart");
const quizContainer = document.querySelector("#display-container");



startBtn.onclick = () =>{
    infoBox.style.display = "block"
}
exitButton.onclick = () =>{
    infoBox.style.display ="none"
}
continueButton.onclick = () =>{
quizContainer.style.display = "block"
infoBox.style.display ="none"
}  

