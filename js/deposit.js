document.getElementById('deposit-btn').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousDepositAmount = getElementValueById('deposit-element');
    const newDepositTotal = newDepositAmount + previousDepositAmount;
    setTextElementValueById('deposit-element', newDepositTotal);

    const previousBalanceTotal = getElementValueById('balance');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance', newBalanceTotal);
})