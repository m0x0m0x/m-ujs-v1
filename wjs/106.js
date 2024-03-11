/*
Spread operator - Exapanding  array into all its eleements 
*/
// === Importing print functions from funz.js ===
import { mainHead, subHead, paraText } from "./funz.js";

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

// Starting
