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

let isContinuing = false;
while (isContinuing) {
    alert(getComputerChoice());
    isContinuing = confirm("Continue getting choice?");

}