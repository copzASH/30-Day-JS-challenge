// Day 2

// Activity 1: Arithmetic Operations
console.log("Activity 1 :")
num1=100
num2=20

// Task 1: Write a programm to add two numnbers and log the result to the console
console.log("Sum =", num1+num2)

// Task 2: Write a programm to subtract two numnbers and log the result to the console
console.log("Difference =", num1-num2)

// Task 3: Write a programm to multiply two numnbers and log the result to the console
console.log("Product =", num1*num2)

// Task 4: Write a programm to divide two numnbers and log the result to the console
console.log("Division =", num1/num2)

// Task 5: Write a programm to to find remainder when one number is divided by another and log the result to console
console.log("Remainder =", num1%num2)


console.log("\nActivity 2 :");

// Task 6: Use the += operator to add a number to a variable and log the result to the console
num3=5
console.log("Before addition :",num3)
num3 += 5
console.log("After addition :",num3)

// Task 7: Use the -= operator to subtract a number to a variable and log the result to the console
num4=30
console.log("Before subtraction :",num4)
num4 -= 5
console.log("After subtraction :",num4)

// Activity 3: Comparision Operator
console.log('\nActivity 3 :');

// Task 8: Write a program to compare two numbers using > and < and log the result
let a = 10
let b = 20
if (a > b)
    console.log(`Variable a(${a}) greater than b(${b})`);
else
    console.log(`Variable b(${b}) is greater than a(${a})`);

// Task 9: Write a program to compare two numbers using >= and <= and log the result
let age1 = 17
let age2 = 18
if (17 >= age1)
    console.log(`Person is minor`);
if (17 <= age2) {
    console.log(`Person is not minor`);
}


// Task 10: Write a program to compare two numbers using == and === and log the result
let c = 5
let d = Number(5)
if (c == d)
    console.log(`Both c and d are equal`);
if (c === d)
    console.log(`Both c and d are equal and their datatype is also same`);

// Activity 4: Logical Operation
console.log("\nActivity 4 :")

//Task 11: Write a program that uses && operator to combine 2 conditions and log the result to the console.
console.log(`Logical AND: (2 > 1) && (1 < 2): ${(2 > 1) && (1 < 2)}`);  //true

//Task 12: Write a program that uses || operator to combine 2 conditions and log the result to the console.
console.log(`Logical OR: (0 > 2) || (0 < 2): ${(0 > 2) || (0 < 2)}`);   //true

//Task 13: Write a program that uses ! operator to negate a condition and log the result to the console.
console.log(`Logical NOT: !(2 > 0): ${!(2 > 0)}`);  //false


// Activity 5: Ternary Operator
console.log("\nActivity 5 :");

//Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let number = -1;
let isPositive = number >= 0 ? 'Positive' : 'Negative';
console.log(`${number} is a ${isPositive}`);
