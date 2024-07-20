// Day 8 : ES6+ Features


// Activity 1: Template Literals
// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
console.log("Activity 1 :")
let course = "Chai aur JS"
let price = 1999
let message = `Course name is ${course} and price is ${price} only.`
console.log(message)

// Task 2: Create a multi-line string using template literals and log it to the console.
let multiLine = `\nThis is a 
multi-line 
string.`
console.log(multiLine)


// Activity 2: Destructuring
console.log("\nActivity 2 :")

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
let numbers = [1, 2, 3, 4, 5]
let [first, second] = numbers
console.log(first, second)

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
let book = { 
    title: "One Piece", 
    author: "Eiichiro Oda", 
    year: 1997 
}
let { title, author } = book
console.log(title, author)


// Activity 3: Spread and Rest Operators
console.log("\nActivity 3 :")

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
let arr1 = [1, 2, 3]
let arr2 = [...arr1, 4, 5, 6]
console.log("New array is :", arr2)

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0)
}
console.log("Sum is :",sum(1, 2, 3, 4, 5))


// Activity 4: Default Parameters
console.log("\nActivity 4 :")

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function multiply(a, b = 1) {
    return a * b
}
console.log("With 2nd parameter :",multiply(5, 2))
console.log("Without 2nd parameter :",multiply(5))


// Activity 5: Enhanced Object Literals
console.log("\nActivity 5 :")

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
let cName = 'Chai aur Js'
let cPrice = 1999
let Course = {
    cName,
    cPrice,
    greet(){
        return `Course name is "${this.cName}" and price is ${this.cPrice} only.`        
    }
}
console.log(Course)
console.log(Course.greet())

// Task 9: Create an object with computed property names based on variables and log the object to the console.
let key1 = "Channel"
let key2 = "Course"
let show = {
    [key1] : "Chai aur Code",
    [key2] : "Chai aur JS"
}
console.log(show)