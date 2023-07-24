let computerSelection;
let outcome;
let computerDecision
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
console.log(ComputerDecision())
//Create a variable that prompts a choice from the user
let userChoice=prompt("Make a choice")

//Create a function that simulates a round between the computer and the user
function playRound(ComputerDecision, userChoice) {
    if (ComputerDecision==userChoice) {
       outcome="draw"
    }
     else if (userChoice=="rock" && ComputerDecision=="scissors") {
        outcome="Congratulations! Rock beats scissor"
     }
     else if (userChoice=="rock" && ComputerDecision=="paper") {
         outcome="Commiserations! Paper beats rock"
     }
     else if (userChoice=="paper" && ComputerDecision=="scissors") {
         outcome="Commiserations! Scissor beats paper"
     }
     else if (userChoice=="paper" && ComputerDecision=="rock") {
        outcome="Congratulations! Paper beats rock"
     }
     else if (userChoice=="scissors" && ComputerDecision=="rock") 
     {outcome="Commiserations! Rock beats scissors"} 

     else if (userChoice=="scissors" && ComputerDecision=="paper") 
        {outcome="Congratulations! Scissors beats paper"}
    else if(userChoice!="rock" || userChoice!="paper" ||userChoice!="scissors") {
        outcome="Please choose either rock, paper, or scissors"
    }
 alert(outcome)
 }
 playRound(computerSelection, userChoice)

//Loop that function until either the computer or the user has one five times