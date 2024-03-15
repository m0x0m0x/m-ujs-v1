/*  
121: Coding Challenge #3
*/
// === Import Zone ===
import { mainHead, subHead, paraText } from "../wjs/funz.js";
import { game as gPusy, gameEvents as gE } from "./game1.js";
// ==

mainHead("121: Coding Challenge #");
console.log(gPusy);
console.log(gE);

//1. Create event with unique events
subHead("1: Create unique events ");

paraText("Examining Values which we need");
const eventS = [...new Set(gE.values())];
console.log(eventS);

//2. Deleting an event
subHead("2. Removing keys");
gE.delete(64);
console.log(gE);

//3. Calvulate Average
subHead("3. Calculating Average");
const time = [...gE.keys()].pop();
console.log(`Average = ${time / gE.size}`);
console.log(time);
