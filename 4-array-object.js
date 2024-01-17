/* data types
        - string
        - number
        - boolean
        - null
        - undefined // js only

        - array

*/

let fruit1 = "apple"
fruit1 = "kiwi"

let fruit1Price = 100
let inStock = true

console.log(fruit1);
console.log(fruit1Price);


let fruit2 = "orange"
let fruit3 = "banana"
let fruit4 = "pear"
console.log("fruit-4 before",fruit4);
fruit4 = "dragon fruit" 
console.log("fruit-4 after ",fruit4);

/*  

    Array  // collections
        - collection of different values
        - index  // always starts with 0
        - usually collection of similar data-types

    let <arrayVaraible> = [ <element1> , <element2>]

*/

let fruits = ["apple","orange","banana","kiwi"]
console.log("fruites",fruits)

let evenNumbers = [2,4,6,8,10]

let oddNumbers = [1,3,5,"seven",9]
/* TODO: convert seven to 7 */

console.log("4th index before: ", oddNumbers[3]);
oddNumbers[3]  = 7
console.log("4th index after:", oddNumbers[3]);
console.log(oddNumbers);

let courses = ["mern","qa","python"]
/* todo change qa to quality assurance */
/* todo change mern to mern-stack */
/* code here */
console.log("before",courses[0]);
courses[0] = "mern stack"
courses[1] = "quality assurance"
console.log("after",courses[0]);
console.log("after",courses[1]);

console.log("3rd index -before:",courses[3]);
courses[3]  = "marketing"
console.log("3rd index - after:",courses[3]);
console.log(courses);

let color;
color  = "red"

let couseTitle = "mern"
let couseDurationInMonths = 3
let couseDuration = "3 Months"
let startTime = 4
let endTime = 5
let status = true

/* Object
        - same like real life objects

        let <varaible> = {
            <key> : <value>,
            <attribute> : <value>,
            <property> : <value>,
        }
*/

let ourCourse = {
    title:"mern",
    duration:"3 months",
    Duration:"6 months",
    startTime:4,
    endTime:5,
    endTime:6,
}

/* change couse title  from mern to mern-stack */
/* code here  */



// let ourCourse = [ "mern",3,"3 Monts", 4, 5, true ] // wrong
console.log(ourCourse);
// let ourCourses = [ "mern","qa","python"]

let projectorColor = "white"
let projectorBrand = "sony"
let projectorPrice = 50000

let projector = {
    color:"white",
    brand:"sony",
    price:50000,
}
console.log(projector);
