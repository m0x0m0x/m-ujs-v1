/*
Destructuring Objects
*/

// === Importing print functions from funz.js ===
import { mainHead, subHead } from "./funz.js";

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

  // Order Methods
  order: function (starterIndex, mainIndex) {
    return [this.starterMenuP[starterIndex], this.mainMenuP[mainIndex]];
  },

  // Destrucuturing method
  orderDelivery: function (obj) {
    console.log(obj);
  },
};

// Using the order method

restaurantP.orderDelivery({
  time: "22:30",
  address: "69 Juice Drive",
  mainIndex: 2,
});

// Doing destructing with curly brances

const { nameP, openingHoursP, categoriesP } = restaurantP;
console.log(nameP, openingHoursP, categoriesP);
console.table(nameP, openingHoursP, categoriesP);

// Changing variable name from property names

subHead("Changing Variable Names");

// Reassigning variable names
const {
  nameP: pussyP,
  openingHoursP: sexytimeP,
  categoriesP: fetishP,
} = restaurantP;

console.log(nameP, openingHoursP, categoriesP);
console.log(pussyP, sexytimeP, fetishP);

subHead("Settig Defaults");

// Setting defaults here
const { specialMenu = [], starterMenuP: startes = [] } = restaurantP;
console.log(specialMenu, startes);

// Mutating Varoables
subHead("Mutating Variables");

let a = 111;
let b = 999;

const obj1 = { a: 23, b: 7, c: 14 };

//Override variables
({ a, b } = obj1);
console.log(a, b);

// Nested Objects
subHead("Destructuring Nested Objects");
const { fri } = openingHoursP;

// Along with nested DC , also reassigning values
const {
  fri: { open: o, close: c },
} = openingHoursP;

console.log(`
Main DC Prop Fri = ${fri}
DC open = ${o}
DC Closed = ${c}
`);
