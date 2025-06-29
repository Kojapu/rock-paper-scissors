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
    return prompt("rock, paper, scissor?", "rock")
}