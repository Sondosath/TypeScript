// // 1. Conditional Statements (if, else if, else)
// // let age: number = 17;

// // if (age >= 18) {
// //     console.log("You are an adult."); // This will run if age is 18 or older
// // } else {
// //     console.log("You are a minor."); // This will run if age is less than 18
// // }
// // -----------------------------------------------





// // -----------------------------------------------
// // Example with else if
// let score: number = 85;

// if (score >= 90) {
//     console.log("Grade: A");
// } else if (score >= 80) {
//     console.log("Grade: B"); // This will run because score is 85
// } else if (score >= 70) {
//     console.log("Grade: C");
// } else {
//     console.log("Grade: F");
// }
// // -----------------------------------------------




// // --------------------------
// // 2. For Loop
// console.log("For Loop Example:");
// for (let i = 1; i <= 5; i++) {
//     console.log(`Iteration ${i}`); // Prints 1, 2, 3, 4, 5
// }
// // -----------------------------------------------





// // -----------------------------------------------
// // 3. While Loop
// // console.log("While Loop Example:");
// // let counter: number = 0;
// // while (counter < 3) {
// //     console.log(`Counter: ${counter}`); // Prints 0, 1, 2
// //     counter++;
// // }
// // -----------------------------------------------


// // 4. Do...While Loop
// // console.log("Do...While Loop Example:");
// // let x: number = 0;
// // do {
// //     console.log(`x: ${x}`); // Prints 0, 1, 2
// //     x++;
// // } while (x < 3);
// // -----------------------------------------------




// // -----------------------------------------------
// // 5. Combining Conditions and Loops
// // console.log("Combining Conditions and Loops:");
// // let numbers: number[] = [10, 20, 30, 40, 50];

// // for (let i = 0; i < numbers.length; i++) {
// //     if (numbers[i] > 30) {
// //         console.log(`${numbers[i]} is greater than 30.`);
// //     } else {
// //         console.log(`${numbers[i]} is less than or equal to 30.`);
// //     }
// // }
// // -----------------------------------------------





// // -----------------------------------------------
// // 6. Nested Loops
// // console.log("Nested Loops Example:");
// // for (let i = 1; i <= 3; i++) {
// //     for (let j = 1; j <= 2; j++) {
// //         console.log(`i: ${i}, j: ${j}`);
// //     }
// // }
// // -----------------------------------------------





// // -----------------------------------------------
// // 7. Break and Continue
// // console.log("Break and Continue Example:");
// // for (let i = 1; i <= 5; i++) {
// //     if (i === 3) {
// //         break; // Stops the loop when i is 3
// //     }
// //     console.log(`Break Example: ${i}`); // Prints 1, 2
// // }
// // -----------------------------------------------





// // -----------------------------------------------
// // for (let i = 1; i <= 5; i++) {
// //     if (i === 3) {
// //         continue; // Skips the rest of the loop when i is 3
// //     }
// //     console.log(`Continue Example: ${i}`); // Prints 1, 2, 4, 5
// // }
// // -----------------------------------------------




// //------------------------------
// // Number => Represents both integers and floating-point numbers
// let agee: number = 25;
// let price: number = 99.99;

// let firstName: string = "John";

// let isLoggedIn: boolean = false;



// // Any => Allows a variable to hold any type of value
// let data: any = 42;
// data = "Hello"; 
// data = true; 

// // let value: any = "Hello";
// // let num: number = value;



// // unknown => Similar to any, but safer because TypeScript enforces type checking before using the value
// let value: unknown = "Hello";

// // let num: number = value; // Error: Type 'unknown' is not assignable to 'number'

// if (typeof value === "string") {
//   let str: string = value; // Now it's safe
// }





// // Void => Represents the absence of a value, typically used for functions that do not return anything
// function logMessage(message: string): void {
//     console.log(message);
//   }



// // Null => It is often used to explicitly indicate that a variable or property has no value or is empty.
// let xx: null = null;



// // undefined => means a variable has been declared but has not yet been assigned a value. It is the default value of uninitialized variables.
// let y: undefined = undefined;



// // Array => Represents a list of values of the same type typescript CopyEdit
// let numberss: number[] = [1, 2, 3, 4, 5];




//TS task 1 : 

// Identify if a Number is Even or Odd
// You are given a variable num Check whether the number is even or odd, without using a function.


let num : number = 5 ;
if (num%2==0){
    console.log("even");
}
else{
    console.log("odd");

}


//--------------
// Filter Expensive Products from an Array :
// You are given an array of product prices. print out  all prices that are higher than a given threshold price, without using a function.

let prices :number[] = [50,40,400,500,900,1000,30,20,10];
//assume that any thing above 100 is Expensive :
let threshold: number = 100;

for (let i = 0; i < prices.length; i++) {
    if (prices[i] > threshold) {
        console.log(prices[i]);
    }
}

// Sum All Elements in an Array
// You are given an array of numbers. Iterate through the array and print the sum of all elements , without using a function.

let numbers: number[] = [10, 20, 30, 40, 50,60,70,80,90,100]; 
let sum: number = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);
