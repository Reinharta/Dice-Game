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

// function assessRoll (array) {

// }

// score array sum and add to total score
function scoring (array) {
    let scoreValues = [];
    for (let i = 0; i < array.length; i++) {
        // Evens or Odds
        if (array[i] % 2 === 0) {
           scoreValues.push(array[i]*5);
        }
        if (array[i] % 2 !== 0) {
            scoreValues.push(array[i]*10);
        }
        
    }
    function dupeCheck (array) {
       let result = { };
        for (let i = 0; i < array.length; i++) {
            if (!result[array[i]])
                result[array[i]] = 0;
            scoreValues.push(++result[array[i]]);
        }
         } 
    document.getElementById("score").innerHTML = scoreValues;
}

function runGame (roll, scoring) {
    return;
}
// call to roll at button click
// document.getElementById("rollButton").addEventListener("click", runGame (produceRoll(), scoring()));

// document.getElementById("rollButton").addEventListener("click",)

//*** find a way to call the functions/run all of them at button click***//
//** also consider functions inside one large function for scoring**//