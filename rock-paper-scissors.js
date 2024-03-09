function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

const choice_to_code = {
  rock: 0,
  paper: 1,
  scissors: 2,
};

function getComputerChoice() {
  const choices = Object.keys(choice_to_code);
  return choices[getRandomInt(0, choices.length)];
}

function getPlayerChoice() {
  return prompt('Please input "rock", "paper", or "scissors":');
}

let computer_player_result = [
  ["Draw!", "You win!", "You lose!"],
  ["You lose!", "Draw!", "You win!"],
  ["You win!", "You lose!", "Draw!"],
];

let end_round_message = [
  ["Rock ties with rock!", "Paper beats rock!", "Rock beats scissors!"],
  ["Paper beats rock!", "Paper ties with paper!", "Scissors beats paper!"],
  [
    "Rock beats scissors!",
    "Scissors beats paper!",
    "Scissors tie with scissors!",
  ],
];
function playRound(computerSelection, playerSelection) {
  const computerCode = choice_to_code[computerSelection];
  const playerCode = choice_to_code[playerSelection];
  const result = computer_player_result[computerCode][playerCode];
  const message = end_round_message[computerCode][playerCode];
  return { result: result, message: message };
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  console.log(
    `Player score: ${playerScore} - Computer score: ${computerScore}`
  );
  if (playerScore > computerScore) console.log("You win!");
  else if (playerScore < computerScore) console.log("You lose!");
  else console.log("Draw!");
}

playGame();
