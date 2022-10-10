/* 
We are going to build some functions to help us deal with rectangles.
All functions will take two numbers as arguments: argument1 is width, argument2 is height.
1. Write a function called findArea that returns the area.
2. Write a function called findPerimeter that will both return the perimeter and log it to the console.
3. Write a function that checks if the rectangle is a square.
Code Below*/

function findArea(width, height) {
    const area = width < 1 || height < 1 ? "Invalid inputs" : width * height
    return area
}

function findPerimeter(width, height) {
    const perimeter = width < 1 || height < 1 ? "Invalid inputs" : 2 * (width + height)
    console.log(perimeter)
    return perimeter
}

function isSquare(width, height) {
    return width == height
}

// Test command (in terminal) "npm run test:d1:medium:rectangle"
module.exports = { findArea, findPerimeter, isSquare };
