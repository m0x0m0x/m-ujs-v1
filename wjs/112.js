/* 
112: Looping Arrays: The For-of Loop
*/
// === Import Zone ===
import { mainHead, subHead, paraText } from "./funz.js";
import { restaurantP } from "./rest.js";
//===
mainHead("112: Looping Arrays: The For-of Loop");

// Loop over an array
const restaurantP2 = { ...restaurantP };
console.log(restaurantP2);

const menu = [...restaurantP2.starterMenuP, ...restaurantP2.mainMenuP];

paraText("Traditional Method with for loop printing");
// Traditional method of printing
for (let i = 0; i < menu.length; i++) console.log(menu[i]);

paraText("New Method");
// New loop for array
for (const item of menu) console.log(item);

// Getting index is difficult
