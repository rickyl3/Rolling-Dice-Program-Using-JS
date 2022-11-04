/*
    Ricky Leung
    Period 7/8 Odd
    My program simulates the rolling of 2 dice. Whenever you press
    the button to roll 2 dice, 2 random numbers between 1 and 6 are generated.
    Their values and total will then be displayed.
*/

function initialize() {
    dice1 = document.getElementById("dice1");
    dice2 = document.getElementById("dice2");
    total = document.getElementById("total");
}
function rollDice() {
    dice1Value = Math.floor((Math.random() * 6) + 1);
    dice2Value = Math.floor((Math.random() * 6) + 1);
    display();
}
function display() {
    dice1.innerHTML = "Dice 1: " + dice1Value;
    dice2.innerHTML = "Dice 2: " + dice2Value;
    total.innerHTML = "Total: " + (dice1Value + dice2Value);
}