// 1- Multi-Type Array using union types (|).
var multiTypeArray = ["Sondos", 24, true, "Programmer"];
console.log(multiTypeArray);
//--------------------------------------------------------------------
// 2- (Function Types): A. (Return Type) B. (Parameter Types)
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(5, 10)); // 15
// 'a' and 'b' must be of type number.
// The function returns a value of type number.
//---------------------------------------------------------------------
// 3- (Optional Parameters) and (Default Parameters):
// (Optional Parameters):
function greet(name, age) {
    return age ? "Hello ".concat(name, ", your age is ").concat(age, " years.") : "Hello ".concat(name);
}
console.log(greet("Sondos")); // Hello Sondos
console.log(greet("Mohammed", 25)); // Hello Mohammed, your age is 25 years.
// (Default Parameters)
function greetDefault(name, age) {
    if (age === void 0) { age = 20; }
    return "Hello ".concat(name, ", your age is ").concat(age, " years.");
}
console.log(greetDefault("Sondos")); // Hello Sondos, your age is 20 years.
//------------------------------------------------------------------------
// 4- (Rest Parameter)
function sumNumbers() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, num) { return acc + num; }, 0);
}
console.log(sumNumbers(1, 2, 3, 4, 5)); // 15
// ...numbers: number[] means that we can return an unlimited number of numeric values
// reduce() is used to sum all values
//----------------------------------------------------------------
// Define an array of objects with 3 items containing product information 
// (name, description, and price). There is a load button in the HTML, and 
// when clicked, it will call a function to load the three objects into the HTML page.
var products = [
    { name: "Laptop", description: "Powerful HP Laptop", price: 800 },
    { name: "Phone", description: "Advanced Samsung Phone", price: 500 },
    { name: "Headphones", description: "High-quality Bluetooth Headphones", price: 100 }
];
// Function to load products into the page
function loadProducts() {
    var productList = document.getElementById("product-list");
    if (productList) {
        productList.innerHTML = products.map(function (product) { return "<li>".concat(product.name, " - ").concat(product.description, " - $").concat(product.price, "</li>"); }).join("");
    }
}
