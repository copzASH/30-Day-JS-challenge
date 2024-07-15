//Day 3:Control Structures


//Activity 1:If-Else Statements
console.log("Activity 1 :")

//Task 1:Write a program to check if a number is  positive ,negative or zero and log the result to the console.
let num=prompt("Enter the number :")
if (num>0)
    console.log(`${num} is positive`)
else if(num<0)
    console.log(`${num} is negative`)
else
    console.log(`${num} is zero`)

//Task 2:Write a program to check if aperson is eligible to vote (age>=18) and log the result to the console
let age=prompt("Enter your age :")
if (age>=18)
    console.log("You are eligible to vote")
else
    console.log("You are not eligible to vote")


//Activity 2: Nested if-else statements
console.log("\nActivity 2 :")

//Task 3: Write a program to find the largest of three numbers using nested if-else statements
let a=Number(prompt("Enter first number :"))
let b=Number(prompt("Enter second number :"))
let c=Number(prompt("Enter third number :"))

if (a>=b){
    if (a>=c)
        console.log(`${a} is largest`)
    else
        console.log(`${c} is largest`)
}
else{
    if (b>=c)
        console.log(`${b} is largest`)
    else
        console.log(`${c} is largest`)
} 


//Activity 3: Switch Case
console.log("\nActivity 3 :")

//Task 4:Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let weekday=prompt("Enter your day number range from 1 to 7 :")
switch (weekday) {
    case "1":
        console.log("Monday")
        break
    case "2":
        console.log("Tuesday")
        break
    case "3":
        console.log("Wednesday")
        break
    case "4":
        console.log("Thursday")
        break
    case "5":
        console.log("Friday")
        break
    case "6":
        console.log("Saturday")
        break
    case "7":
        console.log("Sunday")
        break
    default:
        console.log("Invalid input! Enter a number between 1 and 7")
        break
}

//Task 5:Write a program that uses a switch case to assign a grade ('A','B','C','D','F') based on a score and log the grade to the console
let score = prompt("Enter your score (0-100) :")
score=Number(score)
if (isNaN(score) || score < 0 || score > 100) {
    console.log("Invalid input")
}
else{
    switch (true) {
        case (score >= 90 && score <= 100):
            console.log("A")
            break
        case (score >= 80 && score < 90):
            console.log("B")
            break
        case (score >= 70 && score < 80):
            console.log("C")
            break
        case (score >= 60 && score < 70):
            console.log("D")
            break
        case (score >= 50 && score < 60):
            console.log("F")
            break
        default:
            console.log("Fail hai gavar tu")
            break
    } 
}


//Activity 4: Conditional (Ternary) Operator
console.log("\nActivity 4 :")

//Task 6:Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console
num=Number(prompt("Enter the number :"))
num%2==0 ?console.log("Even") : console.log("Odd")


//Activity 5:Combining Conditions
console.log("\nActivity 5 :")

//Task 7:Write a program to check if a year is a leap year using multiple conditions (divisible by 4,but not 100 unless also divisible by 400) and log the result to the console
let year = Number(prompt("Enter a year :"));
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
        console.log(`${year} is a leap year.`);
else
    console.log(`${year} is not a leap year.`);