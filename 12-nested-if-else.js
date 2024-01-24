/* if else  

    nested conditions
    nested if else
*/

let willRain = true;
let hasProbablity = false;
let isCold = true

if (willRain) {
  console.log("take umbrealla");
} else {
  if (hasProbablity) {
    console.log("you might need it. ");
  } else {
    console.log("no need");
  }
}

if(willRain){
  console.log("take umbrealla");
}else if( hasProbablity){
    console.log("you might need it. ");
}else{
    console.log("no need. ");
}

let student = {
  name: "ram",
  paidStatus: false,
  hasScholorship: false,
};

/* if not paid, ram canot give exam */
/* if not paid but has scholorship, ram can give exam */

if(student.paidStatus){
    console.log("he can enroll");
}else{
    if(student.hasScholorship){
        console.log("he can enroll");
    }else{
        console.log("he can't");
    }

}

function getMonth(){
    /* code here */
  return  "feb" // change this. 
}

console.log(getMonth(1)); // jan
console.log(getMonth(12)); // dec
console.log(getMonth(0)); // invalid  input between 1-12
console.log(getMonth(13)); // invalid input between 1-12


console.log(getMonth("other-data")); // invalid  type:number
console.log(getMonth(null)); // invalid  type:number


console.log(typeof(12));
console.log(typeof(-1));
console.log(typeof(null));
console.log(typeof([]));
console.log(typeof(undefined));

// switch 