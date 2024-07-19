// Day 7: Objects


// Activity 1: Object Creation and Access
console.log("Activity 1:")

// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
let book = {
    title : "One Piece",
    author : "Oda",
    year : 1999
}
console.log("The book is :", book)

// Task 2: Access and log the title and author properties of the book object.
console.log(`\nThe title is ${book.title} and the Author is ${book.author}`)


// Activity 2: Object Methods
console.log("\nActivity 2:")

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.show = function(){
    return `Book title : ${this.title} and Book author : ${this.author}`
}
console.log(book.show())

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book’s year property, then log the updated object.
let newYear = Number(prompt("Enter year :"))
book.updateYear = function(year){
    this.year = year
}
book.updateYear(newYear)
console.log("Updated Object :", book)

// Activity 3: Nested Objects
console.log("\nActivity 3:")

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
    name: "City Library",
    books: [
        { title: "Vagabond", author: "Inoue", year: 1998 },
        { title: "Naruto", author: "Kishimoto", year: 1999 },
        { title: "Bleach", author: "Kubo", year: 2003 }
    ]
}
console.log(library)

// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(`\nLibrary name :${library.name}`)
library.books.forEach((book) => console.log(`Title :${book.title}`))


// Activity 4: The this Keyword
console.log("\nActivity 4:")

// Task 7: Add a method to the book object that uses the "this" keyword to return a string with the book's title and year, and log the result of calling this method.
book.display = function(){
    return `Title :${this.title} and Year :${book.year}`
}
console.log(book.display())


// Activity 5: Object Iteration
console.log("\nActivity 5:")

// Task 8: Use a "for...in" loop to iterate over the properties of the book object and log each property and its value.
for(let key in book){
    if(book.hasOwnProperty(key))
            console.log(`${key}: ${book[key]}`)
}

// Task 9: Use "Object.keys" and "Object.values" methods to log all the keys and values of the book object.
console.log("\nObject.keys and Object.values methods :")
console.log(Object.keys(book))
console.log(Object.values(book))

