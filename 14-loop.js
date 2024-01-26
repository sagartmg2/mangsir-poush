/* loop 

    for(initalPoint; condition; mutator){
            // do some iterative task
    }

*/

for (let number = 0; number < 5; number++) {
  console.log(number);
}
console.log("loop end");

let names = ["ram", "hari", "shyam", "laxmi"];

for (let index = 0; index < names.length; index++) {
  console.log(`index:${index} , ${names[index]}`);
}

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
    title: "express",
    status: false,
  },
];

function printTodoStatus(index) {
  if (todos[index].status) {
    console.log(`${todos[index].title} is complted`);
  } else {
    console.log(`${todos[index].title} is complted`);
  }
}

// printTodoStatus(0);
// printTodoStatus(1);
// printTodoStatus(2);
// printTodoStatus(3);

for (let index = 0; index <= 3; index++) {
  if (todos[index].status) {
    console.log(`${todos[index].title} is complted`);
  } else {
    console.log(`${todos[index].title} is complted`);
  }
}

function findMultiplication(inputNumber, start, end) {
  for (let count = start; count <= end; count++) {
    console.log(`${inputNumber} * ${count} = ${inputNumber * count}`);
  }
}

findMultiplication(5, 1, 10);
findMultiplication(30, 1, 5);

let user1 = {
  username: "ram",
  password: "password",
};

let user2 = {
  username: "hari",
  password: "12345678",
};

// function login(user, username, password) {
//   if (user.username == username) {
//     if (user.password == password) {
//       console.log(`${user.username} can login`);
//     } else {
//       console.log(`${user.username} cannot login`);
//     }
//   } else {
//     console.log(`${user.username} cannot login`);
//   }
// }


function login(inputUser, inputUsername, inputPassword) {
  if (
    inputUser.username == inputUsername &&
    inputUser.password == inputPassword
  ) {
    console.log(`${inputUser.username} can login`);
  } else {
    console.log(`${inputUser.username} cannot login`);
  }
}

login(user1, "ram", "Password"); // ram cannot login
login(user1, "Ram", "password"); // ram cannot login
login(user1, "ram", "password"); // ram can login
login(user2, "hari", "12345678"); //


/* logical operators  
    AND &&   
    OR || 
    NOT !
*/

let users = [
  {
    username: "ram",
    password: "password",
  },
  {
    username: "hari",
    password: "12345678",
  },
  {
    username: "shyam",
    password: "12345678",
  },
];

signIn("shyam", "12345678"); // login success
signIn("shyam", "123456"); // invalid credentails.
