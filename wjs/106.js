/*
Spread operator - Exapanding  array into all its eleements 
*/
// === Importing print functions from funz.js ===
import { mainHead, subHead, paraText } from "./funz.js";
import restaurantP from "./105.js";

// Write header

mainHead(`
106: Spread operator
- Expand an array into all its elements unpaccking
`);
paraText(`
Since ES6 this spread operator is for unpacking arrays
`);

subHead("Simple examples");
const arr = [7, 7, 8];

// Old method of adding alements
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.table(badNewArr);

/* 
ES6 method for unpacking is using the spread operator 
*/
paraText("Printing the new array with spead operator : ");
const newArr2 = ["a", "b", ...arr];
console.log(newArr2);
console.table(newArr2);

// new array

const newMeny = [...restaurantP.mainMenuP, "Smegma"];
console.log(newMeny);

// Array copy

// Shallow copying
const mainMenuCopy = [...restaurantP.mainMenuP];
