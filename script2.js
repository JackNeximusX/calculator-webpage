// Initial variable declarations
const display = document.getElementById("display");
display.value = "0";

let firstValue = null;
let secondValue = null;
let y = null;
let operator = null;
let checkValue = null;
let currentValue = 0;

// Keeps variables grouped for reference
let variables = [firstValue, secondValue, y, operator, checkValue];

// Handles adding digits to the current value.
function addDigit(input) {
    if (currentValue === 0) {
        // Convert `firstValue` to a string if it's a finite number
        if (!Number.isFinite(firstValue)) {
            firstValue = "0"; 
        } else {
            firstValue = firstValue.toString();
        }

        // Handle appending or replacing digits
        if (firstValue === "0" && input !== ".") {
            firstValue = input; // Replace "0" if input isn't a decimal
        } else {
            firstValue += input; // Append the input
        }

        display.value = firstValue; // Update the display
        y = firstValue;
        console.log(`addDigit - firstValue: ${firstValue}`);
    } else if (currentValue === 1) {
        // Similar logic for `secondValue`
        if (!Number.isFinite(secondValue)) {
            secondValue = "0"; 
        } else {
            secondValue = secondValue.toString();
        }

        if (secondValue === "0" && input !== ".") {
            secondValue = input; 
        } else {
            secondValue += input; 
        }

        display.value = secondValue; 
        y = secondValue;
        console.log(`addDigit - secondValue: ${secondValue}`);
    }
}

// Handles adding a decimal point to the current value.
function decimalCheck(input) {
    if (currentValue === 0) {
        // Convert `firstValue` to a string if it's a finite number
        if (Number.isFinite(firstValue)) {
            firstValue = firstValue.toString();
        }

        // Add a decimal point if it doesn't already exist
        if (!firstValue.includes(".")) {
            if (firstValue === "0" && input !== ".") {
                firstValue = input; // Replace "0" if input isn't "." 
            } else {
                firstValue += input; // Append the input
            }

            display.value = firstValue;
            y = firstValue;

            // Remove 0 from the end
            display.value = display.value.slice(0, -1);
        }
    } else if (currentValue === 1) {
        // Similar logic for `secondValue`
        if (Number.isFinite(secondValue)) {
            secondValue = secondValue.toString();
        }

        if (!secondValue.includes(".")) {
            if (secondValue === "0" && input !== ".") {
                secondValue = input; // Replace "0" if input isn't "."
            } else {
                secondValue += input; // Append the input
            }

            display.value = secondValue;
            y = secondValue;

            // Remove 0 from the end
            display.value = display.value.slice(0, -1);
        }
    }
}

// Clear the display and reset variables
function clearDisplay() {
    firstValue = "0";
    display.value = "0";
    y = null;
    operator = null;
}

// Deletes the last digit of the current value.
function deleteDigit() {
    console.log(firstValue);

    if (Number.isFinite(firstValue)) {
        firstValue = firstValue.toString();
    }

    if (firstValue.length > 1) {
        firstValue = firstValue.slice(0, -1);
    } else {
        firstValue = "0";
    }
    display.value = firstValue;

    firstValue = firstValue;
}

// TODO: Fix multi-operation bug and ensure `firstValue` is treated as a number when appropriate
