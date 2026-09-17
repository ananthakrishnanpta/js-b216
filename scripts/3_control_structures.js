// Control Structures -> Programming paradigms which controls flow of execution

// 1. Conditions

    // i. if

        // const AGE_LIMIT = 18;

        // let age = 20;

        // if (age >= AGE_LIMIT){
        //     console.log("Yeay, you can drive.");
        // }
    
    // ii. if ... else

        // let userAuthenticated = true;

        // if (userAuthenticated) {
        //     console.log("Welcome to your profile");
        // } else {
        //     console.log("Please login to continue...");
        // }

    // iii. else if 

        // const heavy_driving_age_limit = 21;

        // age = 30;

        // if (age >= heavy_driving_age_limit){
        //     console.log("You can drive trucks");
        // } else if (age >= AGE_LIMIT){
        //     console.log("You can drive cars");
        // } else {
        //     console.log("You can ride cycle");
        // }

    // iv. Nested if 

            // let age = 3;
            // let hasLicense = true;

            // if (age >= 18){
            //     if (hasLicense){
            //         console.log("You can drive a car.");
            //     } else {
            //         console.log("You need to get a license.")
            //     }
            // } else {
            //     console.log(`You can drive in ${18 - age} years.`);
            // }

            // // simplifying the above, we can also write
            // if (age >= 18 && hasLicense){
            //     console.log("You can drive.");
            // }

        // Falsy values 
            // 1. false
            // 2. 0
            // 3. -0
            // 4. 0n
            // 5. ""
            // 6. null 
            // 7. undefined 
            // 8. NaN

        // v. switch - matching one variable against multiple fixed values
        // let menu = `
        // Welcome
        // 1. Balance
        // 2. Data
        // 3. Recharge
        // 0. Exit
        // `
        // let choice = prompt(menu);
        // let balance = 20;
        // let data_balance = 200;
        // choice = Number(choice);
        // switch (choice){
        //     case 1:
        //         console.log(`You have Rs.${balance} in your talktime.`);
        //         break;
        //     case 2:
        //         console.log(`You have ${data_balance}MB left.`);
        //         break;
        //     case 3:
        //         console.log(`Please go to the nearest store.`);
        //         break;
        //     case 0:
        //         console.log("Thank you for visiting us.\nBye");
        //         break;
        //     default:
        //         console.log(`Check your input. You typed : ${choice}.`)
        // }

// 2. Loops - Repeated Execution of Code block

// for loop

// for (expr1; expr2; expr3){
//     // code block;
// }

// expr1 :> Executes once before first iteration
        // - Usually used for counter variable initialization
// expr2 :> Evaluated before started each iteration
        // - Usually used for checking termination condition
// expr3 :> Executed after each iteration.
        // - Usually used for increment/decrement on counter variable

// printing 1 - 5

    // for (let i = 1; i <= 5; i++){
    //     console.log(i);
    // }

    // for (let i = 1; i <= 5;){
    //     console.log(i++);
    // }

    // for (let i = 1; ;){
    //     console.log(i++);

    //     if (i > 5){
    //         break;
    //     }
    // }

    // // *
    // // * *
    // // * * *
    // // * * * *
    // // * * * * *
    // for (let i = 1; i <= 5; i++){
    //     row = "";
    //     for (let j = 1; j <= i; j++){
    //         row += "* ";
    //     }
    //     console.log(row);
    // }

    // for (let i = 1; i <= 5; i++){
    //     console.log(`* `.repeat(i));
    // }

    // //          *
    // //        * *
    // //      * * *
    // //    * * * *
    // //  * * * * *

    // for (let i = 1; i <= 5; i++){
    //     console.log('  '.repeat(5 - i) + `* `.repeat(i));
    // }

    // //     * 
    // //    * *
    // //   * * * 
    // //  * * * *
    // // * * * * * 
    // //  * * * * 
    // //   * * * 
    // //    * * 
    // //     * 

    // for (let row = 1; row < 10; row++){
    //     if (row < 5){
    //         console.log(" ".repeat(5-row) + "* ".repeat(row));
    //     } else {
    //         console.log(" ".repeat(row-5) + "* ".repeat(10-row));
    //     }
    // }



// const students = [
//     'abhay',
//     'sujay',
//     'vijay'
// ]

// students.push("siraj");


// // print all students with serial numbers alongside.

// for (let i = 0; i < students.length; i++){
//     console.log(`${i + 1} - ${students[i]}`);
// }

// for (let student of students){
//     console.log(student);
// }

// for (let [student_index, student] of students.entries()){
//     console.log(`${student_index + 1} - ${student}`);
// }

// for (let student_index in students){
//     console.log(`${parseInt(student_index) + 1} - ${students[student_index]}`);
// }

// while loop

    // while (truth_value){
    //     // code block 
    // }

// print 1 to 10

// let i = 1;
// while (i <= 10){
//     console.log(i++);
// }

// let students = [
//     'akash',
//     'prakash',
//     'prabhas'
// ]

// while(students.length != 0){
//     console.log(students.pop());
// }

// do while loop

    // do {
    //     // code block 
    // }
    // while (truth_value)


// find factorial

// let's find the factorial of 5

// let [fact, n] = [1, '5'];
// console.log(typeof n);
// while(n > 1){
//     fact *= n--; // fact = fact * n; n = n - 1;
// }
// console.log(typeof n);
// console.log(fact);


// let a1 = [1,2,3];
// let a2 = [4,5,6];

// let c = [...a1, ...a2];

// console.log(c);

// let [a, b, ...rest] = c;
// console.log(rest);


// fibonacci series
    // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

    // fib(n) = fib(n - 1) + fib(n - 2);

    // let n = 5;
    // let [first, second]  = [0, 1];
    // var result;
    // for(let count = 0;  count < 5; count++){
    //     // console.log(first);
    //     result = first;
    //     let next = first + second;

    //     first = second;
    //     second = next;
    // }

    // console.log(result);


// ---

// 3. Exception Handling : Execution of risky code block expecting exceptions

function withdrawMoney(balance, amount){

    try {
        // Risky code block
        if(amount <= 0) {
            throw new Error("Amount must be greater than zero.");
        }

        if (amount > balance){
            throw new Error("Insufficient Balance.");
        }

        balance -= amount;
        console.log(`Your withdrawal of Rs.${amount} was successful.
            Balance is Rs.${balance}`);
    }
    catch (err) {
        // error handling
        console.log(`Transaction Failed!
            ${err}`);
    }
    finally{
        // clean-up
        console.log("Thank you!!!")
    }
}
withdrawMoney(balance=2000, amount = 3000);



