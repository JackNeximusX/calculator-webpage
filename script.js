const display = document.getElementById("display");

let currentOpr = null;
let currentValue = 0;
display.value = "0";
let hasResult = false;




function addDigit(input){
    
    if( hasResult || display.value === "0"){
        display.value = input;
        hasResult = false;
    } else {
        display.value += input;
    }

    if (!currentOpr && currentValue != display.value) {
        currentValue = parseFloat(display.value);
    }

    console.log(currentValue, currentOpr, display.value, hasResult);

}

function addDecimal(input){
    //make sure there is not already a decimal.
    if(!display.value.includes(".")){
        display.value += input;
    }

}

function addOperator(input){
    if(!currentOpr){
        currentOpr = input;
        hasResult = true;
    }

    console.log(currentValue, currentOpr, display.value, hasResult);
}


function calculate(){

    if(currentValue, currentOpr, display.value){
    
        switch(currentOpr){
            case "+":
                result = currentValue + parseFloat(display.value);
                break;
            case "-":
                result = currentValue - parseFloat(display.value);
                break;
            case "*":
                result = currentValue * parseFloat(display.value);
                break;
            case "/":
                result = currentValue / parseFloat(display.value);
                break;
            default:
                display.value = "ERROR";
                return;
        }

        display.value = result;
        currentValue = result;
        currentOpr = null;
        hasResult = true;

        console.log(currentValue, currentOpr, display.value, hasResult);

    }
}

function clearDisplay(){
    display.value = "0";
    currentValue = 0;
    currentOpr = null;
    hasResult = false;

    console.log(currentValue, currentOpr, display.value, hasResult);
}

function deleteDigit(){
    display.value = display.value.slice(0,-1);

    console.log(currentValue, currentOpr, display.value, hasResult);
}