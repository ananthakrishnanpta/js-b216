// Given 3 characters : 'a', 'b', 'c' ; 
// Write a function to return all possible permutations of these characters

function permutations(string, result = "") {
    // Setting base case for recursion
    if (string.length === 0) {
        console.log(result);
        return;
    }
    // Pick each character as first character
    for (let i = 0; i < string.length; i++) {

        let char = string[i];
        let remaining = string.slice(0, i) + string.slice(i + 1);

        // Recursive call
        permutations(remaining, result + char);

    }
}

permutations("abc");