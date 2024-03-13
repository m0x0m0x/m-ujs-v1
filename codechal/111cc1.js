/*  
Coding Challenge #1
*/
// === Import Zone ===

import { mainHead, subHead, paraText } from "../wjs/funz.js";
import { game as gPusy } from "./game1.js";
// ===

mainHead("111 Coding Challenge #1");

subHead("View object");
console.table(gPusy);

//1. Creating 2 players
subHead("1. Creating two player");

const [players1, players2] = gPusy.players;
console.log();
