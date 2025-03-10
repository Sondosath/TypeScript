//Task 1: Verify Interface Properties
//You are given an object that follows an interface Person 
// with properties name and age. Check if the age is above 18 
// and print "Adult" if true, otherwise print "Minor."
//----------------------------------------------------
// const products4: Product[] = [
//     {
//         name: "BOOK",
//         description: "A high",
//         quantity: 3,
//         price: 100
//     },
//     {
//         name: "NoteBooks",
//         description: "A high",
//         quantity: 5,
//         price: 550
//     },
//     {
//         name: "Pin",
//         description: "A high",
//         quantity: 7,
//         price: 10
//     }
// ];
function loadProducts() {
    var productList = document.getElementById("productForm");
    var name = productList.name;
    var description = productList.description;
    var quantity = productList.quantity;
    var price = productList.price;
    var products4 = [
        {
            name: name.value,
            description: description.value,
            quantity: quantity.value,
            price: price.value
        }
    ];
    localStorage.setItem("productData", JSON.stringify(products4));
    alert("Product saved successfully in localStorage!");
    productList.innerHTML = ""; // Clear existing content
    var Card = document.getElementById("Card");
    products4.forEach(function (product) {
        var h5 = document.createElement("h5");
        var paragraph = document.createElement("p");
        var paragraph1 = document.createElement("p");
        var paragraph2 = document.createElement("p");
        h5.textContent = "  ".concat(product.name);
        Card.appendChild(h5);
        h5.className = "card-title";
        paragraph.textContent = "".concat(product.description, " ");
        Card.appendChild(paragraph);
        paragraph.className = "card-text";
        paragraph1.textContent = "".concat(product.quantity, " ");
        paragraph1.className = "card-text";
        Card.appendChild(paragraph1);
        paragraph2.textContent = "".concat(product.price, " ");
        paragraph2.className = "card-text";
        Card.appendChild(paragraph2);
    });
}
;
