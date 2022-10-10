/*
Write a function called fizzBuzz that accepts a number as an argument.
Return “FIZZ” if the number is divisible by 3
Return “BUZZ” if the number is divisible by 5
Return “FIZZBUZZ” if the number is divisible by both 3 and 5
If the number is not divisible by either 3 or 5, return the number.
 */

function fizzBuzz(num) {
    let str = (num % 3 == 0 ? "FIZZ" : "") + (num % 5 == 0 ? "BUZZ" : "")
    return str ? str : num
}

// Test command (in terminal) "npm run test:d1:medium:fizzBuzz"
module.exports = { fizzBuzz };
