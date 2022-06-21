function computerLogic() {
       return Math.random();
}
//Computer Randomness

let x = computerLogic();

if (x <= 0.33) {
    computerSelect = "rock";
}else if (0.33 < x <= 0.67) {
    computerSelect = "paper";
}else {
    computerSelect = "scissors";
}
//Computer Rock Paper Scissors RNG

function round (userSelect, computerSelect) {
    if (userSelect == "rock") {
        if(computerSelect == "rock") {
            roundOutcome = "Rock hits rock, nothing happens!";
        }else if(computerSelect == "paper") {
            roundOutcome = "Paper beats rock, computer wins!";
        }else {
            roundOutcome = "Rock beats scissors, you win!";
        }
    }else if (userSelect == "paper") {
            if(computerSelect == "rock") {
                roundOutcome = "Paper beats rock, you win!";
            }else if(computerSelect == "paper") {
                roundOutcome = "Paper hits paper, nothing happens!";
            }else {
                roundOutcome = "Scissors cuts paper, computer wins!";
            }
    }else {
            if(computerSelect == "rock") {
                roundOutcome = "Rock beats scissors, computer wins!";
            }else if(computerSelect == "paper") {
                roundOutcome = "Scissors cuts paper, you win!";
            }else {
                roundOutcome = "Scissors hits scissors, nothing happens!";
            }
        }
        return roundOutcome;
}
//Computer and User play one round of RPS

let userScore = 0;
let computerScore = 0;

function score() {
    let result = round();
    if (result == "Paper beats rock, computer wins!", "Scissors cuts paper, computer wins!",
    "Rock beats scissors, computer wins!" ) {
        computerScore++;
    } else if (result == "Rock beats scissors, you win!","Paper beats rock, you win!",
    "Scissors cuts paper, you win!"){
        userScore++;
    } else {
        null;
    }

    console.log("Final Score:");
    console.log(computerScore); //Computer
    console.log(userScore); //User
}

function game() {
    for (let i = 0; i < 5; i++) {
        let user = prompt("Please choose rock, paper, or scissors to play.");
        let userSelect = user.toLowerCase();
        round(userSelect, computerSelect);
        console.log(roundOutcome);
        score(userScore, computerScore);
    }
}

game();
