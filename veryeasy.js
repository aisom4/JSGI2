//=====================================VERY EASY=====================================
//Write a function named min that takes two arguments and returns their minimum.

function min(x, y) {
  // return x - y;
  if (x > y) {
    console.log("The difference is " + (x - y));
  } else console.log("The difference is " + (y - x));
}
min(126, 26);

// function min(x, y) {
//   if (x > y) {
//     console.log(y + " is less than " + x);
//   } else {
//     console.log(x + "is less than" + y);
//   }
// }

//========================================EASY======================================================

var names = ["Aishah", "Indiya", "David"];
var lastName = ["Isom", "Lawrence", "Harris"];
var age = [23, 18, 32];

console.log(
  "Hello my name is " + names[1],
  lastName[1] + " and I am " + age[1] + " years old."
);

// Second way to do it :) ====================

// var person1 = ["Aishah", "Isom", 23];
// var person2 = ["Indiya", "Lawrence", 18];
// var person3 = ["David", "Harris", 32];

// console.log(
//   "Hello my name is " + person2[0],
//   person2[1] + " and I am " + person2[2] + " years old."
// );

//========================================Medium======================================================

alert("Welcomeee");
var number = prompt("Please enter a number 1-12");

number = parseInt(number); // once user inputs a choice as a string it will be converted to a number data type
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function correspondingMonth(number) {
  if (number >= 1 && number <= 12) {
    //checks to ensure the number is valid between 1 and 12.
    console.log(
      "You have chosen " + number + " and that is " + month[number - 1] + "."
    ); //this outputs the correct month because the array starts at 0
  } else {
    alert("Your input was invalid. Please pick a number between 1 and 12.");
  }
}
correspondingMonth(number);

//======= My thought process behind the function======

//add in prompt set the value as number

// if (number === "1") {
//   console.log(month[0]);
// } else if (number === "2") {
//   console.log(month[1]);
// } else if (number === "3") {
//   console.log(month[2]);
// } else if (number === "4") {
//   console.log(month[3]);
// } else if (number === "5") {
//   console.log(month[4]);
// } else if (number === "6") {
//   console.log(month[5]);
// } else if (number === "7") {
//   console.log(month[6]);
// } else if (number === "8") {
//   console.log(month[7]);
// } else if (number === "9") {
//   console.log(month[8]);
// } else if (number === "10") {
//   console.log(month[9]);
// } else if (number === "11") {
//   console.log(month[10]);
// } else if (number === "12") {
//   console.log(month[11]);
// } else {
//   console.log("I cannot understand");
// }

// number = parseInt(number);

// // Check if number is within the range of 1-12
// if (number >= 1 && number <= 12) {
//   console.log(month[number - 1]); // Arrays are zero-indexed, so subtract 1 from the number to get the correct index
// } else {
//   console.log("I cannot understand");
// }

//==============================HARD======================================

const tomHeight = 9;
const tomMass = 8;
const jerryHeight = 10;
const jerryMass = 45;

let tomBmi = tomMass / (tomHeight * tomHeight);
let jerryBmi = jerryMass / (jerryHeight * jerryHeight);

let result = true;
let result2 = false;

if (tomBmi > jerryBmi) {
  console.log("Is Tom's BMI higher than Jerry's? " + result);
} else {
  console.log("Is Tom's BMI higher than Jerry's? " + result2);
}
