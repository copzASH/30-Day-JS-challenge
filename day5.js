//Day 5 :Functions


// Activity 1: Function Declaration
console.log("Activity 1 :")

// Task 1: Write a function to check if a number is even or odd and log the result to the console.
let num1 = Number(prompt("Enter a number :"))
function checkOddEven(num){
    if(num%2==0)
        console.log(`${num} is even.`)
    else
        console.log(`${num} is odd.`)
}
checkOddEven(num1)

// Task 2: Write a function to calculate the square of a number and return the result.
let num2 = Number(prompt("\nEnter any number :"))
function square(num){
    return num*num;
}
let result = square(num2)
console.log(`The square of ${num2} is ${result}`);

// Activity 2: Function Expression
console.log("\nActivity 2 :")

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
let num3 = Number(prompt("Enter 1st number :"))
let num4 = Number(prompt("Enter 2nd number :"))
const findMaximum = function(num1, num2) {
    const max = num1 > num2 ? num1 : num2
    console.log(`The maximum of ${num1} and ${num2} is ${max}.`)
}
findMaximum(num3,num4)

// Task 4: Write a function expression to concatenate two strings and return the result.
let str1 = prompt("\nEnter 1st string :")
let str2 = prompt("Enter 2nd string :")
const addStr = function(str1, str2) {
    return str1 + str2;
}
console.log(`New string is :${addStr(str1,str2)}`)


// Activity 3: Arrow Functions
console.log("\nActivity 3 :")

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
let num5 = Number(prompt("Enter 1st number :"))
let num6 = Number(prompt("Enter 2nd number :"))
const sum = (num1, num2) => console.log(`Sum is :`,num1 + num2);
sum(num5, num6)

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
let str3 = prompt("\nEnter any string :")
let char1 = prompt("Enter character to search :")
const haveChar = (str, char) => str.includes(char);
console.log(`Result is :`, haveChar(str3, char1))


// Activity 4: Function Parameters and Default Values
console.log("\nActivity 4 :")

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
let num7 = Number(prompt("\nEnter 1st number :"))
let num8 = Number(prompt("Enter 2nd number :"))
function multiply(num1, num2 = 1) {
    return num1 * num2;
}
console.log(`Product is :`, multiply(num7,num8))

// Task 8: Write a function that takes a person’s name and age and returns a greeting message. Provide a default value for the age.
let name = prompt("\nEnter your name :")
let age = Number(prompt("Enter your age :"))
function greet(name, age = 18) {
    return `Hello, ${name}! You are ${age} years old.`;
}
console.log(greet(name,age))


// Activity 5: Higher-Order Functions
console.log("\nActivity 5 :")

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
let freq = Number(prompt("How many times you want to repeat :"))
function repeatFunction(func, times) {
    for (let i = 0; i < times; i++) {
        func();
    }
}
repeatFunction(() => console.log('Hello!'), freq);

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
let num9 = Number(prompt("\nEnter any number :"))
function applyFunctions(func1, func2, value) {
    return func2(func1(value));
}
const double = x => x * 2;
const squr = x => x * x;
console.log(applyFunctions(double, squr, num9));