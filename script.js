const display = document.getElementById("display");

let currentOpr = null;
let currentValue = null;
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

    console.log(currentValue, currentOpr, display.value);

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
        currentValue = parseFloat(display.value);
        restart = true;
    }

    console.log(currentValue, currentOpr, display.value);
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

        restart = true;
        display.value = result;
        currentValue = result;
        currentOpr = null;

        console.log(currentValue, currentOpr, display.value);

    }
}


//set a variable as a operator and get the ready for second half of equaion
//if both all parts of the equasion is ready run the equasion

//is clear is pressed clear everything
function clearDisplay(){
    display.value = "0";
    currentValue = null;
    currentOpr = null;
    restart = false;
}

//if d is pressed delete on character
function deleteDigit(){
    display.value = display.value.slice(0,-1);
    checkSide();
}