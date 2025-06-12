

function appendToDisplay(value){
    const display = document.getElementById("display");
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    const display = document.getElementById("display");
    try{
        display.value = eval(display.value);
    }catch(error){
        display.value="Error";
    }
    
}

function backspace(){
    const display = document.getElementById("display");
    display.value = display.value.slice(0,-1);
}

document.addEventListener('keydown', function(event){
    const key = event.key;

    if(!isNaN(key) || "+-*/.".includes(key)){
        appendToDisplay(key);
    }

    if (key === 'Enter'){
        event.preventDefault();
        calculate();
    }

    if (key === 'Backspace'){
        backspace();
    }

    if (key === 'Escape'){
        clearDisplay();
    }
});