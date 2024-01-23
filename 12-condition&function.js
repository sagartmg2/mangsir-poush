/* if else 


if( <condition>){
    do something
}else{
    do something else
}

*/

let willRain = true;

if (willRain) {
  console.log("take umbrella");
} else {
  console.log("no need");
}

let employee1 = {
  name: "ram",
  role: "reception",
};
let employee2 = {
  name: "hari",
  role: "manager",
};
let employee3 = {
  name: "sita",
  role: "manager",
};

let allowedRole = "manager";

/* ram cannot access vault */
/* hari cannot access vault */
/* sita can access vault */

/* 
if(employee1.role == allowedRole){
// if("reception" == "manager"){
    console.log(`${employee1.name} can access`);
}else{
    console.log(`${employee1.name} cannot access`);
}

if(employee2.role == allowedRole){
    console.log(`${employee2.name} can access`);
}else{
    console.log(`${employee2.name} cannot access`);
}

if(employee3.role == allowedRole){
    console.log(`${employee3.name} can access`);
}else{
    console.log(`${employee3.name} cannot access`);
} */

/**
 * function to calculate sum of tow number
 * @param {number} input1
 * @param {number} input2
 * @returns number
 */

function sum(input1, input2) {
  return input1 + input2;
}

console.log(sum(100, 50));

/**
 *
 */

function checkAccessibility(user) {
  console.log("user", user);
  if (user.role == "manager") {
    console.log(`${user.name} can access`);
  } else {
    console.log(`${user.name} cannot access`);
  }
}

checkAccessibility(employee1);
checkAccessibility(employee2);
checkAccessibility({
  name: "shyam",
  role: "reception",
});



/* 
function checkRole(name, role) {
  if (role == "manager") {
    console.log(`${name} can access`);
  } else {
    console.log(`${name} cannot access`);
  }
}

checkRole(employee1.name, employee1.role);

 */