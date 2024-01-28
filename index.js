let numbers = [1, 2];

numbers.push(3); // [1,2,3]
numbers.push(4); // [1,2,3,4]

console.log(numbers); // [1,2,3,4]

function doubleTheArray(numbers) {
  let result = [];

  for (let index = 0; index < numbers.length; index++) {
    result.push(2* numbers[index]);
  }

  return result;
}


let newArray = doubleTheArray([1, 2, 3]);
/* EXPECTED OUTPUT */
console.log({ newArray }); // [2,4,6]


let todos = [
    {
        title: "variable",
        status: "completed",
        createAt: "2024-01-03"
    },
    {
        title: "array",
        status: "completed",
        createAt: "2024-01-05"
    },
    {
        title: "object",
        status: "completed",
        createAt: "2024-01-07"
    },
    {
        title: "loop",
        status: "pending",
        createAt: "2024-01-09"
    },
    {
        title: "function",
        status: "pending",
        createAt: "2024-01-10"
    },
];

console.log(compltedTodos); // [ ]
console.log(pendingTodos);