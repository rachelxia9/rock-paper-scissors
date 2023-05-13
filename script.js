
let playerScore = 0; 
let compScore = 0; 
let winner = "";

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];

    let random = choices[Math.floor(Math.random() * 3)];

    return random;
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase(); 
    playerChoice = playerChoice[0].toUpperCase() + playerChoice.substr(1); 

    if (playerChoice == computerSelection) {
            winner = "tie";
    } else if (isPlayerWin(playerChoice, computerSelection)) {
            playerScore ++; 
            winner = "player";
    } else {
        compScore ++; 
        winner = "computer";
        
    }
}

function isPlayerWin(playerSelection, computerSelection) {
    return (playerSelection == "Rock" && computerSelection == "Scissors") || 
    (playerSelection == "Paper" && computerSelection == "Rock") || 
    (playerSelection == "Scissors" && computerSelection == "Paper") 
}

const resultMessage = document.getElementById('resultMessage'); 
const playerScoreText =  document.getElementById('playerScore'); 
const compScoreText =  document.getElementById('compScore');
const roundMessage =  document.getElementById('roundMessage');
const rockButton = document.getElementById('rockButton');
const scissorsButton = document.getElementById('scissorsButton');
const paperButton = document.getElementById('paperButton');
const playerDisplay = document.getElementById('playerDisplay');
const compDisplay = document.getElementById('compDisplay');
const endScreen = document.getElementById('endScreen'); 
const overlay = document.getElementById('overlay');
const restartButton = document.getElementById('restart')
const playerScoreText2 =  document.getElementById('playerScore2'); 
const compScoreText2 =  document.getElementById('compScore2');

rockButton.addEventListener('click', () => handleClick("Rock"));
paperButton.addEventListener('click', () => handleClick("Paper"));
scissorsButton.addEventListener('click', () => handleClick("Scissors"));
restartButton.addEventListener('click', restartGame); 
overlay.addEventListener('click', removeEnd);

function updateScore() {
    if (winner == "tie") {
        resultMessage.textContext = "You tied."
    } else if (winner == "player") {
        resultMessage.textContent = "You won"
    } else {
        resultMessage.textContent = "You lost"
    }

    playerScoreText.textContent = 'Player: ' + playerScore; 
    compScoreText.textContent = 'Computer: ' + compScore; 


}

function updateRoundMessage(winner, playerSelection, computerSelection) {
    if (winner == "tie") {
        roundMessage.textContext = `${playerSelection} ties with ${computerSelection}`;
    } else if (winner == "player") {
        roundMessage.textContent = `${playerSelection} beats ${computerSelection}`;
    } else {
        roundMessage.textContent = `${playerSelection} is beaten by ${computerSelection}`;
    }
}

function handleClick(playerSelection){
    if (isGameOver()) {
        showEnd();
        return
    }
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateSelections(playerSelection, computerSelection);
    updateScore(); 
    updateRoundMessage(winner, playerSelection, computerSelection); 
}

function isGameOver() {
    return (playerScore >= 5) || (compScore >= 5);
}

function updateSelections(playerSelection, computerSelection){
    switch(playerSelection){
        case "Rock": 
            playerSelection = "✊"
            break
        case "Paper": 
            playerSelection = "🫲"
            break
        case "Scissors": 
            playerSelection = "✌️"
            break
    }

    switch(computerSelection){
        case "Rock": 
            computerSelection = "✊"
            break
        case "Paper": 
            computerSelection = "🫲"
            break
        case "Scissors": 
            computerSelection = "✌️"
            break
    }

    playerDisplay.textContent = playerSelection;
    compDisplay.textContent = computerSelection;

}


function showEnd() {
    playerScoreText2.textContent = 'Player: ' + playerScore; 
    compScoreText2.textContent = 'Computer: ' + compScore; 
    endScreen.classList.add('active');
    overlay.classList.add('active'); 
    playerScoreText2.classList.add('active');
    compScoreText2.classList.add('active');
}

function removeEnd() {
    endScreen.classList.remove('active');
    overlay.classList.remove('active'); 
    playerScoreText2.classList.remove('active');
    compScoreText2.classList.remove('active');
}

function restartGame() {
    playerScore = 0; 
    compScore = 0; 
    computerSelection = ""; 
    playerSelection = "";
    playerDisplay.textContent = ""; 
    compDisplay.textContent = "";
    roundMessage.textContent = "";
    winner = "";
    
    updateScore(); 
    resultMessage.textContent = "";

    removeEnd();
    
}
