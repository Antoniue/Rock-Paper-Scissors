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
    const resultMsg = document.querySelector('.result');
    const playerScore = document.querySelector('.playerScore');
    const computerScore = document.querySelector('.computerScore');
    if(computerSelection === playerSelection)
    {
        console.log("It's a tie! both chose " + playerSelection);
        resultMsg.innerHTML = "It's a tie! both chose " + playerSelection;
        return "tie";
    }
    if(computerSelection === "rock" && playerSelection === "paper")
    {
        console.log("Congratulations! You chose Paper while the Computer chose Rock!");
        resultMsg.innerHTML = "Congratulations! You chose Paper while the Computer chose Rock!";
        playerResult++;
        playerScore.innerHTML = playerResult;
        return "player";
    }
    if(computerSelection === "rock" && playerSelection === "scissors")
    {
        console.log("Awh, You chose Scissors, Computer chose Rock, you Lose! XAXAXA");
        resultMsg.innerHTML = "Awh, You chose Scissors, Computer chose Rock, you Lose! XAXAXA";
        computeResult++;
        computerScore.innerHTML = computeResult;
        return "computer";
    }
    if(computerSelection === "paper" && playerSelection === "rock")
    {
        console.log("Awh, You chose Rock, Computer chose Paper, you Lose! XAXAXA");
        resultMsg.innerHTML = "Awh, You chose Rock, Computer chose Paper, you Lose! XAXAXA";
        computeResult++;
        computerScore.innerHTML = computeResult;
        return "computer";
    }
    if(computerSelection === "paper" && playerSelection === "scissors")
    {
        console.log("Congratulations! You chose Scissors while the Computer chose Paper!");
        resultMsg.innerHTML = "Congratulations! You chose Scissors while the Computer chose Paper!";
        playerResult++;
        playerScore.innerHTML = playerResult;
        return "player";
    }
    if(computerSelection === "scissors" && playerSelection === "paper")
    {
        console.log("Awh, You chose Paper, Computer chose Scissors, you Lose! XAXAXA");
        resultMsg.innerHTML = "Awh, You chose Paper, Computer chose Scissors, you Lose! XAXAXA";
        computeResult++;
        computerScore.innerHTML = computeResult;
        return "computer";
    }
    if(computerSelection === "scissors" && playerSelection === "rock")
    {
        console.log("Congratulations! You chose Rock while the Computer chose Scissors!");
        resultMsg.innerHTML = "Congratulations! You chose Rock while the Computer chose Scissors!";
        playerResult++;
        playerScore.innerHTML = playerResult;
        return "player";
    }
}

function announceWinner()
{
    const playerScore = document.querySelector('.playerScore');
    const computerScore = document.querySelector('.computerScore');
    playerScore.innerHTML = playerResult;
    computerScore.innerHTML = computeResult;
    let string = "Game over! winner is: ";
    if(playerResult > computeResult)
    alert(string+"the Player!");
    else
    alert(string+"the Computer!");
    playerResult = 0;
    computeResult = 0;
    roundNumber = 0;
    window.location.reload();
}


let playerResult = 0;
let computeResult = 0;

let roundNumber;
const roundNumberButton = document.querySelector('.submitRoundNum');
roundNumberButton.addEventListener('click', () => {
    roundNumber = document.querySelector('.roundInput').value;
    if(roundNumber == 0)
    {
        alert("Can't play 0 rounds!");
        window.location.reload();
    }
    if(isNaN(roundNumber))
    {
        alert("You dumbass please use a number");
        window.location.reload();
    }
    console.log(roundNumber);
    if(roundNumber != null)
{
const buttons = document.querySelectorAll('.playerButton');
buttons.forEach(playerButton => {
playerButton.addEventListener('click', () => {
    playRound(getComputerChoice(), playerButton.getAttribute('id'));
    if(playerResult == roundNumber || computeResult == roundNumber)
    announceWinner();
});
});
}
},{ once: true } );



