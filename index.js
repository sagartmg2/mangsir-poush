const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"];


let dummyUsers = [];

for (let index = 0; index < nepaliNames.length; index++) {
    let element = nepaliNames[index].toLowerCase()
    dummyUsers.push({
        name:element,
        email:`${element}@gmail.com`,
        password:`${element}${index}`
    })
}

console.log({ dummyUsers });




/* 

TODO: 
    From the above array create an new array of users with email and password 


    OUTPUT should be like following
    [
        { name: 'Aarav', email: 'aarav@gmail.com', password: 'aarav0' },
        { name: 'Aarya', email: 'aarya@gmail.com', password: 'aarya1' },
        { name: 'Aasha', email: 'aasha@gmail.com', password: 'aasha2' },
        { name: 'Anisha', email: 'anisha@gmail.com', password: 'anisha3' },
    ] 

*/
