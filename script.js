

const display = document.getElementById("display");
display.value = "0";

let firstValue = null;
let secondValue = null;
let y = null;
let operator = null;




// when button with this function is clicked
function addDigit(input) {
    // if the current value is null or equal to 0
    if (firstValue === null && firstValue === 0) {
        //give the string value of that input
       firstValue = input;
    } else {
        //add the string value of that input
       firstValue += input;
    }
    // display the string value of the current value
    display.value = firstValue;

    // set y as the string value of the current value
    y = firstValue;

    // set the current value of first value as a number
    firstValue = parseFloat(firstValue);//contenue here
}

function decimalCheck(input) {
    if (!currentValue.includes(".")) {
        if (currentValue === "0" && input !== ".") {
           currentValue = input;
        } else {
           currentValue += input;
        }
        display.value = currentValue;
    }
}

function operationCheck(input) {
    if (y !== null && operator !== null) {
        calculation();
    }

    if (currentValue !== "0"){
        operator = input;
        y = parseFloat(x); 
       currentValue = "0"; 
        display.value = y;
        console.log("currentValue not 0");
    }
    else{
        display.value = y;
    }
    
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
       currentValue = result.toString();
        y = result;
        operator = null;
    }
}

function clearDisplay() {
   currentValue = "0";
    display.value = "0";
    y = null;
    operator = null;
}

function deleteDigit() {
    if (currentValue.length > 1) {
       currentValue =currentValue.slice(0, -1);
    } else {
       currentValue = "0";
    }
    display.value =currentValue;
}
// TODO: fix multi opporation bug, and make currentValue number