// Declarations of variables for DOM elements
// Based on Code Institute Rock Paper Scissors game 

const buttons = document.getElementsByClassName("button");
const playerScore = document.getElementsId("player-score");
const computerScore = document.getElementById("computer-score");
var playerChoice = document.getElementById("player-choice");
var computerChoice = document.getElementById("computer-choice");

let choices = ["rock", "paper", "scissors", "lizard", "spock"];

let result = document.getElementById('results');
let playerChoice;
let computerChoice;

//Event listeners for buttons

for (let button of buttons) {
    button.addEventListener('click', function (event) {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

// Adding function to show image corresponding with playerChoice and computerChoice
// Adding the randomnumber generator for the computerChoice
// Code based on Code Institute Rock Paper Scissors game

function playGame(playerChoice) {
    if (playerChoice == "0") {
        playerChoice = "rock";
    } else if (playerChoice == "1") {
        playerChoice = "paper";
    } else if (playerChoice == "2") {
        playerChoice = "scissors";
    } else if (playerChoice == "3") {
        playerChoice = "lizard";
    } else {
        playerChoice = "spock";
    }

    computerChoice = Math.floor(Math.random() * 5);
    if (computerChoice == "0") {
        computerChoice = "rock";
    } else if (computerChoice == "1") {
        computerChoice = "paper";
    } else if (computerChoice == "2") {
        computerChoice = "scissors";
    } else if (computerChoice == "3") {
        computerChoice = "lizard";
    } else {
        computerChoice = "spock";
    }

    checkWinner();
    gameOver();

}

// checkwinner function, by implementing all game rules.
// Starting increment player or computer score function

function checkWinner() {
    if (playerChoice == '0' && computerChoice == '2' || computerChoice == '3') {
        result.innerHTML = "Congratulations, you won this round!";
        incrementplayerScore();
    }
    else if (playerChoice == '0' && computerChoice == '1' || computerChoice == '4') {
        result.innerHTML = "You lost! Try again next round!";
        incrementComputerScore();
    }
    else if (playerChoice == '1' && computerChoice == '0' || computerChoice == '4') {
        result.innerHTML = "Congratulations, you won this round!";
        incrementplayerScore();
    }
    else if (playerChoice == '1' && computerChoice == '2' || computerChoice == '3') {
        result.innerHTML = "You lost! Try again next round!";
        incrementComputerScore();
    }
    else if (playerChoice == '2' && computerChoice == '1' || computerChoice == '3') {
        result.innerHTML = "Congratulations, you won this round!";
        incrementplayerScore();
    }
    else if (playerChoice == '2' && computerChoice == '0' || computerChoice == '4') {
        result.innerHTML = "You lost! Try again next round!";
        incrementComputerScore();
    }
    else if (playerChoice == '3' && computerChoice == '1' || computerChoice == '4') {
        result.innerHTML = "Congratulations, you won this round!";
        incrementplayerScore();
    }
    else if (playerChoice == '3' && computerChoice == '0' || computerChoice == '2') {
        result.innerHTML = "You lost! Try again next round!";
        incrementComputerScore();
    }
    else if (playerChoice == '4' && computerChoice == '0' || computerChoice == '2') {
        result.innerHTML = "Congratulations, you won this round!";
        incrementplayerScore();
    }
    else if (playerChoice == '4' && computerChoice == '1' || computerChoice == '3') {
        result.innerHTML = "You lost! Try again next round!";
        incrementComputerScore();
    }
    else {
        result.innerHTML = "It's a draw!";
    }
}

// The increment scores functions
// These functions are to declare the scores for the player and computer
// Based on Code Institute's 'Love Maths' score function code

function incrementPlayerScore() {
    let oldScore = playerScore.innerText;
    playerrScore.innerText = ++oldScore;
}

function incrementComputerScore() {
    let oldScore = computerScore.innerText;
    computerScore.innerText = ++oldScore;
}	