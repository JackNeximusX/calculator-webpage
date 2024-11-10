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
        calculation();
    }

    operator = input;
    y = parseFloat(x); 
    x = "0"; 
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

        display.value = result;
        x = result.toString();
        y = result;
        operator = null;
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
