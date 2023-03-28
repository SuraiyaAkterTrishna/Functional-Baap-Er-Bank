document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    const depositElement = document.getElementById('deposit-element');
    const previousDepositString = depositElement.innerText;
    const previousDeposit = parseFloat(previousDepositString);

    const depositTotal = newDepositAmount + previousDeposit;
    depositElement.innerText = depositTotal;

    const previousBalanceField = document.getElementById('balance')
    let previousBalanceString = previousBalanceField.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    const updateBalance = previousBalance + newDepositAmount;
    previousBalanceField.innerText = updateBalance;

    depositField.value = ''
})