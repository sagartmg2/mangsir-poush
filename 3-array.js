console.log("let vs const");
mern = "mern stack";
title = mern;
duration = 3;
isAdmin = true;

console.log("mern", mern);
console.log("title", title);

/* data-types
    - String // "text"
    - number
        - integer // whole numbers
        - flotas / decimal
    - Boolen       
        - true
        - false
    - undefined // js only
    - null // empty

    collection

*/

var fullName = "hari bdr"; // ignore var keyword
let address = "putalisadak";
const ROLE = "admin";

var price = 100;
var price = 200.5;

console.log("price", price);

let color = "red";
// let color = "white" // wrong

/* variable declaration and initialization */

var course; // declartion
course = "mern"; // initialziation
course = "python"; // re-initialziation

console.log("course", course);

let size; // declartion
size = "xl"; // initialization
size = "xxl"; // re-initialziation

const PI = 3.145;
// const PI = 3.145;
// PI = 3.1451; // wrong

let temp = 10;
temp = 100;
temp = 200;

var age = 10;
var age = 20;

let length;
// length = 200;
// length = 100

console.log("length", length);

let product1 = "watch";
let product2 = "mouse";
let product3 = "keyboard";

// let products ="watch","mouse"
// let products ="watch, mouse, keyboard" // wrong way

/* 
    varaible
        let <varaibleName> = <value>:
        eg:
        let color = "white"
    
    Array
        - index (always starts with 0)
        let <arrayName> = [ <element1>,<element2>,<element3> ]
        eg:
        let colors  // TODO make an array of colors
        let colors  = [ "white","red","orange" ]
                      [ 0th,1st,2nd ]


*/

// let products = [ product1,product2,product3 ]
let products = ["watch", "mouse", "keyboard"];
console.log(products);


let colors  = [ "whi","red","orange" ]
console.log("colors",colors);
console.log("colors -0th index", colors[0]  );
//  TODO: change 0th index value whi to white 

let code = "XYZ"
console.log("before-code",code);
code = "ABC"
console.log("after-code",code);





