let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msgEl = document.querySelector("#msg");
const userScoreEl = document.querySelector("#user-score");
const compScoreEl = document.querySelector("#comp-score");

const genComChoice = () => {
    const options = ["rock","paper","scissors"];
   const randIndex = Math.floor(Math.random() * 3 );
    return options[randIndex];
    
}

const drawGame = () => {
    msgEl.innerText = "Game was Draw. Play again";
    msgEl.style.backgroundColor = "#081b31";
    
}

const showWinner = (userWin , userChoice, compChoice) => {
     if(userWin){
        userScore++;
        userScoreEl.innerText = userScore;
        msgEl.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msgEl.style.backgroundColor = "green";
     }else{
        compScore++;
        compScoreEl.innerText = compScore;
             msgEl.innerText = `You lost. ${compChoice} beats your ${userChoice} `;
        msgEl.style.backgroundColor = "red";
        
     }
}

const playGame = (userChoice) => {
// console.log("user choice = ", userChoice);

const compChoice = genComChoice();
// console.log("comp choice = ", compChoice);

if(userChoice === compChoice){
drawGame();
}else{
    let userWin = true;
    if(userChoice === "rock"){
        //paper , scissors
       userWin = compChoice === "paper" ? false : true;
    }else if(userChoice === "paper"){
        //rock,scissors
        userWin = compChoice === "scissors" ? false : true;
    }else{
        //rock ,paper
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin ,userChoice,compChoice);
}

}

choices.forEach((choice) => {
    // console.log(choice);
    
    choice.addEventListener("click", () => {
     const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
});