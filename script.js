function getComputerChoice() {
    let random = Math.random();

    if (random < 1/3) {
        return choice = "rock";
    } else if (random < 2/3) {
        return choice = "paper";
    } else {
        return choice = "scissor";
    }
}

function getHumanChoice() {
    return prompt("rock, paper, scissor?", "rock").toLowerCase();
}

function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "paper") {
            console.log("It's a draw! Paper vs Paper.");
        } else if (humanChoice === "scissor" && computerChoice === "paper") {
            console.log("You win! Scissor beats Paper.");
            humanScore++;
        } else if (humanChoice === "rock" && computerChoice === "scissor") {
            console.log("You win! Rock beats Scissor.");
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissor") {
            console.log("You lose! Scissor beats Paper.");
            computerScore++;
        } else if (humanChoice === "scissor" && computerChoice === "scissor") {
            console.log("It's a draw! Scissor vs Scissor.");
        } else if (humanChoice === "rock" && computerChoice === "rock") {
            console.log("It's a draw! Rock vs Rock.");
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats Rock.");
            humanScore++;
        } else if (humanChoice === "scissor" && computerChoice === "rock") {
            console.log("You lose! Rock beats Scissor.");
            computerScore++;
        }
    }

    var humanSelection;
    var computerSelection;

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)
    
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)

    if (computerScore > humanScore) {
        console.log("You loose the whole game.")
    } else if (humanScore > computerScore) {
        console.log("You win the whole game!")
    } else {
        console.log("It's a draw!")
    }
}

playGame()