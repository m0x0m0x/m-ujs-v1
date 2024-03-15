/*
122: Working with strings Part1
123: Working with strings Part2
124: Working with strings Part3
*/
//=== Import zone
import { mainHead, subHead, paraText } from "./funz.js";
//
mainHead(`
122: Working with strings Part1
123: Working with strings Part2
124: Working with strings Part3
`);

mainHead(`
122: Part 1 Below ⬇️
`);

// Old study section here
subHead("Revision Stuff in this area");
paraText("Quick test of sets");
const airlineSetP = new Set("PantyAir");
console.log(airlineSetP);

// Running initial tests - Airlines Related
subHead("Initial Testing");

// === Main Variables used in whole file
const airlineP = "Pynt Air Sniff";
const planeP = "696";
// ====

console.log(airlineP[1]);
console.log(`
Printing each letter from airlineP which is 'Pynt Air'
Printing each letter - ${airlineP[0]}
Printing each letter - ${airlineP[1]}
Printing each letter - ${airlineP[2]}
Printing each letter - ${airlineP[3]}
`);

paraText("Using Console.Log directrly to print letters");
console.log("jams"[0]);

// My testing
subHead("Loop to prin each letter");
// Doing a simple loop over a string
for (const ltr of airlineP) console.log(ltr);

subHead("Printing the Position Directly");
console.log("booty"[0]);

//length of string
console.log(airlineP.length);
console.log("noia".length);

subHead("String Methods");
paraText("Getting position index");
console.log(airlineP.indexOf("P"));

// lastIndexOf- Counts it in reverse
console.log(airlineP.lastIndexOf(""));

// Searching for entire workds using indexOf -1, not found
console.log(airlineP.indexOf("Air"));

subHead("Extracting Using Slice Method");
console.log(airlineP.slice(4));

// Storing into a variable or Data structure
// here also slicing with begin and end - Slcie right before the index
// End - beginning , length
let mySlice = airlineP.slice(2, 5);
console.log(mySlice);

// Extraction without indexes
paraText("Extract without knowing indexes");
console.log(airlineP.slice(0, airlineP.indexOf(" ")));

paraText("Reverse Extraction");
console.log(airlineP.slice(airlineP.lastIndexOf(" ") + 1));

paraText("negative begin argument");
// Extraction from reverse
console.log(airlineP.slice(-3));
console.log(airlineP.slice(1, -3));

subHead("Function to determine Seat Positon");
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  s == "B" || s == "E" ? console.log("😔 Middle Seat") : console.log("✅ GUD");
};

checkMiddleSeat("69B");
checkMiddleSeat("66A");
checkMiddleSeat("33E");

paraText("String Object Function");
console.log(new String("jams"));

// Further calling methods on this string object
console.log("jams"[(-3, 2)]);

// Checking strings
console.log(typeof new String("Jams").slice(1));

mainHead(`
123: Part 2 Below ⬇️
`);
