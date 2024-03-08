console.log(
  ` %c
====================================
Assignments zone
⠀⢀⣠⣴⣶⣦⣄⡀⠀⠀⡀⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢠⣿⡿⣷⢿⣿⠹⡹⣆⠀⢻⡟⠛⡢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⣛⡄⢿⣿⠙⠃⠀⣿⡄⠈⠉⠣⣀⡍⠀⢄⢀⣴⣄⠀⠀⠀⠀⠀⠀
⢻⣿⣷⣿⢿⡄⠀⠠⠼⠃⡤⠴⠌⡀⢈⠔⠈⠀⠀⠀⠙⢄⠀⠀⠀⠀
⠸⢿⣷⣭⠟⠎⠂⠀⣠⣮⢂⡀⣀⠜⠁⠀⠀⠀⠀⠀⠀⠈⡄⠀⠀⠀
⠀⢸⢿⣿⣦⡀⠀⠈⠻⡅⠈⠀⢀⠠⠤⠀⡀⠀⠀⠀⠀⡰⡄⠀⠀⢀
⠀⠀⠠⠛⣉⡍⡠⠄⠊⠁⠒⠈⣠⣄⡀⠀⠀⠰⠒⠐⠬⢖⡁⠀⠀⣸
⠀⢰⡖⠊⠉⠁⠀⠀⠀⠁⠀⠀⣿⣿⠇⠀⠀⠀⢁⠀⠒⠀⠈⠒⠤⡟
⠀⠀⠇⠀⠀⠀⠀⠦⠤⠀⠀⠀⠀⠀⠀⠀⠀⠀⡈⠀⠀⠀⠀⠀⠀⡇
⠀⠀⠀⢄⠀⠀⠀⠜⡀⠠⡀⠀⠀⠀⠀⠀⢀⠔⠀⠀⠀⠀⠀⠀⠀⠇
⠀⠀⠀⠀⠑⠄⠀⠀⠈⠃⠘⠒⠂⠤⠤⢐⣀⣀⠀⠀⠀⠀⠀⠀⠀⢰
⠀⠀⠀⠀⠀⠈⠢⡀⠀⠐⡀⠀⠀⠀⠀⠀⠀⠀⠉⠢⢀⠀⠀⠀⠀⠀
=====================================
`,
  "color:#F72798"
);

// ==== Importing object ====

import books from "./assmain.js";

// ============================

console.log(` %c Section 1`, "color:yellow;font-size:2rem");

/*
1.1﻿
Destructure the books array into two variables called firstBook and secondBook.
*/

console.log(
  ` 
%c 1.1
`,
  "color:orange;font-size:1rem"
);

const [firstBook, secondBook] = books;
console.log(firstBook, secondBook);

// This is you destructing
const [buk1, buk2, buk3, buk4, buk5] = books;
console.log(buk1);

console.log(
  ` 
  %c 1.2
  `,
  "color:orange;font-size:1rem"
);

/*
Destructure the books array into a variable called thirdBook. You must skip the first two books.
*/
const [, , thirdBook] = books;
console.log(thirdBook);

/*
1.3﻿
Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.
*/
console.log(
  ` 
  %c 1.3
  `,
  "color:orange;font-size:1rem"
);

const ratings = [
  ["rating", 4.19],
  ["ratingsCount", 144584],
];
console.log(ratings);
// Solution
const [[, rating], [, ratingsCount]] = ratings;
console.table(ratings);
console.log(ratings);

/*
1.4
Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0.
*/
console.log(
  ` 
  %c 1.4
  `,
  "color:orange;font-size:1rem"
);
