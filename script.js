let computerOptions = ["rock", "paper", "scissors"]
let playerScore = 0;
let computerScore = 0;
const WINNING_SCORE = 5;

let computerChoice;
let playerChoice;

const roundResults = document.querySelector("#game-updates");
const playerTotal = document.querySelector("#player-total");
const computerTotal = document.querySelector("#computer-total");

const buttons = Array.from(document.querySelectorAll(".button"));

function computerSelector() 
{
    let index = Math.floor(Math.random() * computerOptions.length)
    return computerOptions[index];
}

buttons.forEach( (button) => 
{
    button.addEventListener("click", () => 
    {
        playerChoice = button.id;
        computerChoice = computerSelector();
        singleRound(playerChoice, computerChoice);
    })
})


function singleRound(playerChoice, computerChoice)
{
    if ((playerChoice == "rock" && computerChoice == "scissors") 
            || (playerChoice == "scissors" && computerChoice == "paper")
            || (playerChoice == "paper" && computerChoice == "rock"))
    {
        
        roundResults.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
        playerScore++;
    } 
    else if (playerChoice == computerChoice)
    {
        roundResults.textContent = `Draw both players chose ${playerChoice}`
    } 
    else 
    {
        roundResults.textContent = `You lose ${computerChoice} beats ${playerChoice}`
        computerScore++;
    }

    playerTotal.textContent = `Player score: ${playerScore}`;
    computerTotal.textContent = `Computer score: ${computerScore}`;

    if (playerScore == WINNING_SCORE)
    {
        roundResults.textContent = "You win";
    } 
    else if (computerScore == WINNING_SCORE)
    {
        roundResults.textContent = "You lose";
    }
}

