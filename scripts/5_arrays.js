// // Arrays in JS 
// let fruits = ["apple", "banana", "orange", "mango", "watermelon", "grapes", "papaya", "pear", "peach"];

// // Uses zero-based indexing
// // First element of the array is at index 0
//     console.log(fruits[0]); // Output: apple

// // Length of the array
//     console.log(fruits.length); // Output: 9

// // Last element of the array will be at length - 1 index
//     console.log(fruits[fruits.length - 1]); // Output: peach

// // Negative indexing is not supported in JS arrays by default
//     // We can use the <array>.at() method to access
//     //  elements using positive or negative indexing.
//     console.log(fruits.at(-1)); // Output: peach

// // Adding elements to the array 
//     fruits.push("grapes"); // Adds "grapes" to the end of the array 

// // Removing elements from the array end
//     fruits.pop(); // Removes the last element from the array

// // Remove elements from the start of the array
//     fruits.shift(); // Removes the first element from the array

// console.log(fruits); // Output: ["banana", "orange", "mango", "watermelon", "grapes", "papaya", "pear", "peach"]

// // Adding elements to the start of the array
//     fruits.unshift("kiwi"); // Adds "kiwi" to the start of the array    

// // Printing a slice of the array

//     // Everything from index 2 to index 5 (not inclusive)
//     console.log(fruits.slice(2, 5)); // Output: ["mango"]

//     // Everything from index 1 to the end of the array
//     console.log(fruits.slice(1)); // Output: ["orange", "mango", "watermelon", "grapes", "papaya", "pear", "peach"]


// // Everything in reverse order from the end of the array
// console.log(fruits.reverse()); // Output: ["peach", "pear", "papaya", "grapes", "watermelon", "mango", "orange", "kiwi"]


// console.log(fruits);
// console.error("This is an error message");
// console.warn("This is a warning message");

matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
];

matrix2 = [
    [3,6,1],
    [2,5,4],
    [9,8,7],
    [12,11,10]
];

function compareMatrixDim(matrix1, matrix2) {
    // check m
    m1 = matrix1.length;
    m2 = matrix2.length;
    n1 = matrix1[0].length;
    n2 = matrix2[0].length;
    return (m1 === m2 && n1 === n2);
}

function addMatrices(matrix1, matrix2) {
    if (!compareMatrixDim(matrix1, matrix2)) {
        console.error("Matrices dimensions do not match for addition");
        return;
    }

    let result = [];
    for (let i = 0; i < matrix1.length; i++) {
        let row = []; 
        for (let j = 0; j < matrix1[0].length; j++) {
            row.push(matrix1[i][j] + matrix2[i][j]);
        }  
        result.push(row);
    }
    return result;
}

function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(`\|\t ${matrix[i].join("\t") } \t\|`);
    }
}
displayMatrix(addMatrices(matrix1, matrix2));
