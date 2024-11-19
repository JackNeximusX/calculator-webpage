

const display = document.getElementById("display");
display.value = "0";

let firstValue = null;
let secondValue = null;
let y = null;
let operator = null;
let checkValue = null;



// when button with this function is clicked
function addDigit(input) {
    console.log(firstValue);
    //change firstvalue into a string if firstvalue = null
    if(firstValue === null || firstValue === 0){
        firstValue = "0"
        console.log(firstValue);
    }

    // if the current value has a string value of 0 or is equal to 0
    if (firstValue === "0") {
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

    // set the current value of firstValue as a number
    firstValue = parseFloat(firstValue);
}

function decimalCheck(input) {

    //if firstValue is a number change it to a string
    if(Number.isFinite(firstValue)){
        firstValue = firstValue.toString();
    }

    //if first calue does not already have a decimal
    if (!firstValue.includes(".")) {
        //and if first value is equal to zero and the input does not equal .
        if ( firstValue === "0" && input !== ".") {
            //replace current value with input
            firstValue = input;
        } else {
            //anything else just add input
            firstValue += input;
        }
        //then display firstValue
        display.value = firstValue; 
        //set y as string value of firstValue
        y = firstValue;
    }
    //change firstvalue back to a number
    firstValue = parseFloat(firstValue);
}

function operationCheck(input) {
    if (y !== null && operator !== null) {
        calculation();
    }

    if (currentValue !== "0"){
        operator = input;
        y = parseFloat(x); 
        firstValue = "0"; 
        display.value = y;
        console.log("firstValue not 0");
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
       firstValue = result.toString();
        y = result;
        operator = null;
    }
}

function clearDisplay() {
   firstValue = "0";
    display.value = "0";
    y = null;
    operator = null;
}

function deleteDigit() {
    if (firstValue.length > 1) {
       firstValue = firstValue.slice(0, -1);
    } else {
       firstValue = "0";
    }
    display.value = firstValue;
}
// TODO: fix multi opporation bug, and make currentValue number
