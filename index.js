/*

conditional statements 
if else

    if(<conidtion>){
        // do somehting for that true condition
    }else{
        // do something else
    }

*/

let isCold = false;

if (isCold) {
  console.log("take jacket");
} else {
  console.log("no need.");
}

let number1 = 100;
let number2 = 2;

if (number1 < number2) {
    console.log("num1 is less than num2");
}else{
    console.log("num1 is not less than num2");
}
console.log("Two" == "Two");

let employee1 = {
    name:"ram",
    role:"reception"
}
let employee2 = {
    name:"hari",
    role:"reception"
}
let employee3 = {
    name:"sita",
    role:"manager"
}

let allowedRole = "manager"

/* ram cannot access vault */
/* hari cannot access vault */
/* sita can access vault */







let services = [
  { index: 0, img: "servic1.png", title: "service1" },
  { index: 1, img: "servic2.png", title: "service2" },
];
