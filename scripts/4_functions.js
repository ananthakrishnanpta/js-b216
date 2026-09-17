// Function : Re-usable code-block; Unit of logic;

// 1. Regular function : 

    // function <functionName>(parameter1, parameter2){
    //     // Logic
    //     return <return value>
    // }

    // fibonacci number in function

// function fib(n){
//     if (n == 1){
//         return 0;
//     } 
    
//     if (n == 2){
//         return 1;
//     }

//     return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(5));

// // 2. Anonymous Function

// const f = function (x, y){
//     return x + y;
// }

// // 3. Arrow function 
// const t = (x, y) => {
//     return x + y;
// }

    // sayHello();
    // // Here we are able to call the function before definition 
    // because of function hoisting

    // function sayHello(){
    //     console.log("Hello");
    // }

// function sayHello(name){
//     console.log(`Hello, ${name}!`);
// }
// sayHello("Akash");

// function sayHello(name, gender){
//     console.log(`Hello ${gender == 'male' ? "Mr." : "Ms."}${name}`);
// }
// sayHello("Akash","male");


const teacher_data = {
    name : "Arun",
    students : [
        {
            id : 1,
            name : "Kiran",
            present : true,
        },
        {
            id : 2,
            name : "Vimal",
            present : false
        },
        {
            id : 3,
            name : "Tarun",
            present : true
        },
        {
            id : 4,
            name : "Reshmi",
            present : true
        }
    ]
}
function capitalize(string){
    return `${string[0].toUpperCase()}${string.slice(1,string.length)}`;
}

function sayHello(data){
    let teacher = data.name;
    let students = data.students.filter((student) => student.present);
    data.students.forEach((student) => student.name = capitalize(student.name));

    let message = `Hi ${teacher}, the following students are waiting for you : `;
    for(let [index, student] of students.entries()){
        if(index == students.length - 1){
            message += `and ${student.name}.`;
        } else {
            message += `${student.name}, `;
        }
    }

    console.log(message);
}

// sayHello(teacher_data);

function raceCars([first, second, third, ...others]){
    let message = `
    The race was a thrilling experience with 
        ${first} finishing first, 
        ${second} in second position, 
        ${third} in third position,`;

    if(others.length > 0){message += `\n followed by \n`};
    
    for(let [index, car] of others.entries()){
        if(index == others.length - 1){
            message += `and then ${car} finishing last.`;
        } else {
            message += `${car}, `;
        }
    }
    console.log(message);
}

let winners = ['Lotus', 'BMW', "Mercedes"]
let runner_ups = ["Mistubushi", "Nissan", "Honda"]

raceCars([...winners, ...runner_ups]);
