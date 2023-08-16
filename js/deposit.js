document.getElementById('deposit-btn').addEventListener('click', function (){
    // Get value from Input Field --> return number
    const depositAmmount = getValueFromInputFiled('deposit-field');
    // Get value from an element --> return number
    const previousDepositAmmount = getValueFromElement('pre-total-deposit');
    //Calculate the current value
    const currentDepositTotal = previousDepositAmmount + depositAmmount;
    // Set the value
    setElementValue('pre-total-deposit', currentDepositTotal);
    const previousBalance = getValueFromElement('pre-total');
    const currentBalance = previousBalance + depositAmmount;
    setElementValue ('pre-total', currentBalance);
})