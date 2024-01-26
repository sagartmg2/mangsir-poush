/* logical operators
    OR ||  
        - if any one of the condition is true,
            it gives true output 
    AND  &&
    NOT !
*/

/* 
if (student.paidStaus) {
  console.log("he can give exam");
} else {
  if (student.hasScholarship) {
    console.log("he can give exam");
  }else{
      console.log("he cant");
  }
}

if (student.paidStaus) {
  console.log("he can give exam");
} else if (student.hasScholarship){
    console.log("he can give exam");
}else{
    console.log("he cant");
}
 */
let student = {
  name: "ram",
  paidStaus: true,
  hasScholarship: false,
  fulfillAttendence: true,
};

/* object destructuring */
let { paidStaus, hasScholarship, fulfillAttendence } = student;

if ((paidStaus || hasScholarship) && fulfillAttendence) {
  // if((false || true) && true){
  // if(true){
  console.log("he can give exam");
} else {
  console.log("he cant");
}

function sumOld(input1, input2, ...rest) {
  console.log({ rest });
  return input1 + input2;
}



/* arrow function */
const sum = (input1, input2, ...rest) => {
  console.log(rest);
  return input1 + input2;
};

const doSomehting = () => {
  console.log("do something");
};

doSomehting()
doSomehting()
doSomehting()

console.log(sum(1, 2, 100, 200, 300)); // 603

/* 
    console.log(sum(1,2,6)) // 3
    console.log(sum(1,2,6,10)) // 3
    console.log(sum(1,2,6,100,200)) // 3

*/

// console.log(1,2,3,4,5,6);

