const display = document.getElementById("display");

let currentOpr = null;
let currentSide = 0;
let LHS = null;
let RHS = null;
display.value = "0";


//check what side of the operation we currently on 
function checkSide(){
    if(currentSide === 0){
        LHS = parseFloat(display.value);
    } 
    if(currentSide === 1){
        RHS = parseFloat(display.value);
    }
}

function addDigit(input){

    if(display.value === "0"){
        display.value = input;
    } else {
        display.value += input;
    }

    checkSide();
    console.log(LHS,RHS);

}

function addDecimal(input){
    //make sure there is not already a decimal.
    if(!display.value.includes(".")){
        display.value += input;//fix decimal
    }
    
    checkSide();

}

function checkOperator(input){
    if(currentOpr === null && LHS !== null){
        currentOpr = input;
        currentSide = 1;
        display.value = "0";
    }
    console.log(currentOpr);
}


function calculate(){

    if(LHS, currentOpr, RHS){
        switch(currentOpr){
            case "+":
                result = LHS + RHS;
                break;
            case "-":
                result = LHS - RHS;
                break;
            case "*":
                result = LHS * RHS;
                break;
            case "/":
                result = LHS / RHS;
                break;
            default:
                display.value = "ERROR";
                return;
        }

        display.value = result;
        LHS = result;
        currentValue = 1;
        RHS = null;
        currentOpr = null;
    }
}


//set a variable as a operator and get the ready for second half of equasion
//if both all parts of the equasion is ready run the equasion

//is clear is pressed clear everything
function clearDisplay(){
    display.value = "0";
    currentSide = 0;
    LHS = null;
    RHS = null;
    currentOpr = null;
}
//if d is pressed delete on character
function deleteDigit(){
    display.value = display.value.slice(0,-1);
    checkSide();
}