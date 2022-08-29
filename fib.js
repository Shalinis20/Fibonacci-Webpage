//.getElementById returns an Element as an object representing the element whose id property matches with the user input
const input = document.getElementById("input"); 
const button = document.getElementById("button"); 

// Added click event handler, when user clicks the submit button this function runs
button.addEventListener("click", () => {

 // Initialize an empty javascript array
const fib = [];

 // Extract the value from input object 
const number = input.value;

// Calculating fibonacci series upto n terms
let n1 = 0, n2 = 1, nextTerm;

for (let i = 1; i <= number; i++) {
    fib.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

// Displays result with an OK button
alert(fib); 

});