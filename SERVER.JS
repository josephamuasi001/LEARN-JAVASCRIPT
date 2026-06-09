//Variables
// const productName = "iPhone 16"

// let stock = 20;

// stock = 35;

// console.log(productName, " remaining ", stock)


//Data Types
// const customerName = "Roland"
// let quantity = 5
// const isPaid = true
// let discountCode = null
// let deliveryDate;

// console.log(typeof customerName)
// console.log(typeof quantity)
// console.log(typeof isPaid)
// console.log(typeof discountCode)
// console.log(typeof deliveryDate)

// Functions
// function multiply(a, b) {
//     return a * b
// }

// const result = multiply(6, 7)

// console.log(result)


// Arrays
// const products = [
//     "iPhone 16",
//     "HP Laptop",
//     "Samsung Tablet"
// ]

// console.log(products[0])

// products.push("Airpods Pro")
// console.log(products.length)
// console.log(products.includes("HP Laptop"))


//Object
// const customer = {
//     name: "Roland",
//     age: 24,
//     isMember: true
// }

// console.log(customer.name)
// customer.age = 25
// customer.city = "Accra"
// console.log(customer)

//Loops
// const products = [
//     "iPhone 16",
//     "HP Laptop",
//     "Samsung Tablet"
// ];

// for (const product of products) {
//     console.log("Available Product: ", product)
// }

//Conditionals
// const stock = 0;

// if (stock > 0) {
//     console.log("Products Available")
// } else {
//     console.log("Out of Stock")
// }

//ES6 Template Literals
// const customerName = "Roland";
// const product = "HP Laptop";

// console.log(`${customerName} purchased ${product}`)


//Arrow Functions
// const subtract = (a, b) => {
//     return a-b;
// }
// const result = subtract(15,4)
// console.log(result)

//Object Destructuring 

// const product = {
//     name: "iPhone 16",
//     price: 1200,
//     brand: "Apple"
// }
// const {name, price} = product;
// console.log(`${name} ${price}`)

// const product = {
//     name: "iPhone 16",
//     price: 1200,
//     brand: "Apple"
// };

// const {name, price} = product;
// console.log(`${name} ${price}`)

//Spread Operator(...)
const products = [
    "iPhone 16",
    "HP Laptop"
];

const updatedProducts = [
    ...products,
    "Samsung Tablet"
]
console.log(updatedProducts)