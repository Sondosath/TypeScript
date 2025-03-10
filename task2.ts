//Task 1: Verify Interface Properties
//You are given an object that follows an interface Person 
// with properties name and age. Check if the age is above 18 
// and print "Adult" if true, otherwise print "Minor."
//----------------------------------------------------

// interface Person {
//     name: string;
    
//     age: number;
// }
// const Persons: Person[] = [
//     {
//         name: "Sondos",
//         age: 24,
       
//     },
// ];
// if (Persons[0].age >= 18){
//     console.log("Adult");
// }
// else {
//     console.log("Minor");

// }









//Task 2: Iterate Through an Array in an Interface
//You are given an object that follows an interface Teacher with 
// properties name and subjects (an array of subjects). Print all the subjects the teacher teaches.
//------------------------------------------------


// interface Teacher {
//     name: string;
    
//     subjects: string[];
// }
// const teacher: Teacher[] = [
//     {
//         name: "Sondos",
//         subjects: ["ARABIC","Math","English"],
       
//     },
// ];

// console.log(teacher[0].subjects);



//Task 3: Modify Object in an Array of Interfaces
//You are given an array of Product interfaces, where each product has a name, price, and quantity.
// Write a script to decrease the price of each product by 15% if the quantity is greater than 5.
//------------------------------------------------

// interface Productt {
//     name: string;
//     quantity: number;
//     price: number;
// }

// const products: Productt[] = [
//     {
//         name: "Laptop",
//         quantity: 3,
//         price: 100
//     },
//     {
//         name: "Headphones",
//         quantity: 5,
//         price: 550
//     },
//     {
//         name: "Smartphone",
//         quantity: 7,
//         price: 10
//     }
// ];

// for ( var i =0; i<products.length ; i++){
//     if (products[i].price > 5){
//         let  discount :number = (products[i].price * 15) /100;
//         products[i].price = products[i].price - discount ;
//         console.log(products[i]);

//     }
// }






//Task 4 : Create a form inside the HTML page that contains inputs for
//  ( name , description, price and quantity) for product and when you submit the 
// form it will save the product inside array in the local storage and then display all the 
// products as a cards under the form.
//*use interface to create a structure for this product 
interface Product {
    name: string;
    description:string;
    quantity: number;
    price: number;
}

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


function loadProducts(): void {

    const productList : any = document.getElementById("productForm");
   

    let name :any= productList.name;
    let description : any =  productList.description;
    let quantity : any =  productList.quantity;
    let price : any =  productList.price;
    const products4: Product[] = [
        {
            name: name.value ,
            description:description.value,
            quantity: quantity.value,
            price: price.value
        }
    ]         
        localStorage.setItem("productData", JSON.stringify(products4));

        alert("Product saved successfully in localStorage!");

        productList.innerHTML = ""; // Clear existing content
         const Card : any = document.getElementById("Card");


        products4.forEach(product => {
            const h5 = document.createElement("h5");
            const paragraph = document.createElement("p");
            const paragraph1 = document.createElement("p");
            const paragraph2 = document.createElement("p");

            h5.textContent =  `  ${product.name}`;  
            Card.appendChild(h5);
            h5.className ="card-title";


            paragraph.textContent =`${product.description} `;
            Card.appendChild(paragraph);
            paragraph.className="card-text";


            paragraph1.textContent =`${product.quantity} `;
            paragraph1.className="card-text";
            Card.appendChild(paragraph1);


            paragraph2.textContent =`${product.price} `;
            paragraph2.className="card-text";
            Card.appendChild(paragraph2);

            
        });
    
    
};

