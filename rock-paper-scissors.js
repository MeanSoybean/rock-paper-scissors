function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

let choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
    let choice = choices[getRandomInt(0, choices.length)];
    return choice;
}

let choice_to_code = {
    "rock": 0,
    "paper": 1,
    "scissors": 2,
}

let computer_player_result = [
    ["Draw!","You win!","You lose!"],
    ["You lose!","Draw!","You win!"],
    ["You win!","You lose!","Draw!"]
]

function playRound(computerSelection, playerSelection) {
    let computerCode = choice_to_code[computerSelection];
    let playerCode = choice_to_code[playerSelection];
    return computer_player_result[computerCode][playerCode]; 
}
