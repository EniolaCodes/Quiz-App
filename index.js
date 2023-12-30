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
let scoreCount = 0;
let count = 11;
let questionCount ;
let countdown ;

// Questions with options and answer array

const quizArray = [
    {
        id : "0",
        question : " What is the difference between `var`, `let`, and `const` keywords in javascript?",
        options : [
            " `var` declares a global variable, `let` declares a block-scoped variable, and `const` declares a constant variable",
            " `var` declares a function-scoped variable, `let` declares a global variable, and `const` declares a constant variable",
            " `var` declares a function-scoped variable, `let` declares a block-scoped variable, and `const` declares a block-scoped constant variable",
            "There is no difference, they are all synonyms",
        ],
        correct : "var` declares a global variable, `let` declares a block-scoped variable, and `const` declares a constant variable",
    },
    {
        id : "1",
        question: "What is the purpose of the `async` and `await` keywords in javascript?",
        options : [
            "They allow writing asynchronous code in a synchronous manner",
            "They allow writing synchronous code in an asynchronous manner",
            "They allow creating and executing promises",
            "They have no special meaning, they are just identifiers",
        ],
        correct : "They allow writing asynchronous code in a synchronous manner",
    },
    {
        id : "2",
        question: "What is the difference between `==` and `===` operators in javascript?",
        options : [
            "== compares types only, === compares values and types",
            "== compares values only, === compares values and types",
            "== compares values and types, === compares references",
            "There is no difference, they are both equality operators",
        ],
        correct : "== compares values only, === compares values and types",
    },
    {
        id : "3",
        question: " What is the difference between display: none and visibility: hidden in CSS?",
        options : [
            "display: none keeps the element in the layout but makes it invisible, visibility: hidden removes the element from the layout",
            "display: none hides the element and its children, visibility: hidden hides the element but not its children",
            "display: none removes the element from the layout, visibility: hidden keeps the element in the layout but makes it invisible",
            "There is no difference, they both hide the element",
        ],
        correct : " `display: none` removes the element from the layout, `visibility: hidden` keeps the element in the layout but makes it invisible",
    },
    {
        id : "4",
        question: "What is the difference between position: relative and position: absolute in CSS?",
        options : [
            "position: relative positions the element relative to its closest positioned ancestor, position: absolute positions the element relative to its normal position",
            "position: relative positions the element relative to the viewport, position: absolute positions the element relative to the document",
            "There is no difference, they both position the element",
            "position: relative positions the element relative to its normal position, position: absolute positions the element relative to its closest positioned ancestor",
        ],
        correct :  "position: relative positions the element relative to its normal position, position: absolute positions the element relative to its closest positioned ancestor",
    },
    {
        id : "5",
        question: "What is the difference between `flex` and `grid` layout systems in CSS?",
        options : [
        "There is no difference, they are both layout systems",
        "flex is a layout system for responsive design, grid is a layout system for fixed design",
        "flex is a one-dimensional layout system, grid is a two-dimensional layout system",
        "flex is a two-dimensional layout system, grid is a one-dimensional layout system",
        ],
        correct :  "flex is a one-dimensional layout system, grid is a two-dimensional layout system",
    },
    {
        id : "6",
        question: "What is the difference between localStorage and sessionStorage in javascript?",
        options : [
            "localStorage clears data when the browser is closed, sessionStorage persists data across browser sessions",
            "localStorage stores data on the server, sessionStorage stores data on the client",
            "There is no difference, they are both storage mechanisms",
            "localStorage persists data across browser sessions, sessionStorage clears data when the browser is closed",
        ],
        correct : "localStorage persists data across browser sessions, sessionStorage clears data when the browser is closed",
    },
    {
        id : "7",
        question: "What is the difference between createElement and createTextNode methods in javascript?",
        options : [
            "createElement creates a text node, createTextNode creates an HTML element",
            "createElement creates an HTML element, createTextNode creates a text node",
            "createElement creates an element node, createTextNode creates an attribute node",
            "There is no difference, they are both node creation methods",
        ],
        correct : "createElement creates an HTML element, createTextNode creates a text node",
    },
    {
        id : "8",
        question: "How do you access the third element in an array named myArray in JavaScript?",
        options : [
            "myArray(2)",
            "myArray[3]",
            "myArray[2]",
            "myArray.third",
        ],
        correct :  "myArray(2)",
    },
    {
        id : "9",
        question: "Which of the following is used to include an external JavaScript file in an HTML document?",
        options : [
            "<js src='script.js'></js>",
            "<include src='script.js'></include>",
            "<javascript src='script.js'></javascript>",
            "<script src='script.js'></script>",
        ],
        correct : "<script src='script.js'></script>",
    },
    
]




 
restartButton.addEventListener("click", () =>{
    initial();
    quizContainer.style.display ="block";
    scoreCountainer.classList.add("hide");
   });



// next button
nextButton.addEventListener("click", (displayNext = () => {
    questionCount += 1;

    if(questionCount === quizArray.length){
        quizContainer.style.display = "none";
        scoreCountainer.classList.remove("hide");
        userScore.innerHTML = " Your score is " + scoreCount + " out of " + questionCount;
    }
    else{
        countOfQuestion.innerHTML = questionCount + 1 + " of " + quizArray.length + " Question ";
        quizDisplay(questionCount);
        count = 11;
        clearInterval(countdown);
        timerDisplay();
    }
}));

// count down timer

const timerDisplay = () => {
    countdown = setInterval(() => {
        count --;
        timeLeft.innerHTML = `${count}s`;
        if(count === 0){
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};


const quizDisplay = (questionCount) =>{
    let quizCards = document.querySelectorAll(".container-mid");

    quizCards.forEach((card) =>{
        card.classList.add("hide");
    });
    quizCards[questionCount].classList.remove("hide");
};

 
function quizCreator() {
    quizArray.sort(() => Math.random() - 0.5);

    let div = document.createElement("div");

    for(let i of quizArray){
        i.options.sort(() => Math.random() - 0.5);
       
        div.classList.add("container-mid", "hide");

        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question ";

        let question_Div = document.createElement("p");
        question_Div.classList.add("question");
        question_Div.innerHTML = i.question;
        div.appendChild(question_Div);

        div.innerHTML += `
        <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
        `
    }
    quizContainer.appendChild(div);
   
}

function checker(userOption){
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    if(userSolution == quizArray[questionCount].correct){
        userOption.classList.add("correct");
        scoreCount++;
    }
    else{
        userOption.classList.add("incorrect");
        options.forEach((element) =>{
            if(element.innerText = quizArray[questionCount].correct){
                element.classList.add("correct");
            }
        });
    }
    clearInterval(countdown);
    options.forEach((element) =>{
        element.disabled = true;
    })

}

function initial(){
    quizBox.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}
startButton.onclick = () =>{
    initial();
    infoBox.style.display = "block";
    
}

exitButton.onclick = () =>{
    infoBox.style.display ="none"
}
continueButton.onclick = () =>{
quizContainer.style.display = "block"
infoBox.style.display ="none"
}  
window.onload = () =>{
    startButton.style.display = "block";
    quizContainer.style.display = "none";
}