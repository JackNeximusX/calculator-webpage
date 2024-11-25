const display = document.getElementById("display");

let currentOpr = null;
let currentValue = null;
let firstValue = null;
display.value = "0";



function addDigit(input){
    if(display.value === "0" || display.value === null){
        display.value = input;
    } else {
        display.value += input;
    }

    currentValue = parseFloat(display.value);
    console.log(currentValue + " <- currentValue", firstValue + " <- firstValue");
}

function checkDecimal(input){
    //make sure there is not already a decimal.
    if(!display.value.includes(".")){
        if(display.value[display.value.length - 1]  === "0"){
            display.value = display.value.slice(0,-1);
            display.value += input;
        } else {
            display.value += input;
        }
    }
    currentValue = parseFloat(display.value);
}

function checkOperator(input){
    if(currentOpr === null && currentValue !== null){
        currentOpr = input;
        firstValue = currentValue;
        currentValue = null;
        display.value = "0";
    }
    console.log(currentOpr);
}
//when a operator is pressed 
function calculate(){

    if(firstValue !== null && currentValue !== null && currentOpr !== null){
        switch(currentOpr){
            case "+":
                result = firstValue + currentValue;
                break;
            case "-":
                result = firstValue - currentValue;
                break;
            case "*":
                result = firstValue * currentValue;
                break;
            case "/":
                result = firstValue / currentValue;
                break;
            default:
                display.value = "ERROR";
                return;
        }

        display.value = result;
        currentValue = parseFloat(result);
        firstValue = null;
        currentOpr = null;
    }
}


//set a variable as a operator and get the ready for second half of equasion
//if both all parts of the equasion is ready run the equasion

//is clear is pressed clear everything
function clearDisplay(){
    display.value = null;
    currentValue = null;
    firstValue = null;
    currentOpr = null;
}
//if d is pressed delete on character
function deleteDigit(){
    display.value = display.value.slice(0,-1);
    currentValue = parseFloat(currentValue);
}