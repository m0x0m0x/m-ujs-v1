/*
108: Short Circuiting (&& and || ) 
*/

// === Import Zone ===
import { mainHead, subHead, paraText } from "./funz.js";
// ===

mainHead(`
108: Short Circuiting with && and ||
`);

subHead("Or Operator");
paraText(`
Look at the code , you can see which ones are 'truthy' or 'falsey'
`);
// Use any data type, return any data type, short-circuiting - Short circuit evaluation
console.log(3 || "nina");
console.log("" || "nina");
console.log(true || 0);
console.log(undefined || null);

// This is an example of the first word encountered , to be a truthy value
console.log(undefined || 0 || "" || "cussy" || 23 || null);
