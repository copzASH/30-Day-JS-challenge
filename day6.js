//Day 6 :Arrays


// Activity 1: Array Creation and Access
console.log("Activity 1 :")

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
let arr1 = [1,2,3,4,5]
console.log("Array is :", arr1)

// Task 2: Access the first and last elements of the array and log them to the console.
let firstNum = arr1[0]
let lastNum = arr1[arr1.length-1]
console.log(`\n1st element is ${firstNum} and last element is ${lastNum}`)


// Activity 2: Array Methods (Basic)
console.log("\nActivity 2 :")

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
arr1.push(10)
console.log("Updated array after push operation is :", arr1)

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
arr1.pop()
console.log("\nUpdated array after pop operation is :", arr1)

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
arr1.shift()
console.log("\nUpdated array after shift operation is :", arr1)

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
arr1.unshift(10)
console.log("\nUpdated array after unshift operation is :", arr1)


// Activity 3: Array Methods (Intermediate)
console.log("\nActivity 3 :")

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let arr2 = [1,2,3,4,5,6,7,8,9]
console.log("Array is :", arr2)
let arr3 = arr2.map( item => item*2 )
console.log("Updated array is :", arr3)

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let arr4 = arr2.filter(num => num % 2 ==0)
console.log("\nEven numbers in array are :", arr4)

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let total = arr2.reduce((acc, num) => num+acc, 0)
console.log("\nSum of array is :", total)


// Activity 4: Array Iteration
console.log("\nActivity 4 :")

// Task 10: Use a for loop to iterate over the array and log each element to the console.
console.log("Array is :")
for(let i=0; i<arr1.length; i++){
    console.log(arr1[i])
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
console.log("\nArray is :")
arr2.forEach( num => console.log(num))

// Activity 5: Multi-dimensional Arrays
console.log("\nActivity 5 :")

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(matrix)

// Task 13: Access and log a specific element from the two-dimensional array.
const specificElement = matrix[1][1]
console.log(`\nSpecific element [1][1] is : ${specificElement}`)