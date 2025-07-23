// create a faulty calculator using javascript
/* this faulty calculator does following
1. it take two number as input from the user
2. it perform wrong operation as follow:
+  = -
* = +
- = /
/= **
it  perform  wrong operation 10% of the times

*/
console.log("Welcome to the faulty calculator");
let num1 = parseFloat(prompt("Enter first number:"));

let num2 = parseFloat(prompt("Enter second number:"));
let operation = prompt("Enter operation (+, -, *, /):");
let result;
if (Math.random() < 0.1) {
    // Perform wrong operation
    switch (operation) {
        case '+':
            result = num1 - num2; // Wrong operation
            break;
        case '-':
            result = num1 / num2; // Wrong operation
            break;
        case '*':
            result = num1 + num2; // Wrong operation
            break;
        case '/':
            result = Math.pow(num1, num2); // Wrong operation
            break;
        default:
            console.log("Invalid operation");
            result = null;
    }
} else {
    // Perform correct operation
    switch (operation) {
        case '+':
            result = num1 + num2; // Correct operation
            break;
        case '-':
            result = num1 - num2; // Correct operation
            break;
        case '*':
            result = num1 * num2; // Correct operation
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2; // Correct operation
            } else {
                console.log("Cannot divide by zero");
                result = null;
            }
            break;
        default:
            console.log("Invalid operation");
            result = null;
    }
}
if (result !== null) {
    console.log(`The result of ${num1} ${operation} ${num2} is: ${result}`);
}
// End of faulty calculator code
// This code simulates a faulty calculator that performs incorrect operations 10% of the time.


// It prompts the user for two numbers and an operation, then calculates the result.
// If the random condition is met, it performs a wrong operation; otherwise, it performs the correct operation.
// The result is displayed in the console.  
// Note: This code is for educational purposes and demonstrates how to implement a faulty calculator.
// You can run this code in a JavaScript environment that supports prompt and console.log, such as a web browser's console.
// Make sure to test it in a suitable environment where prompt is available.
// You can modify the random condition or the operations to create different faulty behaviors.
// Feel free to enhance the functionality or add more features as needed.
// Happy coding!