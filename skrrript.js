function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3);
    if(choice == 0) return "rock";
    else if(choice == 1) return "scissors";
    else
    if(choice == 2) return "paper";
}

function playRound(computerSelection, playerSelection)
{
    playerSelection = playerSelection.toLowerCase();

    if(computerSelection == playerSelection)
    {
        console.log("It's a tie! both chose " + playerSelection);
        return "tie";
    }
    if(computerSelection == "rock" && playerSelection == "paper")
    {
        console.log("Congratulations! You chose Paper while the Computer chose Rock!");
        return "player";
    }
    if(computerSelection == "rock" && playerSelection == "scissors")
    {
        console.log("Awh, You chose Scissors, Computer chose Rock, you Lose! XAXAXA");
        return "computer";
    }
    if(computerSelection == "paper" && playerSelection == "rock")
    {
        console.log("Awh, You chose Rock, Computer chose Paper, you Lose! XAXAXA");
        return "computer";
    }
    if(computerSelection == "paper" && playerSelection == "scissors")
    {
        console.log("Congratulations! You chose Scissors while the Computer chose Paper!");
        return "player";
    }
    if(computerSelection == "scissors" && playerSelection == "paper")
    {
        console.log("Awh, You chose Paper, Computer chose Scissors, you Lose! XAXAXA");
        return "computer";
    }
    if(computerSelection == "scissors" && playerSelection == "rock")
    {
        console.log("Congratulations! You chose Rock while the Computer chose Scissors!");
        return "player";
    }
}

function getPlayerChoice()
{
    return prompt("Choose, Rock, Paper, Scissors! (Capitalization does not matter)");
}

function game(winnertonum)
{
    let computernum = 0;
    let playernum = 0;
    let winner = "";
    let loserScore;
    let win;
    if(winnertonum == 0)
    {
    console.log("You cheeky fucker, yes I know you can put 0, you retard")
    }
    else
    {
    while(computernum < winnertonum && playernum < winnertonum)
    {
        win = playRound(getComputerChoice(), getPlayerChoice());
        if(win == "player")
        playernum++;
        else if (win == "computer")
        computernum++;
    }
    if(computernum == winnertonum)
    {
        winner = "The Computer wins "
        loserScore = playernum;
    }
    if(playernum == winnertonum)
    {
        winner = "The Player wins "
        loserScore = computernum;
    }
    console.log(winner + "With a score of " + winnertonum + " - " + loserScore);
}
}

function chooseRoundNum()
{
    game(prompt("Please choose first to which round wins"));
}

chooseRoundNum();