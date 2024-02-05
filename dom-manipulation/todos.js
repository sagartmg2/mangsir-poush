let numbers = [1, 2, 3];
let totalSum = 0;
/* code  */

console.log(totalSum);

let todos = [];
// let todos = ["react"];

function addTodo(event) {
  event.preventDefault();
  let input = document.getElementById("input-title").value;
  todos.push(input);
  console.log(todos)
  convertTodosToList()
}

function deleteTodo(deletableIndex) {
  todos = todos.filter((el, index) => index != deletableIndex);
  console.log(todos);
  convertTodosToList()
}

function convertTodosToList(){
  let outputList = "";
  // ["react","js"]
  todos.forEach((input, index) => {
    outputList += `
    <li>${input} <button onclick="deleteTodo(${index})">delete</button> </li>
    `;
  });

  console.log(outputList); // "<li>react</li> <li>expres</li> "

  document.getElementById("todos-list").innerHTML = outputList
}