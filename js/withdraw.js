document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawAmmount = getValueFromInputFiled('withdraw-field');
    const previousWithdrawAmmount = getValueFromElement('pre-withdraw');
    const currentTotalWithdraw = previousWithdrawAmmount + withdrawAmmount;
    setElementValue ('pre-withdraw', currentTotalWithdraw);
    const previousTotalBalance = getValueFromElement('pre-total');
    const currentTotalBalance =  previousTotalBalance - currentTotalWithdraw;
    setElementValue('pre-total', currentTotalBalance);
})  