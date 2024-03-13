/*
114: Optional Chaining for objects - OC
*/
// === Import Zone ===
import { mainHead, subHead, paraText } from "./funz.js";
import { restaurantP2 as re } from "./rest.js";
//===

mainHead("114: Optional Chaining for objects");

paraText("Printing the restaurant");
const re2 = { ...re };
console.log(re2);

paraText("Definign the issue");
if (re2.HoursP && re2.HoursP.sa) console.log(re2.HoursP.sa.open);
if (re2.HoursP.fr) console.log(re2.HoursP.fr.open);

paraText("OC Tests Here");
// with OC
console.log(re2.HoursP.sa?.open);
