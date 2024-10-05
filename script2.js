
//call for display element
const display = document.getElementById("display");

//set display value to 0 on start
display.value = 0;

// value x is created
let x;

function addDigitCal(input) {

    //if display is 0, replace 0 with input
    if (display.value === "0") {
        display.value = "";
        display.value = input;
    }
    // otherwise add input.
    else {
        display.value += input;
    }

}

function addDecimal(input) {

    //check if a decimal is already in this display
    let decimalCheck = (display.value.match(/\./g) || []).length >= 1;

    // if there is a decimal, do nothing
    if (decimalCheck) {
        display.value = display.value
    }
    
    //if not add one.
    else {
        display.value += input; 
    }

}

function operation(input) {

    // check for *,/,+,-, and **. somehow.
    let operationCheck = (display.value.match(/\*/g) || []).length >= 1;

    //if there is already an oporation do nothing
    if (operationCheck) {



    }

    // if else... add whatever operation and reset the display so you cannot see the past display value, but still have it avalable
    else{

    // save display.value to x
    x = display.value;

    //reset display
    display.value = 0;

    // add operation to end of input unless theres already one
    x = x += input;

    // with reseted display showing 0, add more numbers
    display.value = "0";

    }

    /*  
        sidenote: maybe i could instead have x just be = the operation and just check to make sure its not = 2 or more,
        then i can just calculate the first display (maybe have that in a variable) and the second display (also in a var)
        and calucuate using x and set the display as that... idk.
    */

}

function calculation(input){

    // take x's value and add displays current value to the front, then calulate it and display it.
    let answer = x + display.value;
    display.value = answer;
}

function clearDisplay() {
    display.value = 0;
}




