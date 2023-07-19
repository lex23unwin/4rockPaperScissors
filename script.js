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
