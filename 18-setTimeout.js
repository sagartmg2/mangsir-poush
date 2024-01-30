


const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"];

for (let index = 0; index < nepaliNames.length; index++) {
    const element = nepaliNames[index];
    console.log(`${element} - ${index}`);
}



const showPopup = () =>{
    console.log("show popup");
    return undefined
}

/* callback function 
    - a function passed as an arguement to another function. 
*/


setTimeout(showPopup,2000)

/* anynomous function   */
setTimeout(()=>{
    console.log("second popup");
},3000)











