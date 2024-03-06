// Ch3 Destructuring Arrays
console.log(
  ` %c
========================================================================

⠄⠄⠸⣿⣿⢣⢶⣟⣿⣖⣿⣷⣻⣮⡿⣽⣿⣻⣖⣶⣤⣭⡉⠄⠄⠄⠄⠄
⠄⠄⠄⢹⠣⣛⣣⣭⣭⣭⣁⡛⠻⢽⣿⣿⣿⣿⢻⣿⣿⣿⣽⡧⡄⠄⠄⠄
⠄⠄⠄⠄⣼⣿⣿⣿⣿⣿⣿⣿⣿⣶⣌⡛⢿⣽⢘⣿⣷⣿⡻⠏⣛⣀⠄⠄
⠄⠄⠄⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠙⡅⣿⠚⣡⣴⣿⣿⣿⡆⠄
⠄⠄⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠄⣱⣾⣿⣿⣿⣿⣿⣿⠄ 103: Destructing Arrays
⠄⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⠄
⠄⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠣⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄
⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠑⣿⣮⣝⣛⠿⠿⣿⣿⣿⣿⠄
⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄
⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠄⠄⠄⠄⢹⣿⣿⣿⣿⣿⣿⣿⣿⠁⠄
⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠄⠄⠄⠄⠄⠸⣿⣿⣿⣿⣿⡿⢟⣣⣀

=====================================================================
`,
  `color:#DD58D6`
);

console.log(
  ` %c
-----------
1. Start with simple array destructuring
-----------
`,
  "color:#97FFF4;font-size:1rem"
);

// Manaully extracting
const numAr1 = [2, 3, 4];

// One by one
const a = numAr1[0];
const b = numAr1[1];
const c = numAr1[2];

console.table(`
Manual desctruc 
 - ${a}, ${b}, ${c}
`);

// Array Destructuring

const [x, y, z] = numAr1;
console.log(x, y, z);

console.log(
  ` %c
-----------
DC Main Obj
-----------
`,
  "color:#97FFF4;font-size:1rem"
);

// Example of an italian restaurant

const restaurant = {
  name: "Woman Juices",
  location: "Sweaty Gym Booties",
  categories: ["Sno, Far, Sca, Pis, Spi"],
  starterMenu: ["Swea", "Pits, Pan"],
  mainMenu: ["Jui, Sti, Smel"],
};
console.log("Printing it out in table format", "color:green");
console.table(restaurant);
console.log(typeof restaurant);

// Code for looping through object taken from mistral
for (let key in restaurant) {
  console.log(key, ":", restaurant[key]);
  console.table(key, ":", restaurant[key]);
}
