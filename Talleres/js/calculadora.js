var currentValue = "0"; 
var operator = null; 
var num1 = null; 
var num2 = null; 
var result = null;
var isDecimal = false;


function updateDisplay() {
    document.getElementById('id-display').innerText = currentValue;
}


function setearValor(valor) {
    if (currentValue === "0") {
        currentValue = valor.toString(); 
    } else {
        currentValue += valor.toString();
    }
    updateDisplay();
}


function setOperator(op) {
    if (num1 === null) {
        num1 = parseFloat(currentValue); 
        operator = op;
        currentValue += op; 
    } else {        
        currentValue = result.toString() + op;
        num1 = result;
        operator = op;
    }
    updateDisplay();
}


function calculate() {
    num2 = parseFloat(currentValue.split(operator)[1]);
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "X") {
        result = num1 * num2;
    } else if (operator === "%") {
        result = num1 % num2;
    }    
    currentValue = result.toString();
    num1 = null; 
    num2 = null;
    operator = null;
    updateDisplay();
}


function clearDisplay() {
    currentValue = "0";
    num1 = null;
    num2 = null;
    operator = null;
    result = null;
    updateDisplay();
}


function backspace() {
    currentValue = currentValue.slice(0, -1); 
    if (currentValue === "") {
        currentValue = "0"; 
    }
    updateDisplay();
}
