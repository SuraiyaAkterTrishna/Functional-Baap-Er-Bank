document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  let newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseInt(newWithdrawAmountString);

  const withdrawElement = document.getElementById("withdraw-element");
  const withdrawElementString = withdrawElement.innerText;

  /* const withdrawTotal = newWithdrawAmount + parseInt(withdrawElementString);

  withdrawElement.innerText = withdrawTotal; */

  const previousBalanceElement = document.getElementById("balance");
  const previousBalanceString = previousBalanceElement.innerText;
  const previousBalance = parseInt(previousBalanceString);

  if (previousBalance > newWithdrawAmount) {
    
    const withdrawTotal = newWithdrawAmount + parseInt(withdrawElementString);

    withdrawElement.innerText = withdrawTotal;

    const updateBalance = previousBalance - newWithdrawAmount;

    previousBalanceElement.innerText = updateBalance;
  } else {
    alert("Your balance is not sufficient for withdraw.");
  }

  withdrawField.value = "";
});
