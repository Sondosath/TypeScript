// 1. Conditional Statements (if, else if, else)
// let age: number = 17;
// if (age >= 18) {
//     console.log("You are an adult."); // This will run if age is 18 or older
// } else {
//     console.log("You are a minor."); // This will run if age is less than 18
// }
// -----------------------------------------------
// -----------------------------------------------
// Example with else if
var score = 85;
if (score >= 90) {
    console.log("Grade: A");
}
else if (score >= 80) {
    console.log("Grade: B"); // This will run because score is 85
}
else if (score >= 70) {
    console.log("Grade: C");
}
else {
    console.log("Grade: F");
}
// -----------------------------------------------
// --------------------------
// 2. For Loop
console.log("For Loop Example:");
for (var i = 1; i <= 5; i++) {
    console.log("Iteration ".concat(i)); // Prints 1, 2, 3, 4, 5
}
// -----------------------------------------------
// -----------------------------------------------
// 3. While Loop
// console.log("While Loop Example:");
// let counter: number = 0;
// while (counter < 3) {
//     console.log(`Counter: ${counter}`); // Prints 0, 1, 2
//     counter++;
// }
// -----------------------------------------------
// 4. Do...While Loop
// console.log("Do...While Loop Example:");
// let x: number = 0;
// do {
//     console.log(`x: ${x}`); // Prints 0, 1, 2
//     x++;
// } while (x < 3);
// -----------------------------------------------
// -----------------------------------------------
// 5. Combining Conditions and Loops
// console.log("Combining Conditions and Loops:");
// let numbers: number[] = [10, 20, 30, 40, 50];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 30) {
//         console.log(`${numbers[i]} is greater than 30.`);
//     } else {
//         console.log(`${numbers[i]} is less than or equal to 30.`);
//     }
// }
// -----------------------------------------------
// -----------------------------------------------
// 6. Nested Loops
// console.log("Nested Loops Example:");
// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 2; j++) {
//         console.log(`i: ${i}, j: ${j}`);
//     }
// }
// -----------------------------------------------
// -----------------------------------------------
// 7. Break and Continue
// console.log("Break and Continue Example:");
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         break; // Stops the loop when i is 3
//     }
//     console.log(`Break Example: ${i}`); // Prints 1, 2
// }
// -----------------------------------------------
// -----------------------------------------------
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         continue; // Skips the rest of the loop when i is 3
//     }
//     console.log(`Continue Example: ${i}`); // Prints 1, 2, 4, 5
// }
// -----------------------------------------------
//------------------------------
// Number => Represents both integers and floating-point numbers
var agee = 25;
var price = 99.99;
var firstName = "John";
var isLoggedIn = false;
// Any => Allows a variable to hold any type of value
var data = 42;
data = "Hello";
data = true;
// let value: any = "Hello";
// let num: number = value;
// unknown => Similar to any, but safer because TypeScript enforces type checking before using the value
var value = "Hello";
// let num: number = value; // Error: Type 'unknown' is not assignable to 'number'
if (typeof value === "string") {
    var str = value; // Now it's safe
}
// Void => Represents the absence of a value, typically used for functions that do not return anything
function logMessage(message) {
    console.log(message);
}
// Null => It is often used to explicitly indicate that a variable or property has no value or is empty.
var xx = null;
// undefined => means a variable has been declared but has not yet been assigned a value. It is the default value of uninitialized variables.
var y = undefined;
// Array => Represents a list of values of the same type typescript CopyEdit
var numberss = [1, 2, 3, 4, 5];
