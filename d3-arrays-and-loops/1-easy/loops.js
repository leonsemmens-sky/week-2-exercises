/*
declare a variable called task1 and assign the value of an empty array
write a for loop that pushes all from 0 to 10 to task1 
*/
let task1 = []
for (let i = 0; i <= 10; i++) {
    task1.push(i)
}

/*
declare a variable called task2 and assign the value of an empty array
write a for loop that pushes all from 10 to 0 to task2  (the order counts!)
*/
let task2 = []
for (let i = 0; i <= 10; i++) {
    task2.push(10 - i)
}

/*
declare a variable called task3 and assign the value of an empty array
write a for loop that pushes all even numbers from 1 to 20 task3
*/
let task3 = []
for (let i = 2; i <= 20; i += 2) {
    task3.push(i)
}

// Test command (in terminal) "npm run test:d3:easy:loops"
module.exports = { task1, task2, task3 };
