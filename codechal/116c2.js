/*  
Coding Challenge #2
*/
// === Import Zone ===

import { mainHead, subHead, paraText } from "../wjs/funz.js";
import { game as gPusy } from "./game1.js";
// ===

mainHead("Coding Challenge 2");
console.table(gPusy);

/*
 1. Loop Over game scored array and print each player name to the 
 console, along with the goal
 - Referrign to 115.js for notes 
*/
subHead("Q1: Loop Over array");
console.table(gPusy.scored);

paraText("DC array");
//extract array into its own varaiable
const goalS = gPusy.scored;
console.table(goalS);

paraText("Attempt1");
// Loop testing - Working Solution
for (const [n, g] of goalS.entries()) {
  console.log(`Goal ${n}: ${g}`);
}

subHead("2: Loop Calculations");
/* 
2. Use a loop to calculate the average odd and log it to the console
*/
// Extract odds arrat
const oddsP = gPusy.odds;
console.table(oddsP);
console.log(`oddsP type = ${typeof oddsP}`);

// Since oddsP is an object
paraText("Printing out keys and values");
console.log(Object.keys(oddsP));
console.log(Object.values(oddsP));

// DC values
const oddsPvalues = Object.values(oddsP);
console.log(`oddsPvalues typeof = ${typeof oddsPvalues}`);

for (let num of oddsPvalues.entries()) {
  console.log();
}

// To proceed write a function that can calculate the array
function averPusy(arr) {
  let sum = 0;
  for (const element of arr) {
    sum += element;
  }
  let panty = sum / arr.length;
  return panty;
}
// averPusy(oddsP);
