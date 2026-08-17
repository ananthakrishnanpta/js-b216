// 1. Variables ; 

    // Programming requires us to store different values in memory(RAM)
    // while processing almost every tasks. 
    // Remembering the memory addresses associated with such values
    // is not practical.
    // Variables provide identifiers (or variable names) 

    // In Traditional static programming languages,
    // we declare a variable using the datatype of value.
    // Eg .  Let's say we want to store age of a person :>
        // int age; // -> Declaration (memory allocation)
        // age = 10;// -> Initialization
        // age = 12;// -> Re-assignment
            // OR
        // int age = 10; // -> Declaration and Initialization together
    // Some variables, once initialized, stays with the same value
    // throughout the runtime. These are usually configuration values.
    // These are called 'Constants'.
    // Their values are frozen.
    // These are usually declared along with keywords to denote their speciality.
    // Value must be assigned during declaration.
        // const int AGE_LIMIT = 18; -> C++
        // final int AGE_LIMIT = 18; -> Java
    
// JS was developed as a client-side scripting language meant for Web designers.
    // The coders were not very well versed in programming conventions and rules.
    // To help them write their logic without being affected by the rules,
    // JS included some features.

// 1. Usage of variables, without declaring datatypes - Dynamic typing.
    // The datatype is guessed during runtime based on assigned value rather than
    // hoping the coder will denote.
        // var age = 10; -> var keyword denotes a generic variable with no specific type.

// 2. Usage of variables with no declaration; Direct assignment.
        age = 10; 
        console.log(age);
    // var age; will be done automatically implicit;
// 3. Automatic semi-colon insertion
    // In classic programming languages, statements are separated by different delimiter symbols.
    // Usually its a ';' semi-colon symbol. Even though JS follows the same, some developers tend to forget
    // this. JS automatically inserts the delimiter at the statement ends while running to prevent errors.
    console.log("Asdfasf")

// 4. Hoisting
    // Not everyone understands how variables and functions need to be declared before calling.
    // For example,
    f1() 

    function f1(){
        // logic
    }

    x = 10;
    var x;

    // Doesn't seem wrong to some people who are new to coding.

    // JS Helps by hoisting the var and function declarations
    //  to the top of the script while running.

//  ------------------------------------------------------------------

// Variable declaration

// 1. const 
    // - block scope
    // - frozen value
    // - Cannot be re-declared or re-assigned.
// 2. let 
    // - Block scope
    // - Value changes during runtime
    // - Cannot be re-declared but can be re-assigned.

// 3. var
    // - Function Scope (Unless var is not enclosed in any function, then considered global scope)
    // - Values change during runtime
    // - Can be re-declared and re-assigned.


// Preference of usage

    // const >>> let >>>>>>>> var 


// ---

{
    const a = 10;
    let b = 20;
    var c = 30;
    {
        console.log(a);
    }
}

// console.log(a);
// console.log(b);
console.log(c);

