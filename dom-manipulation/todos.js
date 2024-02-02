let numbers = [1, 2, 3];
let totalSum = 0;
/* code  */

console.log(totalSum);

let todos = [];
// let todos = ["react","epxress"];

function addTodo(event) {
  event.preventDefault();
  let input = document.getElementById("input-title").value;
  todos.push(input)

  let outputList = "";

  todos.forEach((input,index) => {
    outputList += `<li>${input} <button onclick="deleteTodo(${index})">delete</button> </li>`;
  });

  console.log(outputList)

  document.getElementById("todos-list").innerHTML = outputList;
}

function deleteTodo(index){
    console.log(index);

}
