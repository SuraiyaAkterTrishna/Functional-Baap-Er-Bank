document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawAmount = getElementValueById('withdraw-element');
    const newWithdrawTotal = newWithdrawAmount + previousWithdrawAmount;
    setTextElementValueById('withdraw-element', newWithdrawTotal);

    const previousBalanceTotal = getElementValueById('balance');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance', newBalanceTotal);
})