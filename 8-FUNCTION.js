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


/* 
console.log(`${todos[0].title} craetedAt ${todos[0].createAt} is ${todos[0].status}`);
console.log(`${todos[1].title} craetedAt ${todos[1].createAt}  is ${todos[1].status}`);
console.log(`${todos[2].title} craetedAt ${todos[2].createAt} is ${todos[2].status}`);
console.log(`${todos[3].title}  craetedAt ${todos[3].createAt} is ${todos[3].status}`);

 */
/* donot repeat yourself  */

/* function  */

function printStatus(index){
    // console.log("index",index)
    console.log(`${todos[index].title} craetedAt ${todos[index].createAt} is ${todos[index].status}`);
}

// let desiredIndex = 0
// console.log(todos[0]);
// console.log(todos[desiredIndex]);

printStatus(3)
printStatus(0)
printStatus(1)
printStatus(2)


dobule(2)  // 2*2 = 4
dobule(6)  // 2*6 = 12