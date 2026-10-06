// In programming, Objects are utilized to represent Entities

// Entities are any tangible or intangible, distinct object, person, place, 
    // concept or even an event, about which, data can be stored and managed in a database.
    // Example : Student, Employee, Department, Bank Account, Transaction, etc
// =================================================================================== //
// JavaScript allows you to create Objects in different ways 
// Let's look at some 

// 1. Object Literal 
// Using the literal syntax of objects to directly form the key:value pairs

const student1 = {
    id : 3124,
    firstName : "Roy",
    lastName : "Kapoor",
    location : "BLR"
}
// Printing the object entirely
console.log(student1);

// Accessing individual values
console.log(`The student of id : ${student1.id} is ${student1.firstName}`);

// ---------------------------------------------------------------
br();
// 2. Object Constructor
// Constructing a generic, empty object using Object constructor;
const student2 = new Object();

student2.id = 1234;
student2.firstName = "Kiran";
student2.lastName = "John";
student2.location = "HYD";

console.log(student2);

// Accessing individual values
console.log(`The student of id : ${student2.id} is ${student2.firstName}`);
// ---------------------------------------------------------------
br();
// 3. Using ES6 class syntax 
// For blueprinting the schema for all objects belonging to same entity type

class Student {
    constructor(id, fname, lname, location = "BLR"){
        this.id = id;
        this.firstName = fname;
        this.lastName = lname;
        this.location = location;
    }

    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
// Deliberately leaving out value for location parameter so that it will assume the default value
const student3 = new Student(41234, "Rajeev", "Khanna");
console.log(student3);
// Accessing individual values
console.log(`The student of id : ${student3.id} is ${student3.firstName}`);




// Function linebreak in output
function br (){console.log("-".repeat(50))};