// Set counters to 0

let humanScore = 0
let computerScore = 0

// DOM constructs
const body = document.querySelector("body");
const div = document.createElement("div")
const divScore = document.createElement("div")
const divWinner = document.createElement("div")

function displayScore(){
    if (humanScore == 5){
        div.appendChild(divWinner);
        divWinner.textContent = "Human won! The final score is Human: " + humanScore + " and Computer score: " + computerScore;
        }
    
    else if (computerScore == 5){
        div.appendChild(divWinner);
        divWinner.textContent = "Computer won! The final score is Human: " + humanScore + " and Computer score: " + computerScore;
        }
    }

// Rock button

const btn_rock = document.querySelector(".rock");
btn_rock.onclick = () => {
    const humanChoice = "rock";
    const computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);
    body.appendChild(div);
    if (computerChoice === "paper") {
        div.textContent = "You lose! Paper beats Rock";
        div.appendChild(divScore);
        divScore.textContent = "Human: " + humanScore + " Computer: " + computerScore;
    }
    else if (computerChoice === "scissors"){
            div.textContent = "You win! Rock beats Scissors";
            div.appendChild(divScore);
            divScore.textContent = "Human: " + humanScore + " Computer: " + computerScore;
        }
    else if(computerChoice === "rock") {
            div.textContent = "You draw! You both chose Rock";
            div.appendChild(divScore);
            divScore.textContent = "Human: " + humanScore + " Computer: " + computerScore;
        }
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    displayScore();
    }


// Paper button

const btn_paper = document.querySelector(".paper");
btn_paper.onclick = () => {
    const humanChoice = "paper";
    const computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);
    body.appendChild(div);
    if (computerChoice === "scissors") {
        div.textContent = "You lose! Scissors beats Paper";
        div.appendChild(divScore);
        divScore.textContent = "Human: " + humanScore + " Computer: " + computerScore;
    }
    else if (computerChoice === "rock") {
        div.textContent = "You win! Paper beats Rock";
        div.appendChild(divScore);
        divScore.textContent = "Human: " + humanScore + " Computer: " + computerScore;
    }
    else if(computerChoice === "paper") {
        div.textContent = "You draw! You both chose Paper";
        div.appendChild(divScore);
        divScore.textContent = "Human: " + humanScore + " Computer: " + computerScore;
    }
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    displayScore();
    }


// Scissors button

const btn_scissors = document.querySelector(".scissors");
btn_scissors.onclick = () => {
    const humanChoice = "scissors";
    const computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);
    body.appendChild(div);
    if (computerChoice === "rock") {
        div.textContent = "You lose! Rock beats Scissors";   
        div.appendChild(divScore);
        divScore.textContent = "Human: " + humanScore + " Computer: " + computerScore;      
    }
    else if (computerChoice === "paper") {
        div.textContent = "You win! Scissors beats Paper";
        div.appendChild(divScore);
        divScore.textContent = "Human: " + humanScore + " Computer: " + computerScore;
    }
    else if(computerChoice === "scissors") {
        div.textContent = "You draw! You both chose Scissors";
        div.appendChild(divScore);
        divScore.textContent = "Human: " + humanScore + " Computer: " + computerScore;
    }
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    displayScore();
    }

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
// playGame();

//Optional: Displaying the final score
// console.log("Human Score: " + humanScore)
// console.log("Computer Score: " + computerScore)


