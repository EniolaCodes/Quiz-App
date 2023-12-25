const startBtn = document.querySelector(".start-btn button");
const infoBox = document.querySelector(".info-box");
const exitButton = document.querySelector(".exit");
const continueButton = document.querySelector(".restart");



startBtn.onclick = () =>{
    infoBox.style.display = "block";
}
exitButton.onclick = () =>{
    infoBox.style.display = "none"
}    
