let computerSelection;
let outcome;
let computerDecision;
let computerScore=0;
let playerScore=0;
let userChoiceOne;
let userChoice;
//Create a function that randomizes a choice for the computer
function ComputerDecision() {
let getComputerChoice=Math.floor(Math.random() * 3)
    if (getComputerChoice===0) {
        computerSelection="rock"
    }
    else if (getComputerChoice===1) {
        computerSelection="paper"
    }
    else {computerSelection="scissors"}
return computerSelection
}

//Create a function that simulates a round between the computer and the user
function playRound(ComputerDecision, userChoice) {
    if (ComputerDecision==userChoice) {
       outcome="Draw."
    }
     else if (userChoice=="rock" && ComputerDecision=="scissors") {
        outcome="Congratulations! Rock beats scissors.";
        playerScore++;
     }
     else if (userChoice=="rock" && ComputerDecision=="paper") {
         outcome="Commiserations! Paper beats rock.";
         computerScore++;
     }
     else if (userChoice=="paper" && ComputerDecision=="scissors") {
         outcome="Commiserations! Scissor beats paper.";
         computerScore++;
     }
     else if (userChoice=="paper" && ComputerDecision=="rock") {
        outcome="Congratulations! Paper beats rock.";
        playerScore++;
     }
     else if (userChoice=="scissors" && ComputerDecision=="rock") 
     {outcome="Commiserations! Rock beats scissors.";
      computerScore++;} 

     else if (userChoice=="scissors" && ComputerDecision=="paper") 
        {outcome="Congratulations! Scissors beats paper."
        playerScore++;}
    else if(userChoice!="rock" || userChoice!="paper" ||userChoice!="scissors") {
        outcome="Please choose either rock, paper, or scissors."
    }
 alert(outcome + " " + "The current score is" + " " + playerScore + "-" + computerScore)
 }

 //Loop a game between the computer and the user until either the computer or the user has one five times
 for (; playerScore<5 && computerScore<5;) {
ComputerDecision()
userChoiceOne=prompt("Make a choice")
userChoice=userChoiceOne.toLowerCase()
for (; userChoice!=="rock" && userChoice!=="paper" && userChoice!="scissors"; ) {
    {userChoiceOne=prompt("Please choose either rock, paper, or scissors.")
    userChoice=userChoiceOne.toLowerCase()}
}
playRound(computerSelection, userChoice)}

if (playerScore=5 && computerScore!==5) {
    alert("Congratulations! You have won the game.")
}
else if (computerScore=5 && playerScore!==5) {
    alert("Commiserations! You have lost the game.")
}
