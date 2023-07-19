function getComputerChoice() 
{
    let randomNumber = (Math.floor(Math.random() * 3));
    if (randomNumber === 0)
    {
        return "rock";
    }
    else if (randomNumber === 1)
    {
        return "paper";
    }
    return "scissors"
}

function singleRound(playerSelection, computerSelection, playerScore, computerScore)
{
    if (playerSelection === "rock")
    {
        if (computerSelection === "rock")
        {
            console.log(`You Tie! ${playerSelection} ties ${computerSelection}`);
            return `You Tie! ${playerSelection} ties ${computerSelection}`;
        }
        else if (computerSelection === "paper")
        {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection === "paper")
    {
        if (computerSelection === "rock")
        {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
        else if (computerSelection === "paper")
        {
            console.log(`You Tie! ${playerSelection} ties ${computerSelection}`);
            return `You Tie! ${playerSelection} ties ${computerSelection}`;
        }
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else /*playerSelection === "scissors"*/
    {
        if (computerSelection === "rock")
        {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return "You Lose! ${computerSelection} beats ${playerSelection}";
        }
        else if (computerSelection === "paper")
        {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
        console.log(`You Tie! ${playerSelection} ties ${computerSelection}`);
        return `You Tie! ${playerSelection} ties ${computerSelection}`;
    }
}

function getMeaning(sR) {
    let sRslice = sR.slice(0,7);
    if (sRslice === "You Los")
    {
        return "Lose"
    }
    else if (sRslice === "You Win")
    {
        return "Win"
    }
    else /*You Tie*/
    {
        return "Tied";
    }
}

function game() 
{
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++)
    {
        let cC = getComputerChoice();
        let pC = prompt("Please enter one of: rock, paper, scissors");
        while (pC !== "rock" && pC !== "paper" && pC !== "scissors")
        {
            pC = prompt("Please enter one of: rock, paper, scissors exactly as shown on screen");
        }
        let sR = singleRound(pC, cC);
        let gM = getMeaning(sR);
        if (gM == "Win") {
            playerScore += 1;
        }
        else if (gM == "Lose") {
            computerScore += 1;
        }
    }
    if (playerScore > computerScore) {
        console.log("YOU WIN! WOOOO");
    }
    else if (computerScore > playerScore) {
        console.log("you lost oof");
    }
    else {
        console.log("YOU TIED EH");
    }
}