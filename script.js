const display = document.getElementById("display");

let currentOpr = null;
let currentValue = null;
let firstValue = null;
let restart = false;
display.value = "0";


//check what side of the operation we currently on 


function addDigit(input){

    if(restart === true){
        display.value = "";
        restart = false;
    }

    if(display.value === "0"){
        display.value = input;
    } else {
        display.value += input;
    }

    console.log( firstValue, currentOpr, display.value, currentValue);

}

function addDecimal(input){
    //make sure there is not already a decimal.
    if(!display.value.includes(".")){
        display.value += input;//fix decimal
    }

}

function checkOperator(input){
    if(currentOpr === null && display.value !== null){
        currentOpr = input;
        firstValue = parseFloat(display.value);
        restart = true;
    }

    if(currentValue !== null && firstValue !== null){
        currentValue = firstValue;
    }

    console.log( firstValue, currentOpr, display.value, currentValue);
}


function calculate(){
    if(currentValue !== null){
        firstValue = currentValue;
    }
    if(firstValue, currentOpr, display.value){

        switch(currentOpr){
            case "+":
                result = firstValue + parseFloat(display.value);
                break;
            case "-":
                result = firstValue - parseFloat(display.value);
                break;
            case "*":
                result = firstValue * parseFloat(display.value);
                break;
            case "/":
                result = firstValue / parseFloat(display.value);
                break;
            default:
                display.value = "ERROR";
                return;
        }
        restart = true;
        display.value = result;
        currentValue = result;
        firstValue = null;
        currentOpr = null;

        console.log( firstValue, currentOpr, display.value, currentValue);

    }
}


//set a variable as a operator and get the ready for second half of equaion
//if both all parts of the equasion is ready run the equasion

//is clear is pressed clear everything
function clearDisplay(){
    display.value = "0";
    firstValue = null;
    currentValue = null;
    currentOpr = null;
    restart = false;
}

//if d is pressed delete on character
function deleteDigit(){
    display.value = display.value.slice(0,-1);
    checkSide();
}