const computerChoice = getComputerChoice();
const playerChoice = getPlayerChoice();

function getPlayerChoice() {
    const choice = prompt('Choose Rock (1), Choose Paper (2), Choose Scissors (3): ');

    // Choose between Rock, Paper, or Scissors
    if (choice == 1) {
        return ('You chose Rock');
    } else if (choice == 2) {
        return ('You chose Paper');
    } else if (choice == 3) {
        return ('You chose Scissors');
    } else {
        return ('Invalid Choice');
    }
}

function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];

    // Generate number of 0 through 2
    let randNum = Math.floor(Math.random() * 3);

    return options[randNum];
}

function playRound(playerChoice, computerChoice) {

}

console.log(computerChoice);
