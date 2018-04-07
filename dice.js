"use strict"

// roll dice - produce number //

function produceRoll () {
    let d4 = document.getElementById("die4");
    let d6 = document.getElementById("die6");
    let d8 = document.getElementById("die8");
    let d10 = document.getElementById("die10");
    let d12 = document.getElementById("die12");
    let d20 = document.getElementById("die20");
    let die4 = [Math.floor(Math.random() *4 + 1)];
    let die6 = [Math.floor(Math.random() *6 + 1)];
    let die8 = [Math.floor(Math.random() *8 + 1)];
    let die10 = [Math.floor(Math.random() *10 + 1)];
    let die12 = [Math.floor(Math.random() *12 + 1)];
    let die20 = [Math.floor(Math.random() *20 + 1)];
    d4.innerHTML = die4;
    d6.innerHTML = die6;
    d8.innerHTML = die8;
    d10.innerHTML = die10;
    d12.innerHTML = die12;
    d20.innerHTML = die20;
    let rollArray = die4.concat(die6, die8, die10, die12, die20);
    return rollArray;
}


// assess dice and create new score array

function assessRoll (rollArray = produceRoll()) {
    return rollArray;
}

// Check for Duplicates
// function dupeCheck (array) {
//        let dupeCount = [0];
//        let dupeList = [];
//        let sortedArr = array.sort(function(a, b){return a-b});
//         for (let i = 0; i < sortedArr.length; i++) {
//             if (sortedArr[i + 1] == sortedArr[i]) {
//             dupeList.push(sortedArr[i]);
//             ++dupeCount;
//             }
//         }
//         // console.log(dupeList)
//         // console.log(dupeCount)
//         let duplicateTotals = [];
//         duplicateTotals.push(dupeList[i], dupeCount[i]);
//         console.log(duplicateTotals);
//     // }

//     // let starting = {};
//     // let reducer = function (tally, number) {
//     //     let i = 0;
//     //     if (!tally[number]) {
//     //         tally[number] = 1;
//     //     } else {
//     //         tally[number] = tally[number] + 1;
//     //     }
//     //     i++;
//     //     console.log(tally);
//     // }
//     // array.reduce(function (reducer, starting));
// }

// Assign score values for Evens/Odds
function scoring (rollArray) {
    let scoreValues = [];
    for (let i = 0; i < rollArray.length; i++) {
        // Evens or Odds
        if (rollArray[i] % 2 === 0) {
           scoreValues.push(rollArray[i]*5);
        }
        if (rollArray[i] % 2 !== 0) {
            scoreValues.push(rollArray[i]*10);
        }
        
    }
    return scoreValues;
}

// Produce Sum of single roll 
function rollScoring (scoreValuesArr) {
    let scoreHistArr = [];
    let rollScore = scoreValuesArr.reduce(function(total, num){
    return total + num;
  }, 0);
    document.getElementById("score").innerHTML = rollScore;
//     scoreHistArr.push(rollScore);
//     let totalScore = scoreHistArr.reduce(function(total, num){
//     return total + num;
// });
document.getElementById("totalScore").innerHTML = totalScore; 
return totalScore;
}

//add roll score to total score
// function totalScore (scoreHistArr) {
// let totalScore = scoreHistArr.reduce(function(total, num){
//     return total + num;
// });
// document.getElementById("totalScore").innerHTML = totalScore; 
// }
// print total score
// function scorePrint (totalScore) {

   
// }
// Run Game
function runGame (scoreSum, rollScore) {
    let scoreHistArr = [];
    scoreHistArr.push(rollScore);
    let totalScore = scoreHistArr.reduce(function(total, num){
    return total + num;
});
    if (scoreSum >= 1000) {
        console.log("You've met your goal");
    }
    else {
        document.getElementById("status").innerHTML = "Keep Rolling";
    }
}
// call to roll at button click
document.getElementById("rollButton").addEventListener("click", function () {runGame(rollScoring(scoring(assessRoll())));
});

// call to add roll score to total score
// document.getElementById("scoreButton").addEventListener("click", function () {scorePrint(totalScore(rollScoring(rollArray(produceRoll))))})

// document.getElementById("rollButton").addEventListener("click",)

//*** find a way to call the functions/run all of them at button click***//
//** also consider functions inside one large function for scoring**//