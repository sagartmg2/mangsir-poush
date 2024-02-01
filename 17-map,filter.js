/* for loop */
/* forEach */
/* map */
/* filter */
/* find */ // findcountry code
/* reduce */

let numbers = [1, 2, 3, 4];
let doubledNumbers = [];

// for(let index = 0 ;index<numbers.length;index++){
//     doubledNumbers.push(numbers[index]*2)
// }

let result = numbers.forEach((element) => {
  doubledNumbers.push(element * 2);
});
console.log(result); // undefined
console.log(doubledNumbers); // [2,4,6,8]

/* map function
    - returns new array of exact length of our original array
*/

let tripleNumbers = numbers.map((element) => {
  return element * 3;
});

console.log(tripleNumbers);

const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"];
/* create fake database.  */
let dummyDatas = [];

// for (let index = 0; index < nepaliNames.length; index++) {
//     let element = nepaliNames[index].toLowerCase();
//     dummyDatas.push({
//         name: element,
//         email:element+"@gmail.com",
//         password:element+index,
//     })
// }

// nepaliNames.forEach((element,index) => {
//   dummyDatas.push({
//     name: element,
//     email: element + "@gmail.com",
//     password: element + index,
//   });
// });

dummyDatas = nepaliNames.map((element, index) => {
  return {
    name: element,
    email: element + "@gmail.com",
    password: element + index,
  };
});

console.log(dummyDatas);

let wholeNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

/* falsy values */

let condition = false;
condition = null;
condition = undefined;
condition = 0;
condition = NaN;
condition = "";
// other than above six, all are considered true in js.

condition = "hello";
condition = 123;
condition = [];
condition = {};

if (condition) {
  console.log("true condition");
} else {
  console.log("false condition");
}

wholeNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

/*
 let evenNumbers = [];
wholeNumbers.forEach((el) => {
  if (el % 2 == 0) {
    evenNumbers.push(el);
  }
});

console.log(evenNumbers); // [2,4,6,8] // using filter method
 */

let evenNumbers = wholeNumbers.filter((el, index) => {
  if (el % 2 == 0) {
    return true;
  }
  return false; // return undefined by default which is also falsy value
});

let oddNumbersOld = wholeNumbers.filter((el) => {
  if (el % 2 !== 0) {
    return true;
  }
});

let oddNumbers = wholeNumbers.filter((el) => el % 2 !== 0);

console.log("odd", oddNumbers);

const double = (input) => {
  return input * 2;
};
const triple = (input) => {
  return input * 3;
};

const quadraple = input => input * 4;

console.log(double(100));
console.log(triple(100));
console.log(quadraple(100));
