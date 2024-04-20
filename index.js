const display = document.querySelector("#display");

function appendToDisplay(input){
      display.value += input;
}

function clearAll(){
    display.value = '';
}

function solve(){
    try {
        display.value = eval(display.value);
    }
     catch (error) {
       display.value = "error" ;
    }
}   
