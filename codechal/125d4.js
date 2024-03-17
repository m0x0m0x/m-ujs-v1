/*  
125: Coding Challenge #4
*/
// === Import Zone ===
import { mainHead, subHead, paraText } from "../wjs/funz.js";

mainHead("125: Coding Challegne 4");
console.log("hey");

//1 . First Problems
const container = document.querySelector(".text-area"); // Replace with your element's id
const textarea = document.createElement("textarea");
container.appendChild(textarea);
document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
});
