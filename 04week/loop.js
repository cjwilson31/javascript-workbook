// for loop
// Use a for loop to console.log each item in the array carsInReverse.
const carsInReverse = ['acura','jeep','mercedes','dodge'];

for (var i = 0; i < carsInReverse.length; i ++){
  console.log(carsInReverse[i]);
}

// for...in loop
// Create an object (an array with keys and values) called persons with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"
// Use a for...in loop to console.log each key.

const persons = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
}

for (key in persons) {
  console.log(key);
};

// Then use a for...in loop and if state to console.log the value associated with the key birthDate.
for (value in persons) {
  console.log(persons[value]);
};
// Use a for loop to console.log the numbers 1 to 1000.
for(var i = 1;i < 1001; i ++){
  console.log(i);
}

// while loop
// Use a for loop to console.log the numbers 1 to 1000.
let n = 1;
while (n < 1001) {
  console.log( n );
  n++;
}
// do...while loop
// Use a do...while loop to console.log the numbers from 1 to 1000.
let j = 1;
do {
  console.log( j );
  j++;
} while (j < 1001);

// When is a for loop better than a while loop?
//   when you know the number of iterations, or when you wanna increment or 
//   decrement something while checking a condition

// How is the readability of the code affected?
//   the for loop can be written in one line, with the var kept within the scope of the loop.
//   the while loop is usualyy 3 different lines

// What is the difference between a for loop and a for...in loop?
//  for...in is specifically designed for looping over properties in an object.

// What is the difference between a while loop and a do...while loop?
//   the while loop will only run if the condition evaluates to true.
//   the do .. while will run immediately, before ever checking the condition, then 
//   if the condition evalutes to true, it continiues to loop as long as the condition is true.
  