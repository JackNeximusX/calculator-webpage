// Call for display element
const display = document.getElementById("display");

// Set display value to 0 on start
display.value = 0;

// created x and operator
let x = null;
let operator = null;

function addDigitCal(input) {
    // If display is 0, replace 0 with input
    if (display.value === "0") {
        display.value = input;
    }
    // Otherwise, add input
    else {
        display.value += input;
    }
}

function addDecimal(input) {
    // Check if a decimal is already in the display
    let decimalCheck = (display.value.match(/\./g) || []).length >= 1;

    // If there is no decimal, add one
    if (!decimalCheck) {
        display.value += input; 
    }
    // If there's already a decimal, do nothing
}


function operation(input) {
    // check to see if there is already an operator  *,/,+,-, or **
    let operationCheck = /[+\-*/]/.test(display.value);

    // if an operator is aleady used, do nothing
    if (operationCheck) {
        return; // Prevent entering multiple operators in a row. thanks howtolearn javascript for dummies
    }
    
    // if there is no operator, set x to = display, then set oporator as input.
    x = parseFloat(display.value);
    operator = input;

    // then reset display
    display.value = "0";
}

function calculation() {
    // Only perform calculation if we have an operator and x doesnt = 0
    if (x !== null && operator !== null) {
        
        // Convert second input to a number
        let secondInput = parseFloat(display.value); 
        let result;

        // do the operator respectfuly
        switch (operator) {
            case '+':
                result = x + secondInput;
                break;
            case '-':
                result = x - secondInput;
                break;
            case '*':
                result = x * secondInput;
                break;
            case '/':
                result = x / secondInput;
                break;
            default:
                result = secondInput;
        }

        // Display the result
        display.value = result;

        // then reset.
        x = null;
        operator = null;
    }
}

function clearDisplay() {
    display.value = 0;
    x = null; 
    operator = null;
}

function deleteDigit() {
    // Delete one digit from the right end of the display
    if (display.value.length > 1) {
        // Remove the last digit
        display.value = display.value.slice(0, -1); 
    } 
    
    else {
    // Reset to 0 if only one character is left
        display.value = "0"; 
    }
}


