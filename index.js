let userOne = {
  name: "ram",
  phone: 9855,
};

let userTwo = {
  name: "sita",
  phone: 9860,
};

let userThree = {
  name: "hari",
  phone: 9860,
};

let users = ["ram", "sita", "hari"];
// users = ["ram", "sita", 98242, 982423];  // wrong

users = [userOne, userTwo, userThree];
console.log("users", users); // we need detial info of multiple users

let courses = ["mern", "python", "qa"];
let course1 = {
  title: "mern",
  duration: "3 months",
  teacher: "xyz",
};
let course2 = {
  title: "python",
  duration: "3 months",
  teacher: "abc",
};

// courses = [course1, course2];  // instead of this, we can directly create like below

// mern-syllabus:  js-20days, react-20day, express-30days
// python  oop-10days, django:40days
// qa  sql-10days, postman:30days
courses = [
  {
    title: "mern",
    teacher: "abc",
    duration: "3months",
    syallubs: [
      {
        topic: "js", // change this to javascript
        duration: "2 days", // change this to 20 days
      },
      {
        topic: "reac",
        duration: "30 days",
      },
    ],
  },
  {
    title: "python",
    teacher: "ijk",
    duration: "2. months",
    syallubs: [
      {
        topic: "oop",
        duration: "20 days",
      },
      {
        topic: "django",
        duration: "30 days",
      },
    ],
  },
  {
    title: "qa",
    teacher: "xyz",
    duration: "2 months",
    syallubs: [],
  },
];
courses[0].syallubs[0].topic = "javscript";
courses[0].syallubs[0].duration = "20 days";
console.log(courses);

/* TODO
      create users array
          each should has own personal infos
          - each user has two/three phone numbers with different providers
  */

let usersData = [
  {
    name: "ram",
    contacts: [
      {
        number: 9234234,
        "service provider": "ntc",
      },
      {
        number: "ONE", // CHANGE THIS TO 984042..
        "service provider": "ntc",
      },
      {
        number: 98034,
        "service provider": "ncell",
      },
    ],
  },
  {
    name: "sita",
    /* OTHER DATAS.. */
  },
];

let apiResponse = {
  data: {
    total: 2,
    results: {
      data: usersData,
    },
  },
};

console.log("apiResponxie", apiResponse);

/* classes  1 - A(section) with classTeacher,noOfStudents, B,   ,2 A  B, ,3,4 */
/* TODO: create  classes array */
let classes = ["one", "two"];

classes = [
  {
    class: "one",
    sections: [
      {
        name: "A",
        classTeacher: "abc",
        numberOfStudents: 10,
        students: [
          { name: "xyz", roll: 1 },
          { name: "ijk", roll: 2 },
        ],
      },
      {
        name: "B",
        classTeacher: "abc",
        numberOfStudents: 10,
        students: [
          { name: "xyz", roll: 1 },
          { name: "ijk", roll: 2 },
        ],
      },
    ],
  },
];
/* classes = [
  {
    sectionA: {  // different keys
      noOfStudents: 50,
      classTEacher: "Abc",
    },
  },
  {
    sectionB: {  // // different keys so wrong
      noOfStudents: 50,
      classTEacher: "Abc",
    },
  },
]; */
console.log(classes);

let todos = [
  {
    title: "varaible",
    status: "completed",
    createAt:"2024-01-01"
  },
  {
    title: "array",
    status: "completed",
    createAt:"2024-01-02"
  },
  {
    title: "object",
    status: "completed",
    createAt:"2024-01-04"
  },
  {
    title: "loop",
    status: "pending",
    createAt:"2024-01-05"
  },
  {
    title: "function",
    status: "pending",
    createAt:"2024-01-05"
  },
];

/* solutions.. */

/* use template literal / string literal */
/* 
    varaible is complted
    array is complted
    object is complted
    loop is complted
    function is complted

*/
/* 
    varaible crated at 2024-01-01 is complted
    array crated at 2024-01-01 is complted
    object crated at 2024-01-01 is complted
    loop crated at 2024-01-04 is complted
    function crated at 2024-01-05 is complted
*/
