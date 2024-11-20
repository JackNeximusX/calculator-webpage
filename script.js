const display = document.getElementById("display");
display.value = "0";

let firstValue = null;
let secondValue = null;
let y = null;
let operator = null;
let checkValue = null;
let currentValue = 0;

// Keep variables grouped for reference
let variables = [firstValue, secondValue, y, operator, checkValue];
//what i want to do with this is have it in a console and i can veiw all the vars in one line

    // Handles adding digits to the current value.
    // If `firstValue` is null or not a valid number, it initializes it as "0".
    // Appends input to `firstValue` and updates the display.
    // Prevents exceeding a maximum of 16 digits.
 
function addDigit(input) {

    if(currentValue === 0){
        // Initialize `firstValue` as "0" if it's null or not a number
        if (!Number.isFinite(firstValue)) {
            if(firstValue === null){
                firstValue = "0"; 
            }
            if(firstValue.includes(".0")){
                console.log(firstValue + "at the start");
                firstvalue = firstValue.toString();
                console.log(firstValue + "changed to string");
                firstValue = firstValue.slice(0,-2);
                console.log(firstValue + "slice the end off");
                firstValue = firstValue + ".";
                console.log(firstValue + "add `.` back");
            } else {
                firstValue = "0"; 
            }

        }

            // If the current value is "0", replace it; otherwise, append input
        if (firstValue === "0") {
            firstValue = input;
        } else {
            firstValue += input;
        }

        // Restrict the value to a maximum of 16 digits
        if (firstValue.length >= 16) {
            alert("Too many digits");
            firstValue = firstValue.slice(0, -1);
        }

        // Update the display and set `y` to the string representation of `firstValue`
        display.value = firstValue;
        y = firstValue;

        // Convert `firstValue` to a number for later calculations
        firstValue = parseFloat(firstValue);
        console.log

    }


}

//  Handles adding a decimal point to the current value.
//  Ensures that only one decimal is present in `firstValue`.
 
function decimalCheck(input,value,value2) {

    if(currentValue === 0){

        // Convert `firstValue` to a string if it's a finite number
        if (Number.isFinite(firstValue)) {
            firstValue = firstValue.toString();
        }

        // Add a decimal point if it doesn't already exist
        if (!firstValue.includes(".")) {
            if (firstValue === "0" && input !== ".0") {
                firstValue = input; // Replace "0" if input isn't "."
            } else {
                firstValue += input; // Append the input
            }

            // Update the display and set `y` to the string representation of `firstValue`
            display.value = firstValue;
            y = firstValue;
            // remove 0 frome the end
            display.value = display.value.slice(0,-1);
        }

    // // Convert `firstValue` back to a number
    // firstValue = parseFloat(firstValue);  
    }
}


    // Sets the operator for the calculation.
    // If `y` and an operator are already set, performs a calculation first.
 
function operationCheck(input) {
    if (y !== null && operator !== null) {
        calculation();
    }

    if (firstValue !== "0") {
        operator = input;
        y = parseFloat(display.value); 
        firstValue = "0"; 
        display.value = y;
    } else {
        display.value = y;
    }
}

//Performs the calculation based on the selected operator and updates the display.

function calculation() {
    if (y !== null && operator !== null) {
        let secondInput = parseFloat(display.value);
        let result;

        // Perform the calculation based on the operator
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

        // Update the display and reset variables for further operations

        display.value = result;
        firstValue = result.toString();
        y = result;
        operator = null;
    }
}


    // Clears the display and resets all variables to their initial state.
 
function clearDisplay() {
    firstValue = "0";
    display.value = "0";
    y = null;
    operator = null;
}


    // Deletes the last digit of the current value.
    // If only one digit remains, resets `firstValue` to "0".

function deleteDigit() {
    console.log(firstValue);

    if(Number.isFinite(firstValue)){
        firstValue = firstValue.toString();
    }

    if (firstValue.length > 1) {
        firstValue = firstValue.slice(0, -1);
    } else {
        firstValue = "0";
    }
    display.value = firstValue;

    firstValue = firstValue
}

// TODO: Fix multi-operation bug and ensure `firstValue` is treated as a number when appropriate
