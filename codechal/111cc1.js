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
console.log(players1, players2);
console.log(`
Player 1 = ${players1}
Player 2 = ${players2}
`);

//2 . Create one variable and goal keeper and reminaing array of all other players
subHead(
  "2 . Create one variable and goal keeper and reminaing array of all other players"
);
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3 .One array with all players
subHead("3 .One array with all players");
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
console.table(allPlayers);

// 4. Create new array , player1 + 3 other players
subHead("4. Create new array , player1 + 3 other players");
const players1Final = [...players1, "Thiago", "Coutinho", "Periscic"];
console.log(players1Final);

//5. Create variables based on odds object

subHead("5. Create variables based on odds object");
