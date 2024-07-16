//Day 4 :Loops


//Activity 1 :For Loop
console.log("Activity 1 :")

//Task 1 :WAP to print numbers from 1 to 10 using a for loop.
console.log("Number from 1 to 10 :")
for (let i = 1; i <= 10; i++)
    console.log(i)

//Task 2 :WAP to print the multiplication table of 5 using a for loop.
console.log("\nTable of 5 :")
for(let i=1; i<=10; i++)
    console.log(`5 x ${i} = ${5*i}`)


//Activity 2 :While Loop
console.log("\nActivity 2 :")

//Task 3 :WAP to calculate the sum of numbers from 1 to 10 using a while loop.
let sum = 0
let i = 1
while (i <= 10) {
    sum += i
    i++
}
console.log(`The sum of numbers from 1 to 10 is: ${sum}\n`)

//Task 4 :WAP to print numbers from 10 to 1 using a while loop.
console.log("Numbers from 10 to 1 :")
i = 10
while (i >= 1) {
    console.log(i)
    i--
}


//Activity 3 :Do...While Loop
console.log("\nActivity 3 :")

//Task 5 :WAP to print numbers from 1 to 5 using a do...while loop.
i = 1
console.log(`Numbers from 1 to 5 :`)
do {
    console.log(i)
    i++
} while (i <= 5)

//Task 6 :WAP to calculate the factorial of a numbers using a do...while loop.
let number = 5
let factorial = 1
i = 1
do {
    factorial *= i
    i++
} while (i <= number)
console.log(`\nThe factorial of ${number} is: ${factorial}`)


//Activity 4:Nested Loops
console.log("\nActivity 4 :")

//Task 7 :WAP to print a pattern using nested for loops.
/*
*
* *
* * *
* * * *
* * * * *
*/
const numberOfRows = 5
for (let i = 1; i <= numberOfRows; i++) {
    let row = ''
    for (let j = 1; j <= i; j++) {
        row += '* '
    }
    console.log(row.trim())
}


//Activity 5:Loop Control Statements
console.log("\nActivity 5 :")

//Task 8 :WAP to print numbers from 1 to 10, but skip the numbers 5 using the continue statement.
console.log(`Numbers from 1 to 10`)
for (let i = 1; i <= 10; i++) {
    if (i === 5)
        continue
    console.log(i)
}

//Task 9 :WAP to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
console.log(`\nNumbers from 1 to 10 :`)
for (let i = 1; i <= 10; i++) {
    if (i === 7)
        break
    console.log(i)
}