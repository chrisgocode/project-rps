// Get the elements from the page
const playerScoreSpan = document.getElementById('playerScore');
const computerScoreSpan = document.getElementById('computerScore');
const playerChoiceDisplay = document.getElementById('playerChoiceDisplay');
const computerChoiceDisplay = document.getElementById('computerChoiceDisplay');

// Initialize scores
let playerWins = 0;
let computerWins = 0;

function computerSelection() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function playRound(playerChoice){
    const computerChoice = computerSelection();
    computerChoiceDisplay.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    playerChoiceDisplay.textContent = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);

    if (computerChoice === playerChoice) {
        return "tie";
    } else if ((computerChoice === "rock" && playerChoice === "scissors") || 
               (computerChoice === "paper" && playerChoice === "rock") || 
               (computerChoice === "scissors" && playerChoice === "paper")) {
        computerScoreSpan.textContent = computerWins;
        return "computer";     
    } else {
        playerScoreSpan.textContent = playerWins;
        return "player";
    }
}

function showPopup(message) {
    const popup = document.getElementById('gameResultPopup');
    const popupMessage = document.getElementById('popupMessage');
    popupMessage.textContent = message;
    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('gameResultPopup');
    popup.style.display = 'none';
}


function updateScores(winner) {
    if (winner === "player") {
        playerWins++;
    } else if (winner === "computer") {
        computerWins++;
    }

    playerScoreSpan.textContent = playerWins;
    computerScoreSpan.textContent = computerWins;

    if (playerWins === 3 || computerWins === 3) {
        let winnerText = playerWins === 3 ? "Player wins the game!" : "Computer wins the game!";
        showPopup(winnerText);
    }
}

// Add event listeners to buttons
document.querySelectorAll('.choiceButton').forEach(button => {
    button.addEventListener('click', function() {
        const winner = playRound(this.id);
        updateScores(winner);
    });
});


document.querySelector('.close-btn').addEventListener('click', closePopup);

// Prevent further play if the game is over
function disableButtons() {
    document.querySelectorAll('.choiceButton').forEach(button => button.disabled = true);
}

// Allow the game to continue after closing the popup
function enableButtons() {
    document.querySelectorAll('.choiceButton').forEach(button => button.disabled = false);
}

// Modify closePopup to reset the game
function closePopup() {
    const popup = document.getElementById('gameResultPopup');
    popup.style.display = 'none';
    playerWins = 0;
    computerWins = 0;
    playerScoreSpan.textContent = playerWins;
    computerScoreSpan.textContent = computerWins;
    playerChoiceDisplay.textContent = '';
    computerChoiceDisplay.textContent = '';
    enableButtons();
}