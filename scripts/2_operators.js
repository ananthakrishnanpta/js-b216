// 1. Arithmetic operators 
// +, -, *, / 

// % - modulus
// ** exponentiation

// 2. Assignment Operators

// =    | x = 10 | Assign
// +=   | x += 5 | Increment by given value
// -=   | x -= 5 | Decrement by given value
    // Similarly *=, /=, %=, **=  

    // Increment/Decrement Operators
    // ++, --
    // Pre-increment/decrement -> Inc/Dec happens before execution of statement
    // For eg:
    let x = 10;
    console.log(++x); // result will be 11

// 3. Comparison Operators

    // ==  | Equal Value 
    // === | Equal Value AND type
    // !=  | Not equal value
    // !== | Not equal value OR type
    // >, <, >=, <= 

// 4. Logical Operators
    // AND -> &&

    let age = 20;
    let hasLicense = true;

    console.log(age >= 18 && hasLicense)
    // OR  -> || 
    // NOT -> !

// 5. Bitwise Operators
    // & -> AND
    // | -> OR
    // ^ -> XOR
    // ~ -> NOT
    // << -> Left Shift
    // >> -> Right Shift
    // >>> -> Zero-fill right shift

// 6. Membership Operator

let users = {'Raj' : 20,
            'Kumar' : 30, 
            'Kiran' : 40};

console.log("Raj" in users);

// 7. instanceof Operators
class Student{}

const student = new Student();

console.log(student instanceof Student);

// 8. Ternary Operator
// Deciding b/w 2 values for one variable
// syntax 
// const <variable> = <condition> ? <expr1> : <expr2>;
const num = 10 > 2 ? 5 : 10;
console.log(num);
// num will be 5

let user_age = 18;
const heavy_driving_age_limit = 21;
const driving_age_limit = 18;

const message = user_age >= heavy_driving_age_limit ? 
                "You can drive trucks" :
                    user_age >= driving_age_limit ?
                        "You can drive cars" :
                        "You cannot drive";
console.log(message);


// 9. Nullish Coalescing Operator

let username = "Shahina";

console.log(`Hi ${username ?? "Guest"}, welcome to our website...`);

// 10. Optional Chaining

let user = {
    'name' : "Arun",
    'age' : 20,
}

console.log(user.phone?.work);
