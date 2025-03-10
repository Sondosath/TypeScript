//Task 1: Verify Interface Properties
//You are given an object that follows an interface Person 
// with properties name and age. Check if the age is above 18 
// and print "Adult" if true, otherwise print "Minor."
//----------------------------------------------------
var products4 = [
    {
        name: "BOOK",
        description: "A high",
        quantity: 3,
        price: 100
    },
    {
        name: "NoteBooks",
        description: "A high",
        quantity: 5,
        price: 550
    },
    {
        name: "Pin",
        description: "A high",
        quantity: 7,
        price: 10
    }
];
function loadProducts() {
    debugger;
    var productList = document.getElementById("productForm");
    var name = document.getElementById("name");
    var products4 = [
        {
            name: name.value,
            description: "A high",
            quantity: 3,
            price: 100
        }
    ];
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    // جلب القيم من الحقول
    // let product = {
    //     name = document.getElementById("name").value,
    //     description: document.getElementById("description").value,
    //     price: document.getElementById("price").value,
    //     quantity: document.getElementById("quantity").value
    // };
    localStorage.setItem("productData", JSON.stringify(products4));
    alert("Product saved successfully in localStorage!");
}
;
