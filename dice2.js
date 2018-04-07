"use strict"

// roll dice

function produceRoll () {
    let die4 = [Math.floor(Math.random() *4 + 1)];
    let die6 = [Math.floor(Math.random() *6 + 1)];
    let die8 = [Math.floor(Math.random() *8 + 1)];
    let die10 = [Math.floor(Math.random() *10 + 1)];
    let die12 = [Math.floor(Math.random() *12 + 1)];
    let die20 = [Math.floor(Math.random() *20 + 1)];
    let rollArray = die4.concat(die6, die8, die10, die12, die20);
    return rollArray;
}

// Roll array to be passed

// function assessRoll (rollArray) {
//     return rollArray;
// }

// Assign score values to roll

function rollScore (rollArray) {
    let scoreValues = [];
    for (let i = 0; i < rollArray.length; i++) {
        if (rollArray[i] % 2 === 0) {
            scoreValues.push(rollArray[i] * 5);
        }
        if (rollArray[i] % 2 !== 0) {
            scoreValues.push(rollArray[i] * 10);
        }
    }
    let rollScore = scoreValues.reduce(function(total, num){
        return total + num;
    }, 0)
    return rollScore;
}

// Produce sum of single roll

// function rollSum (scoreValues) {
//     let rollScore = scoreValues.reduce(function(total, num){
//         return total + num;
//     }, 0)
//     return rollScore;
// }

// Add roll sum to total score

// function totalScore (rollScore) {
//     let rollHistory = [];
//     rollHistory.push(rollScore);
//     let totalScore = [];
//     totalScore = rollHistory.reduce(function (total, num){
//         return total + num;
//     }, 0)
//     document.getElementById("totalScore").innerHTML = totalScore;
// }

// Run Game

function runGame (roll, rollScore, totalScore) {
//roll

//print roll
document.getElementById("allDice").innerHTML = roll;

// print roll score
document.getElementById("score").innerHTML = rollScore;

//assess/compile score

//roll again or end
let rollHistory = [];
    rollHistory.push(rollScore);
    let totalScore = [];
    totalScore = rollHistory.reduce(function (total, num){
        return total + num;
    }, 0)
    document.getElementById("totalScore").innerHTML = totalScore;
}


// Button click call
document.getElementById("rollButton").addEventListener("click", function () {runGame(produceRoll(), rollScore(totalScore(rollScore(produceRoll()))))})