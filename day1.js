console.log("Day 1");

// Activity 1: Variables Declaration
// Task 1: Declare a variable using var , assign it a number, and log the value to the console.
var date = 13
console.log("date :", date)

console.log()

// Declare a variable using let , assign it a string, and log the value to the console.
let day = "Saturday"
console.log("day :", day)

console.log()

// Activity 2: Constant Declaration
// Task 3: Declare a variable using const , assign it a boolean value, and log the value to the console.
const isdone = false
console.log("isdone :", isdone)

console.log()

// Activity 3: Data Types
// • Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
let num = 0;
let str = "hello";
let bool = true;
let arr = ["hello", "world"];
let today = {
    date : 13,
    month : "July"
}
console.log("num :", typeof num);
console.log("str :", typeof str);
console.log("bool :", typeof bool);
console.log("arr :", typeof arr);
console.log("obj :", typeof obj);

console.log()

// Activity 4: Reassigning Variables
// • Task 5: Declare a variable using let , assign it an initial value, reassign a new value, and log both values to the console.
let year = 2024;
console.log("year :", year);
year = 2025;
console.log("year :", year);

console.log()

// Activity 5: Understanding const
// • Task 6: Try reassigning a variable declared with const and observe the error.
const age = 20;
console.log("age :", age);
age = 25; // error
console.log("age :", age);

console.log()

// Feature Request:
// 1 . Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
let num1 = 0;
let str1 = "hello";
let bool1 = true;
let arr1 = ["hello", "world"];
let obj1 = {
    date : 13,
    month : "July"
}
console.log("num1 =", num1, "& type of num1 is", typeof(num1));
console.log("str1 =", str1, "& type of str1 is", typeof(str1));
console.log("bool1 =", bool1, "& type of bool1 is", typeof(bool1));
console.log("arr1 =", arr1, "& type of arr1 is", typeof(arr1));
console.log("obj1 =", obj1, "& type of obj1 is", typeof(obj1));

console.log()

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

// Demo for let
let a = 0;
console.log("a :", a);
a = 10;
console.log("a :", a);

console.log()

// Demo for const
const b = 0;
console.log("b :", b);
b = 10;
console.log("b :", b); // error

// Achievement:
// By the end of these activities, you will:
// Know how to declare variables using var , let , and const .
// •
// Understand the different data types in JavaScript.
// •
// • Be able to use the typeof operator to identify the data type of a variable.
// Understand the concept of variable reassignment and the immutability of const variables.
// •