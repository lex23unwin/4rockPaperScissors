let computerOptions = ["Rock","Paper", "Scissors"];   
let playerScore = 0;
let computerScore = 0;
const WINNING_SCORE = 5;
let computerChoice;
let playerChoice;
const gameResults = document.querySelector(".game-results");
const gameStandings = document.querySelector(".game-standings");
const buttons = document.querySelectorAll(".image-container");
let playAgainButton = document.querySelector(".play-again");

gameOn();

function computerSelector() {
    let index = Math.floor(Math.random() * computerOptions.length)
    return computerOptions[index];
}

playAgainButton.addEventListener("click", () => {
    playAgainButton.style.display = "none";
    gameResults.textContent = "Last game results: _______";       
    gameStandings.textContent = "Game standings: _______";   
    playerScore = 0;
    computerScore = 0;
    gameOn();
})

function clickBtn(e)
{
    playerChoice = e.target.id;
    computerChoice = computerSelector();
    singleRound(playerChoice, computerChoice);
}

function gameOn()
{
    buttons.forEach( (button) => {
        button.addEventListener("click", clickBtn)
    })
}

function gameOver() 
{
    buttons.forEach( (button) => 
    {
        button.removeEventListener("click", clickBtn)
    })
}

function singleRound(pc, cc)
{
    if ((pc === "Rock" && cc === "Scissors")
            || (pc === "Scissors" && cc ==="Paper")
            || (pc === "Paper" && cc === "Rock"))
      {
        gameResults.textContent = `You win! ${pc} beats ${cc}`;
        playerScore++;
      }
    else if (pc === cc)
    {
        gameResults.textContent = `Draw both players chose ${pc}`
    } 
    else 
    {
        gameResults.textContent = `You lose ${cc} beats ${pc}`
        computerScore++;
    }

    gameStandings.textContent = `Your score: ${playerScore} || Computer score: ${computerScore}`;

    if (playerScore === WINNING_SCORE)
    {
        gameResults.textContent = "You win!";
        gameOver();
        playAgainButton.style.display = "block";
    } 
    else if (computerScore === WINNING_SCORE)
    {
        gameResults.textContent = "You lose!";
        gameOver();
        playAgainButton.style.display = "block";
        
    }
}