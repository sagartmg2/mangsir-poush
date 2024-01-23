/* operators */
/* assignment operator */
let name = "ram";
let count = 100
count = count + 1  // 101
count += 1 // 102  // this is shortcut for above code

console.log("count",count);
console.log({count:count});
console.log({count});






let title = "mern"
let ourCourse = {
    title,
    duration:3
}
console.log(ourCourse);



/* arthemactic operators
     + 
     - 
     /  // divison
     *
     %  // modolus // returns remainder
*/

console.log(1 + 2);
console.log(9 / 2);
console.log(9 % 2);
console.log("hello" + "world");
console.log("hello \n world");

let services = [
  { img: "servic1.png", title: "service1" },
  { img: "servic2.png", title: "service2" },
];

/* comparision operators
    == // equality operator
    >
    >=
    <
    <=

*/

console.log("one" == "one");
console.log("Two" == "one");
console.log("Two" == "two"); // false
console.log("Two" == "Two");
console.log(" Two" == "Two"); // false
console.log(10 >= 10); 
console.log(10 <= 10); 
console.log(5 < 5); // false 
console.log(5 <= 5); // true


/* 
pre-increment and post-increment 

*/

let number  = 50

console.log(number++); // 50 , update number in background
console.log(number); // 51


let age   = 20
console.log(++age); // 21, updates , and we can access updated value instantly
console.log(age);


function sum(input1,input2){
    return input1 + input2
}

let number1 = 10
// console.log("sum",sum(number1++,10)); // sum(10,10)
// console.log("sum",sum(++number1,10)); // sum(11,10)
console.log({number1});

// ++number
// number++
// console.log({"number":number});
// console.log({number});

/* LGOICS OPERATORS. */