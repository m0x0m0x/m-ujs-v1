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
