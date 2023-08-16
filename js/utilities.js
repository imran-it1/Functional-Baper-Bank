// Funtion to get value from a input field by ID
function getValueFromInputFiled (inputFiledId){
    const inputFiledElement = document.getElementById(inputFiledId);
    const inputValueString = inputFiledElement.value;
    const value = parseFloat(inputValueString);
    inputFiledElement.value = '';
    return value;
}

// Funtion to get value from a element by ID

function getValueFromElement (elementId){
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const value = parseFloat(elementString);
    return value;
}


// Set value to element

function setElementValue (id, newValue){
    const element = document.getElementById(id);
    element.innerText = newValue;
}


