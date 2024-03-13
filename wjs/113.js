/* 
113: Enahanced Object Literals
*/
// === Import Zone ===
import { mainHead, subHead, paraText } from "./funz.js";
// import { restaurantP } from "./rest.js";
//===

mainHead(`113: Enahanced Object Literals`);

// Making a new object to learn about the enhanced object literals

const HoursP = {
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
};

const restaurantP2 = {
  nameP: "Woman Juices",
  locationP: "Sweaty Gym Booties",
  categoriesP: ["Sno", "Far", "Sca", "Pis", "Spi"],
  starterMenuP: ["Swea", "Pits", "Pan"],
  mainMenuP: ["Jui", "Sti", "Smel"],

  // new additions - enhaced
  HoursP,

  // Order Methods
  order(starterIndex, mainIndex) {
    return [this.starterMenuP[starterIndex], this.mainMenuP[mainIndex]];
  },

  // DC method
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(`
    Order Recieved ${this.starterMenuP[starterIndex]} and ${this.mainMenuP[mainIndex]} will be delivered to ${address} at ${time}
        `);
  },

  // New method added for learning about iteables
  orderPasta(ing1, ing2, ing3) {
    console.log(`Delicious Pasta with ${ing1}, ${ing2}, ${ing3}, `);
  },

  // Pizza ordering metho d
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient), console.log(otherIngredients);
  },
};

console.log(restaurantP2);
