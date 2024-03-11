// console.log("Hello world");

// const test = "Hello World";

// let test2 = "Hello World";

// let num = 5;
// num = 45;
// num = "Hello World";
// let SomieBool = true;
// let nullValue = null;
// let SomeArray = [];
// let SomeObject = {
//     key: "value",
//     key2: "value",
// };
// console.log(SomeObject.key);

// if (SomeObject.key === "value") {
//     console.log("key is value");
// }

// const fruits = ["pomme", "banane", "orange"];
// fruits.push("raisin")
// console.log(fruits)

// const ben = {
//     firstname: "Benjamin",
//     lastname: "Seixeiro",
//     age : 19,
//     isStudent: true,
//     hobbies: ["guitar", "programming", "gaming"],
// };

// console.log(ben.firstname);
// console.log(ben.hobbies);

// const { firstname, lastname, age} =ben;
// console.log (firstname);

// const someVariable = [...fruits, "kiwi" ];
// console.log(someVariable);

// const newStudent = {...ben, age: 20, lastname: "Franklin",}
// console.log(newStudent);

// import la fonction add depuis le fichier add.js
// avec la syntaxe commonJS

import {conversion} from "./src/function.js";

//import {getMaxValue} from "./src/function.js";
// import {sort} from "./src/function.js";

//const a = 45;
//const string = "bonjour je m'appel Maxime";
//const maxValue = getMaxValue(t);
//const strigWithoutConsonant = getConsonnant (string);
//console.log("max Value: ", maxValue);
//console.log(strigWithoutConsonant)
// const t = ["e","k","a","h","r","t","m","s","w","p"];
// const sorted = sort(t);
// console.log(sorted)

const arrayNum = [
    "zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf",
    "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf",
    "vingt", "vingt-et-un", "vingt-deux", "vingt-trois", "vingt-quatre", "vingt-cinq", "vingt-six", "vingt-sept", "vingt-huit", "vingt-neuf",
    "trente", "trente-et-un", "trente-deux", "trente-trois", "trente-quatre", "trente-cinq", "trente-six", "trente-sept", "trente-huit", "trente-neuf",
    "quarante", "quarante-et-un", "quarante-deux", "quarante-trois", "quarante-quatre", "quarante-cinq", "quarante-six", "quarante-sept", "quarante-huit", "quarante-neuf",
    "cinquante", "cinquante-et-un", "cinquante-deux", "cinquante-trois", "cinquante-quatre", "cinquante-cinq", "cinquante-six", "cinquante-sept", "cinquante-huit", "cinquante-neuf",
    "soixante", "soixante-et-un", "soixante-deux", "soixante-trois", "soixante-quatre", "soixante-cinq", "soixante-six", "soixante-sept", "soixante-huit", "soixante-neuf",
    "soixante-dix", "soixante-et-onze", "soixante-douze", "soixante-treize", "soixante-quatorze", "soixante-quinze", "soixante-seize", "soixante-dix-sept", "soixante-dix-huit", "soixante-dix-neuf",
    "quatre-vingts", "quatre-vingt-un", "quatre-vingt-deux", "quatre-vingt-trois", "quatre-vingt-quatre", "quatre-vingt-cinq", "quatre-vingt-six", "quatre-vingt-sept", "quatre-vingt-huit", "quatre-vingt-neuf",
    "quatre-vingt-dix", "quatre-vingt-onze", "quatre-vingt-douze", "quatre-vingt-treize", "quatre-vingt-quatorze", "quatre-vingt-quinze", "quatre-vingt-seize", "quatre-vingt-dix-sept", "quatre-vingt-dix-huit", "quatre-vingt-dix-neuf",
    "cent"
  ];


const num = 45
// import { returnNumberToWords } from "./src/function.js";
console.log(arrayNum[num])


