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


let user = prompt("Please choose rock, paper, or scissors to play.");
let userSelect = user.toLowerCase();
//User input is not case sensitive

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
                roundOutcome = "Rock beats scissors, computer wins!!";
            }else if(computerSelect == "paper") {
                roundOutcome = "Scissors cuts paper, you win!";
            }else {
                roundOutcome = "Scissors hits scissors, nothing happens!";
            }
        }
    return roundOutcome;
}
//Computer and User play one round of RPS

let roundwinner = round(userSelect, computerSelect);

console.log(userSelect);
console.log(computerSelect);
console.log(roundwinner);
