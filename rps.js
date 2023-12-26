function computerSelection() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomNumber];
    console.log(computerChoice)
    return computerChoice
}

function playerSelection() {
    let playerChoice = prompt("Choose rock, paper, or scissors: ");

    if (playerChoice.toLowerCase() !== "rock" && playerChoice.toLowerCase() !== "paper" && playerChoice.toLowerCase() !== "scissors") {
        console.log("Oops! That's not a correct option. Please try again!");
    }   else {
            console.log(playerChoice)
            return playerChoice.toLowerCase();
        }
}

function playRound(playerChoice, computerChoice) {
    if (computerChoice === playerChoice) {
        console.log("It's a tie!");
        return "tie";
    }   else if ((computerChoice === "rock" && playerChoice !== "scissors") || (computerChoice === "paper" && playerChoice !== "rock") || (computerChoice === "scissors" && playerChoice !== "paper")) {
            console.log("You lose!")
            return "computer";     
    }   else {
        console.log("You win!");
        return "player";
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;

    while (playerWins < 3 && computerWins < 3) {
        const gameOutcome = playRound(computerSelection(), playerSelection());

        if (gameOutcome === "player") {
            playerWins++;
            console.log("Player wins this round. Score: Player " + playerWins + ", Computer " + computerWins);
        } else if (gameOutcome === "computer") {
            computerWins++;
            console.log("Computer wins this round. Score: Player " + playerWins + ", Computer " + computerWins);
        } else {
            console.log("It's a tie. Score: Player " + playerWins + ", Computer " + computerWins);
        }
    }
    if (playerWins === 3) {
        console.log("Player wins the game!");
    } else {
        console.log("Computer wins the game!");
    }
}



game();