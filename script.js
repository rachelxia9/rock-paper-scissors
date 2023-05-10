function getComputerChoice() {
    const choices = {
        Rock: "Rock", 
        Paper: "Paper", 
        Scissors: "Scissors"
    };

    let random = choices[Math.floor(Math.random * choices.length)];

    return random;
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase(); 
    playerChoice = playerChoice[0].toUpperCase() + playerChoice.substr(1); 

    if (playerChoice == computerSelection) {
            return "It's a tie";
    } else if (isPlayerWin(playerChoice, computerSelection)) {
            return "You Win!" + playerChoice + " beats " + computerSelection;
    } else {
        return "You Lose!" + computerSelection + " beats " + playerChoice;
    }
}

function isPlayerWin(playerSelection, computerSelection) {
    return (playerSelection == choices.Rock && computerSelection == choices.Scissors) || 
    (playerSelection == choices.Paper && computerSelection == choices.Rock) || 
    (playerSelection == choices.Scissors && computerSelection == choices.Paper) 
}

const playerSelection = "rock"; 
const computerSelection = getComputerChoice(); 
console.log(playRound(playerSelection, computerSelection));