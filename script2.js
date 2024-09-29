const display = document.getElementById("display");

// console.dir(button);
let Display = 0;
function appendToDisplay(input) {
    if(display.value === "0" || display.value === "ERROR"){
        if(display.value === "."){
            display.value = "0.";
        }
        else{
        display.value = "";
        display.value += input;
        }
    }
    else {
        display.value += input;
    }
}

function clearDisplay() {
    display.value = "0";
}


function calculate() {
    try{
        if(display.value === "0"){
            display.value = "0";
        }
        else {
                display.value = eval(display.value);
        }
    }
    catch(error){
        display.value = "ERROR";
    }

}