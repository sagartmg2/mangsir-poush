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
console.log(evenNumbers); // [2,4,6,8] // using filter method
console.log(oddNumber); [1,3,5,7,9] // using filter method
