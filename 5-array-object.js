let product1 = "watch";
let product2 = "keywobaord";

// let products = "watch","keywobaord"  // wrong

let products = [product1, product2];

products = ["watch", "keywobaord"];
products[1] = "keyboard";
console.log(products[1]);

/* array
    - collectin of simiilar data-types
*/


let users = ["ram", "sita","hari"];
// users = ["ram", "sita", 98242, 982423];  // wrong
console.log(users ); // we need detial info of multiple users

let userOne = {
    name:"ram",
    phone:9855
}

let userTwo = {
    name:"sita",
    phone:9860
}




/* 
    Object
        - same like real life objects
    

    let <objName> = {
        <key>:<value>,
        <key>:<value>,
        <attribute>:<value>,
        <property>:<value>,
    }

 */

let color = "red";
color = {
  "name": "red",
  "hex value": "#FF000",
  "rgb value": "rgb(255,0,0)",
};

console.log(color);  // todo access hex value 

let myWatch = "casio"; // we need brand, modelNnumber, type, price
myWatch = {
  brand: "Casio",
  modelNumber: "G5-100",
  type: "analogue",
  price: "hun", // change to hundred
};

console.log("before",myWatch.price);
myWatch.price = 1000
console.log("after",myWatch.price);


// let user1 = "ram"
let user1 = {
    name:"hari",
    // address:"putalisadak,ward-10,provice3,kathmandu"
    
    permanentAddress:{
        province:1,
        district:"jhapa",
        street:"xyz"
    },
    temporaryAddress:{
        province:3,
        district:"kahtmandu",
        street:"putalisadak"
    },
}

/* output: ram is from jhapa */ // research: template literal / string literal
console.log(user1.name);
console.log(user1.permanentAddress.district);

console.log("address: ",user1.name ,"is from ",user1.permanentAddress.district);
console.log("address:"+user1.name +"is from "+user1.permanentAddress.district);

/* string literal 
    - using back tick  `` above tab key
    - inside back tick you can use ${ calcuation /varaible }
*/
console.log(`Ram is from jhapa`);

let input1 = 1;
let input2  = 100
let sum = input1 + input2
console.log(`sum of ${input1} + ${input2} = ${sum}`);


/* 
    internally in jsavascirpt
    const console = {
        log: function
    }
*/

let user2 = {
    name:"sita",
    // address:"putalisadak,ward-10,provice3,kathmandu"
    address:{
        permanentAddress:{
            province:1,
            district:"jhapa",
            street:"xyz"
        },
        temporaryAddress:{
            province:3,
            district:"kahtmandu",
            street:"putalisadak"
        },
    }
}

