let computerSelection;
function n() {
let getComputerChoice=Math.floor(Math.random() * 3)
    if (getComputerChoice===0) {
        computerSelection="rock"
    }
    else if (getComputerChoice===1) {
        computerSelection="paper"
    }
    else {computerSelection="scissors"}
console.log(computerSelection)
}
n()

//Create a function that randomizes a choice for the computer
//Create a variable that prompts a choice from the user
//Create a function that simulates a round between the computer and the user
//Loop that function until either the computer or the user has one five times