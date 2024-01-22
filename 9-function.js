function printStatus(index) {
  console.log(`print status for index ${index}`);
}

printStatus(0);
printStatus(1);
printStatus(2);

/* 
    function 
        - reusable
    
    syntax:

    function <functionName>( paramer1, paramet2 ){
        // do something
    }

    <functionName>()  // executing a function
        
*/

function double(input) {
  // code to double
  let result = 2 * input;
  console.log(`input:${input},  2 * ${input} = ${result}`);
}

double(2); //  2 is called arguement
double(6); // 6 is called an arguement

function sum(input1, input2) {
  console.log(" ");
  console.log(`input1:${input1}, input2:${input2}  `);
  console.log(`${input1} + ${input2}  = ${input1 + input2}`);
}

sum(2, 10);
sum(5, 10); // 5 + 10 = 15

function diff(input1, input2 , input3 = 0) {
  let result = input1 - input2 - input3;
  console.log(`${input1}- ${input2} - ${input3} = ${result} `);
}

diff(100, 50, 25); // diff of 100 and 50 and 25  is 25
diff(100, 50); // diff of 100 and 50 is 50


"2024-01-19T13:01:03.486205+05:45".substring(0,10)

"Exploring Tomorrow :2024-01-19 "
"Career in Web : 2024-01-18 "
"Exploring Tomorrow :2024-01-19 "
"Exploring Tomorrow :2024-01-19 "

let blogs = [
  {
    title:
      "Exploring Tomorrow",
    created_at: "2024-01-19T13:01:03.486205+05:45",
  },
  {
    title:
      "Career in Web ",
    created_at: "2024-01-18T15:02:21.353832+05:45",
  },
  {
    title:
      "Degrees Dying",
    created_at: "2024-01-17T14:06:24.457394+05:45",
  },
  {
    title:
      "Career in Digital Marketing",
    created_at: "2024-01-17T11:02:40.936608+05:45",
  },
];
