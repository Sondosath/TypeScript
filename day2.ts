// 1- Multi-Type Array using union types (|).
// let multiTypeArray: (string | number | boolean)[] = ["Sondos", 24, true, "Programmer"];
// console.log(multiTypeArray);

//--------------------------------------------------------------------
// 2- (Function Types): A. (Return Type) B. (Parameter Types)

// function addNumbers(a: number, b: number): number {
//     return a + b;
// }

// console.log(addNumbers(5, 10)); // 15

// 'a' and 'b' must be of type number.
// The function returns a value of type number.

//---------------------------------------------------------------------
// 3- (Optional Parameters) and (Default Parameters):

// (Optional Parameters):
// function greet(name: string, age?: number): string {
   
//     return age ? `Hello ${name}, your age is ${age} years.` : `Hello ${name}`;
// }

// console.log(greet("Sondos"));       // Hello Sondos
// console.log(greet("Mohammed", 25)); // Hello Mohammed, your age is 25 years.

// // (Default Parameters)
// function greetDefault(name: string, age: number = 20): string {
//     return `Hello ${name}, your age is ${age} years.`;
// }

// console.log(greetDefault("Sondos")); // Hello Sondos, your age is 20 years.
//------------------------------------------------------------------------

// 4- (Rest Parameter)
// function sumNumbers(...numbers: number[]): number {
//     let total = 0;
//     for (let num of numbers) {
//         total += num;
//     }
//     return total;
// }

// console.log(sumNumbers(10, 20, 30));
// console.log(sumNumbers(5, 15, 25, 35, 45))
// ...numbers: number[] means that we can return an unlimited number of numeric values


//----------------------------------------------------------------
// Define an array of objects with 3 items containing product information 
// (name, description, and price). There is a load button in the HTML, and 
// when clicked, it will call a function to load the three objects into the HTML page.


let products = [
    { name: "Laptop", description: "Powerful HP Laptop", price: 800 },
    { name: "Phone", description: "Advanced Samsung Phone", price: 500 },
    { name: "Headphones", description: "High-quality Bluetooth Headphones", price: 100 }
];

// Function to load products into the page
function loadProducts(): void {
    let productList = document.getElementById("product-list");
    if (productList) {
        productList.innerHTML = products.map(
            (product) => `<li>${product.name} - ${product.description} - $${product.price}</li>`
        ).join("");
    }
}
