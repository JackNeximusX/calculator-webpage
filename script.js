const display = document.getElementById("display");
display.value = "0";

let firstValue = null;
let secondValue = null;
let y = null;
let operator = null;
let checkValue = null;
let currentValue = 0;

// Group variables for easy monitoring
let variables = [firstValue, secondValue, y, operator, checkValue];

// Handles adding digits to the current value.
function addDigit(input) {
    if (currentValue === 0) {
        if (!Number.isFinite(firstValue)) {
            if (firstValue === null) {
                console.log("first value is null, change to string");
                firstValue = "0";
            }
            if (firstValue.includes(".0")) {
                console.log(firstValue + "first value has a decimal in it");
                firstValue = firstValue.toString();
                console.log( firstValue + "change to string");
                firstValue = firstValue.slice(0, -2) + ".";
                console.log(firstValue + "minus the 0");
            } else {
                console.log(firstValue + " change first value to a string");
                firstValue = "0";
                console.log(firstValue);
            }
        }

        if (firstValue === "0" || firstValue === 0) {
            firstValue = input;
            console.log(firstValue + " string was equal to 0. replaced with input");
        } else {
            firstValue += input;
            console.log(firstValue + " input not equal to 0, add input");
        }

        if (firstValue.length >= 17) {
            console.log(firstValue + "line is too long");
            alert("Too many digits");
            console.log(firstValue + "line is too long");
            firstValue = firstValue.slice(0, -1);
            console.log(firstValue + "line is too long");
        }

        display.value = firstValue;
        y = firstValue;

        firstValue = parseFloat(firstValue);
        console.log(firstValue !== NaN ,"if true. first value is not not a number");

    } else if (currentValue === 1) {
        if (!Number.isFinite(secondValue)) {
            if (secondValue === null) {
                secondValue = "0";
            }
            if (secondValue.includes(".0")) {
                secondValue = secondValue.toString();
                secondValue = secondValue.slice(0, -2) + ".";
            } else {
                secondValue = "0";
            }
        }

        if (secondValue === "0" || secondValue === 0) {
            secondValue = input;
        } else {
            secondValue += input;
        }

        if (secondValue.length >= 16) {
            alert("Too many digits");
            secondValue = secondValue.slice(0, -1);
        }

        display.value = secondValue;
        y = secondValue;

        secondValue = parseFloat(secondValue);
    }
    console.log(`addDigit - firstValue: ${firstValue}`);
    console.log(y + "string value of first value");
    console.log("end line\b");
}

// Handles adding a decimal point to the current value.
function decimalCheck(input, value, value2) {
    if (currentValue === 0) {
        if (Number.isFinite(firstValue)) {
            firstValue = firstValue.toString();
        }

        if (!firstValue.includes(".")) {
            if (firstValue === "0" && input !== ".0") {
                firstValue = input;
            } else {
                firstValue += input;
            }

            display.value = firstValue;
            y = firstValue;

            display.value = display.value.slice(0, -1);
        }
    } else if (currentValue === 1) {
        if (Number.isFinite(secondValue)) {
            secondValue = secondValue.toString();
        }

        if (!secondValue.includes(".")) {
            if (secondValue === "0" && input !== ".0") {
                secondValue = input;
            } else {
                secondValue += input;
            }

            display.value = secondValue;  
            y = secondValue;

            display.value = display.value.slice(0, -1);
        }
    }
    console.log(`decimalCheck - firstValue: ${firstValue}`);
}


// Handles the operation selection (addition, subtraction, multiplication, division)
function operationCheck(input) {

    if(currentValue === 1){
        alert("you can only do one operation at a time.")
    }
    if(currentValue === 0){
        if (firstValue !== null && !isNaN(firstValue)) {
            // Set the operator based on user input
            operator = input;
    
            // Move currentValue to 1 (i.e., ready for second value)
            currentValue = 1;
    
            // Update display with current firstValue
            display.value = firstValue;
    
            console.log(`operationCheck - operator: ${operator}, firstValue: ${firstValue}`);
        }
    }
}

// Performs the calculation based on the operator selected
function calculation() {
    if (currentValue === 1 && secondValue !== null && !isNaN(secondValue)) {
        let result;
        switch (operator) {
            case "+":
                result = firstValue + secondValue;
                break;
            case "-":
                result = firstValue - secondValue;
                break;
            case "*":
                result = firstValue * secondValue;
                break;
            case "/":
                result = firstValue / secondValue;
                break;
            default:
                alert("Invalid operator");
                return;
        }

        // Display result
        display.value = result;
        firstValue = result;

        // Reset secondValue and operator for next calculation
        secondValue = null;
        operator = null;
        currentValue = 0; // Ready for the next number input
    }
}

// Clears the display and resets all variables to their initial state.
function clearDisplay() {
    firstValue = 0;
    secondValue = 0;
    display.value = "0";
    y = null;
    operator = null;
    currentValue = 0;
}

// Deletes the last digit of the current value.
function deleteDigit() {
    if(currentValue = 0){
        if (Number.isFinite(firstValue)) {
            firstValue = firstValue.toString();
        }
    
        if (firstValue.length > 1) {
            firstValue = firstValue.slice(0, -1);
        } else {
            firstValue = "0";
        }
        display.value = firstValue;
        firstValue = parseFloat(firstValue);
    }
    if(currentValue = 1){
        if (Number.isFinite(secondValue)) {
            secondValue = secondValue.toString();
        }
    
        if (secondValue.length > 1) {
            secondValue = secondValue.slice(0, -1);
        } else {
            secondValue = "0";
        }
        display.value = secondValue;
        secondValue = parseFloat(secondValue);
    }

    console.log(`deleteDigit - firstValue: ${firstValue}`);
}
