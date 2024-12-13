const display = document.getElementById("display");

let currentOpr = null;//string
let currentValue = 0;//number
display.value = "0";
let hasResult = false;

//check what side of the operation we currently on 


function addDigit(input){
    



    if(!currentOpr && hasResult === true){
        display.value = input;
    } else if(currentOpr && currentValue == display.value){
        display.value = input;
    } else if(display.value === "0"){
        display.value = input;
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

function deleteDigit(){
    display.value = display.value.slice(0,-1);
}

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
        hasResult = false;
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
        hasResult = true;
        console.log(currentValue, currentOpr, display.value);

    }
}


//set a variable as a operator and get the ready for second half of equaion
//if both all parts of the equasion is ready run the equasion

//is clear is pressed clear everything
function clearDisplay(){
    display.value = "0";
    currentValue = 0;
    currentOpr = null;
    hasResult = false;
}

//if d is pressed delete on character