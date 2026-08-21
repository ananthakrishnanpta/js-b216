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
        let menu = `
        Welcome
        1. Balance
        2. Data
        3. Recharge
        0. Exit
        `
        let choice = prompt(menu);
        let balance = 20;
        let data_balance = 200;
        choice = Number(choice);
        switch (choice){
            case 1:
                console.log(`You have Rs.${balance} in your talktime.`);
                break;
            case 2:
                console.log(`You have ${data_balance}MB left.`);
                break;
            case 3:
                console.log(`Please go to the nearest store.`);
                break;
            case 0:
                console.log("Thank you for visiting us.\nBye");
                break;
            default:
                console.log(`Check your input. You typed : ${choice}.`)
        }
