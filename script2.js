const display = document.getElementById("display");
display.value = "0";

let firstValue = null;// keep as a 
let secondValue = null;
let y = null;
let operator = null;
let currentValue = 0;// dont need, you can use null of operator

// Handles addifng digits to the current value.
function addDigit(input) {
    if (currentValue === 0) {//have as a function
        if (!Number.isFinite(firstValue)) {
            firstValue = "0";
        }
        if (firstValue === "0" || firstValue === 0) {
            firstValue = input;
        } else {
            firstValue += input;
        }
        if (firstValue.length >= 17) {
            alert("Too many digits");
            firstValue = firstValue.slice(0, -1);
        }

        display.value = firstValue;
        y = firstValue;
        firstValue = parseFloat(firstValue);
    } else if (currentValue === 1) {
        if (!Number.isFinite(secondValue)) {
            secondValue = "0";
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
}

// Handles adding a decimal point to the current value.
function decimalCheck(input) {
    if (currentValue === 0) {
        if (Number.isFinite(firstValue)) firstValue = firstValue.toString();
        if (!firstValue.includes(".")) {
            firstValue += input;
            display.value = firstValue;
            y = firstValue;
        }
    } else if (currentValue === 1) {
        if (Number.isFinite(secondValue)) secondValue = secondValue.toString();
        if (!secondValue.includes(".")) {
            secondValue += input;
            display.value = secondValue;
            y = secondValue;
        }
    }
}

// Handles the operation selection (addition, subtraction, multiplication, division).
function operationCheck(input) {
    if (currentValue === 0 && firstValue !== null && !isNaN(firstValue)) {
        operator = input;
        currentValue = 1;
        display.value = firstValue;
    } else if (currentValue === 1) {
        alert("You can only do one operation at a time.");
    }
}

// Performs the calculation based on the operator selected.
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
        display.value = result;
        firstValue = result;
        secondValue = null;
        operator = null;
        currentValue = 0;
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
    if (currentValue === 0) {
        if (Number.isFinite(firstValue)) firstValue = firstValue.toString();
        firstValue = firstValue.length > 1 ? firstValue.slice(0, -1) : "0";
        display.value = firstValue;
        firstValue = parseFloat(firstValue);
    } else if (currentValue === 1) {
        if (Number.isFinite(secondValue)) secondValue = secondValue.toString();
        secondValue = secondValue.length > 1 ? secondValue.slice(0, -1) : "0";
        display.value = secondValue;
        secondValue = parseFloat(secondValue);
    }
}
