const display = document.getElementById("display");

let currentOpr = null;//string
let currentValue = 0;//number
display.value = "0";


//check what side of the operation we currently on 


function addDigit(input){
    
    console.log("" === currentOpr);
    console.log(currentValue == display.value);

    if (currentOpr && currentValue == display.value){
        display.value = input;
    } else if(display.value === "0"){
        display.value = input;
    } else if(!currentOpr && currentValue == display.value){
        display.value = "0";//sd
    } else {
        display.value += input;
    }

    // == verses two difreent types
    if (!currentOpr && currentValue != display.value) {
        currentValue = parseFloat(display.value);
    }
    //
    // if((!currentOpr && currentValue) || (currentValue === 0)){
    //     currentValue = parseFloat(display.value);
    // }


    console.log(currentValue, currentOpr, display.value);

}

function addDecimal(input){
    //make sure there is not already a decimal.
    if(!display.value.includes(".")){
        display.value += input;
    }

}

function addOperator(input){
    if(currentOpr === null){
        currentOpr = input;
        // currentValue = parseFloat(display.value);
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
}

//if d is pressed delete on character
function deleteDigit(){
    display.value = display.value.slice(0,-1);
}