function getComputerChoice() {
    let random = Math.random();

    if (random < 1/3) {
        choice = "rock";
    } else if (random < 2/3) {
        choice = "paper";
    } else {
        choice = "scissor";
    }
}