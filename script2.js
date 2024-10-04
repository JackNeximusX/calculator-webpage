const display = document.getElementById("display");
let x = 0;

function addDigitCal(input) {
    display.value += input;
}

function addDecimal(input) {

    let decimalCheck = (display.value.match(/\./g) || []).length >= 1;

    if (decimalCheck) {
        display.value = display.value
    } else {
        display.value += input; 
    }
}

function operation(input) {

    x = display.value; 


    display.value = 0;


    x = x += input;

    display.value = x;
}

function calculation(input){

    
}

function clearDisplay() {

}




