// let course = "mern"
// console.log(course)
console.log(sumOld(1,2)); // hoisting

function sumOld(...rest) {
  let result = 0;
  console.log("REST", rest); // [1, 2, 3, 4, 5, 6]

  for (let index = 0; index < rest.length; index++) {
    let number = rest[index];
    result = result + number;
  }

  return result;
}

const sum = (...rest) =>{
    let result = 0
    for (let index = 0; index < rest.length; index++) {
        const element = rest[index];
        result = result + element
    }
    return result
}

console.log("sum", sum(1, 2, 3, 4, 5, 6)); // 21



// () =>{ } // arrow function





function doSomething() {
  // do something
}

const doSomehting = () =>{
    // do somehting
}
