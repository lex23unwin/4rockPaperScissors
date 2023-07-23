let computerOptions = ["Rock", "Paper", "Scissors"];
const WINNING_TOTAL = 5;
let playerScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;

const buttons = Array.from(document.querySelectorAll("button"));

buttons.forEach((button) => {
    button.addEventListener("click", clickBtn)
})

function clickBtn (e) {
    playerChoice = e.target.id;
    computerChoice = computerSelection();
    playRound(playerChoice, computerChoice);
}
