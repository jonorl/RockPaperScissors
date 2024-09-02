// Set counters to 0
let humanScore = 0
let computerScore = 0

// Function to randomly return rock paper or scissors
function getComputerChoice () { 
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
}

// Function to add human prompt
function getHumanChoice() {
    let selection = String(prompt('Choose a value', 'Rock, Paper or Scissors')).toLowerCase();
    return selection
}

// Function to start a round
function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
            console.log("You win! Rock beats Scissors");
            humanScore++;
        }
    else if( humanChoice === "rock" && computerChoice === "rock") {
            console.log("You draw! You both chose Rock");
        }
    else if( humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper");
            computerScore++;    
        }
    else if( humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            humanScore++;       
        }
    else if( humanChoice === "paper" && computerChoice === "paper") {
            console.log("You draw! You both chose Paper");
        }
    else if( humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors");
            computerScore++;            
        }
    else if( humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats Paper");
            humanScore++;            
        }
    else if (humanChoice === "scissors" && computerChoice === "scissors") {
            console.log("You draw! You both chose Scissors");
        }
}

//Function to play the game
function playGame() {

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
}

//Playing 5 rounds
playGame();
playGame();
playGame();
playGame();
playGame();

//Optional: Displaying the final score
console.log("Human Score: " + humanScore)
console.log("Computer Score: " + computerScore)
