const display = document.getElementById("display");
// console.dir(button);

function appendToDisplay(input) {
    if(display.value === "0" || display.value === "ERROR"){
        display.value = "";
        display.value += input;
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