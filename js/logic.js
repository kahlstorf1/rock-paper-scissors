function computerLogic() {
       return Math.random();
}
//Computer Randomness

let x = computerLogic();

if (x <= 0.33) {
    computerSelect = "Rock";
} else if (0.33 < x <= 0.67) {
    computerSelect = "Paper";
} else {
    computerSelect = "Scissors";
}
//Computer Rock Paper Scissors RNG

console.log(computerSelect);