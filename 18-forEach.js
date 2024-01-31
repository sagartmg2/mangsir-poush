const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"];

for (let index = 0; index < nepaliNames.length; index++) {
  const element = nepaliNames[index];
  console.log(`${element} - ${index}`);
}

const doSomething = () => {
  console.log("do somehting");
};

const printElement = (element, index) => {
  console.log("element:", element, index);
};

nepaliNames.forEach(printElement);

let numbers = [1, 2, 3, 4, 5];

let finalSum = 0;
numbers.forEach((el, idx) => {
  console.log("element", el, "index:", idx);
  finalSum += el;
});
console.log({ finalSum });


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
];

for (let index = 0; index < todos.length; index++) {
  if (todos[index].status) {
    console.log(`${todos[index].title} is complted`);
  } else {
    console.log(`${todos[index].title} is complted`);
  }
}

todos.forEach((todo) =>{
  if(todo.status){
    console.log(`${todo.title} is compolted`);
  }else{
    console.log(`${todo.title} is pending`);
  }
})

// using forEach function of an array 

/* html is completed */
/* js is pending */
/* react is pending */

/* 
    array functions
        - forEach
        - map
        - filter
        - find
*/