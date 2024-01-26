function getMonthName(monthNumber) {
  let output = null;

  if (typeof monthNumber == "number") {
    if (monthNumber <= 0 || monthNumber >= 13) {
      output = "invaid type between 1-12";
    } else {
      if (monthNumber == 1) {
        output = "jan";
      } else if (monthNumber == 2) {
        output = "feb";
      } else if (monthNumber == 3) {
        output = "mar";
      } else if (monthNumber == 4) {
        output = "apr...";
      }
    }
  } else {
    output = "invalid  data-type, type number only";
  }

  return output;
}

console.log(getMonthName(3));
console.log(getMonthName(0));
console.log(getMonthName("hello"));
console.log(getMonthName());

/* <1 ,>=13 type between 1 -12 */
/* other than  number  please type valid input  */

let todos = [
  {
    title: "html",
    status: true,
  },
  {
    title: "js",
    status: false,
  },
  {
    title: "react",
    status: false,
  },
  {
    title: "mongob",
    status: false,
  },
  {
    title: "express",
    status: false,
  },
];

/* html is complted */
/* js is pending */
/* react is pending */

// if (todos[0].status) {
//   console.log(`${todos[0].title} is complted`);
// } else {
//   console.log(`${todos[0].title} is pending`);
// }

// if (todos[0].status) {
//   console.log(`${todos[0].title} is complted`);
// } else {
//   console.log(`${todos[0].title} is pending`);
// }

function checkStatus(index) {
  if (todos[index].status) {
    console.log(`${todos[index].title} is complted`);
  } else {
    console.log(`${todos[index].title} is pending`);
  }
  return undefined;
}
console.log(checkStatus(0));
checkStatus(1);
checkStatus(2);

function checkTodoStatus(index) {
  if (todos[index].status) {
    return `${todos[index].title} is complted`;
  } else {
    return `${todos[index].title} is pending`;
  }
}

console.log(checkTodoStatus(1));
console.log(checkTodoStatus(2));
console.log(checkTodoStatus(0));
console.log(checkTodoStatus(3));
console.log(checkTodoStatus(4));

console.log(todos.length);

/* 
    for( initalPoint ; condition ; mutator ){
        // do something
    }
*/

for (let index = 0; index < 5; index++) {
  console.log(index);
}

console.log("end loop");
