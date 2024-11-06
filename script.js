const display = document.getElementById("display");
let x = "0";
display.value = "0";
let y = null;
let operator = null;

function addDigit(input) {
    if (x === "0") {
        x = input;
    } else {
        x += input;
    }
    display.value = x;
}

function decimalCheck(input) {
    if (!x.includes(".")) {
        if (x === "0" && input !== ".") {
            x = input;
        } else {
            x += input;
        }
        display.value = x;
    }
}

function operationCheck(input) {
    if (y !== null && operator !== null) {
        // Perform the previous calculation before switching operator
        calculation();
    }

    // Now set the new operator
    operator = input;
    y = parseFloat(x);  // Store the current value of x in y
    x = "0";  // Reset x for the next number
    display.value = x;
}

function calculation() {
    if (y !== null && operator !== null) {
        let secondInput = parseFloat(x);
        let result;

        switch (operator) {
            case '+':
                result = y + secondInput;
                break;
            case '-':
                result = y - secondInput;
                break;
            case '*':
                result = y * secondInput;
                break;
            case '/':
                result = y / secondInput;
                break;
            default:
                result = secondInput;
        }

        // Update display with result and set x to the result
        display.value = result;
        x = result.toString();
        y = result;  // Keep the result in y for the next operation
        operator = null;  // Reset operator after calculation
    }
}

function clearDisplay() {
    x = "0";
    display.value = "0";
    y = null;
    operator = null;
}

function deleteDigit() {
    if (x.length > 1) {
        x = x.slice(0, -1);
    } else {
        x = "0";
    }
    display.value = x;
}
