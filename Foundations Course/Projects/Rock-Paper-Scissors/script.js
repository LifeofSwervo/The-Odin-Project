let computerChoice;
let playerChoice;
let round;


function getPlayerChoice() {
    const choice = parseInt(prompt('Choose Rock (1), Choose Paper (2), Choose Scissors (3): '));

    // Choose between Rock, Paper, or Scissors
    if (choice == 1) {
        console.log('You chose Rock');
        return 'Rock'
    } else if (choice == 2) {
        console.log('You chose Paper');
        return 'Paper'
    } else if (choice == 3) {
        console.log('You chose Scissors');
        return 'Scissors'
    } else {
        console.log('Invalid Choice');
        // Add (return getPlayerChoice())
    }
}

function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];

    // Generate number of 0 through 2
    let randNum = Math.floor(Math.random() * 3);

    return options[randNum];
}

function playRound(playerChoice, computerChoice) {
    const playerWin = 'Player Wins!'
    let result;
    if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
        result = playerWin;
    } else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
        result = playerWin;
    } else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
        result = playerWin;
    } else if (playerChoice === computerChoice) {
       result = 'Tie';
    } else {
        result = 'Computer Wins!'
    }

    return result;
}
function main() {
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 0; i < 4; i++) {
        computerChoice = getComputerChoice()
        playerChoice= getPlayerChoice()
        round = playRound(playerChoice, computerChoice);

        if (round === 'Computer Wins!') {
            computerScore++;
        } else if (round === 'Player Wins!') {
            playerScore++;
        } else {
            continue;
        }
        
        // Choices 
        console.log('Player Choice: ', playerChoice);
        console.log('Computer Choice: ', computerChoice);

        //Separator
        console.log('-------------------------------------');

        //Scores
        console.log('Player: ', playerScore);
        console.log('Computer: ', computerScore);
        console.log('Round Number: ', i + 1)
    }

    console.log('Round: ', round)
}

main();