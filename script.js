
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];

    let random = choices[Math.floor(Math.random() * 3)];

    return random;
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase(); 
    playerChoice = playerChoice[0].toUpperCase() + playerChoice.substr(1); 

    if (playerChoice == computerSelection) {
            return "It's a tie";
    } else if (isPlayerWin(playerChoice, computerSelection)) {
            return "You Win! " + playerChoice + " beats " + computerSelection;
    } else {
        return "You Lose! " + computerSelection + " beats " + playerChoice;
    }
}

function isPlayerWin(playerSelection, computerSelection) {
    return (playerSelection == "Rock" && computerSelection == "Scissors") || 
    (playerSelection == "Paper" && computerSelection == "Rock") || 
    (playerSelection == "Scissors" && computerSelection == "Paper") 
}

function game() {
    
    for (i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose Rock, Paper or Scissors");
        let result = playRound(playerSelection, getComputerChoice());
        console.log(result);
    }
}