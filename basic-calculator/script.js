var value = "";

function addNumber(number){
    value += number;
    updateDisplay();
}

function setOperand(operand){
    if(value.endsWith('+') || value.endsWith('-') || value.endsWith('*') || value.endsWith('/')){
        return;
    }
    value += operand;
    updateDisplay();
    console.log(value);
}

function calculate(equal){

}

function updateDisplay() {
    var displayElement = document.getElementById("display");
    displayElement.textContent = value; // Update the text content of the display element
    console.log(value);
  }
  