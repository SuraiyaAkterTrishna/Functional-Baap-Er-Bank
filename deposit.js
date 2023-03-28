document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = depositField.value;

    const depositElement = document.getElementById('deposit-element');
    const previousDeposit = depositElement.innerText;
    const depositTotal = parseInt(newDepositAmount) + parseInt(previousDeposit);
    // update deposit 
    depositElement.innerText = depositTotal;

    // update balance 
    const previousBalanceField = document.getElementById('balance')
    let previousBalanceString = previousBalanceField.innerText;
    const previousBalance = parseInt(previousBalanceString);
    const updateBalance = previousBalance + parseInt(newDepositAmount);
    previousBalanceField.innerText = updateBalance;

    depositField.value = ''
})