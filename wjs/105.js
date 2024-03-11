/*
Destructuring Objects
*/

// === Importing print functions from funz.js ===
import { mainHead, subHead } from "./funz";

// Write header

mainHead("105: Destructuring Objects");

// Main Object that will be used
// Note you added P at the end to avoid conflicts

const restaurantP = {
  nameP: "Woman Juices",
  locationP: "Sweaty Gym Booties",
  categoriesP: ["Sno", "Far", "Sca", "Pis", "Spi"],
  starterMenuP: ["Swea", "Pits", "Pan"],
  mainMenuP: ["Jui", "Sti", "Smel"],

  // new additions
  openingHoursP: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenuP[starterIndex], this.mainMenuP[mainIndex]];
  },
};

// Doing destructing with curly brances

const { nameP, openingHoursP, categoriesP } = restaurantP;
console.log(nameP, openingHoursP, categoriesP);
console.table(nameP, openingHoursP, categoriesP);

// Changing variable name from property names

console.log(
  `
%c Changing the variable names
`,
  "color:orange;font-size:15px"
);
subHead("Changing Variable Names");

// Reassigning variable names
const {
  nameP: pussyP,
  openingHoursP: sexytimeP,
  categoriesP: fetishP,
} = restaurantP;

console.log(nameP, openingHoursP, categoriesP);
console.log(pussyP, sexytimeP, fetishP);

console.log(
  `
%c Setting Defaults
`,
  "color:orange;font-size:15px"
);

// Setting defaults here
const { specialMenu = [], starterMenuP: startes = [] } = restaurantP;
console.log(specialMenu, startes);

// Mutating Varoables

console.log(
  `
%c Mutating Variables
`,
  "color:orange;font-size:15px"
);

let a = 111;
let b = 999;

const obj1 = { a: 23, b: 7, c: 14 };

//Override variables
({ a, b } = obj1);
console.log(a, b);

// Nested Objects
