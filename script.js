function random(number) {
    return Math.floor(Math.random()*number);
}

function getComputerChoice() {
    const rock_paper_scissors = ["Rock", "Paper", "Scissors"];
    return rock_paper_scissors[random(3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    switch(computerSelection) {
        case "Rock":
            if(playerSelection === "rock")
                return "HaHa What a coincidense";
            else if(playerSelection === "paper")
                return "You Win! Paper beat Rock";
            else if(playerSelection === "scissors")
                return "You Lose! Rock beat Scissors";
        case "Paper":
            if(playerSelection === "rock")
                return "You Lose! Paper beat rock";
            else if(playerSelection === "paper")
                return "HaHa What a coincidense";
            else if(playerSelection === "scissors")
                return "You Win! Scissors beat Paper";
        case "Scissors":
            if(playerSelection === "rock")
                return "You Win! Rock beat Scissors";
            else if(playerSelection === "paper")
                return "You Lose! Scissors beat Paper";
            else if(playerSelection === "scissors")
                return "HaHa! What a coincidense";            
   }
}

function game() {
    let score = 0;
    for(let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper, Scissors");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        
        let result = playRound(playerSelection, computerSelection);
        if(result.charAt(4) === "W")
            score++;
        else if(result.charAt(4) === "L")
            score--;        
    }
    if(score > 0)
        console.log("You win the game");
    else if(score === 0)
        console.log("Neither win nor lose");
    else
        console.log("Sorry You lose");
}

game();