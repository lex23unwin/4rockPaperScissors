let computerOptions = ["Rock", "Paper", "Scissors"];
const WINNING_TOTAL = 5;
let playerScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;

const buttons = Array.from(document.querySelectorAll("button"));

buttons.forEach((button) => 
{
    button.addEventListener("click", clickBtn)
})

function clickBtn(e) 
{
    playerChoice = e.target.id;
    computerChoice = computerSelection();
    playRound(playerChoice, computerChoice);
}

function computerSelection()
{
    return computerOptions[Math.floor(Math.random * computerOptions.length)]
}

function playRound(playerChoice, computerChoice) 
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
        gameOver();
    } 
    else if (computerScore == WINNING_SCORE)
    {
        roundResults.textContent = "You lose";
        gameOver();
    }
}

function gameOver() {
    buttons.forEach((button) =>
    {
        button.removeEventListener("click", clickBtn)
    })
}