document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  let newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  const withdrawElement = document.getElementById("withdraw-element");
  const previousWithdrawString = withdrawElement.innerText;
  const previousWithdraw = parseFloat(previousWithdrawString);

  const previousBalanceElement = document.getElementById("balance");
  const previousBalanceString = previousBalanceElement.innerText;
  const previousBalance = parseFloat(previousBalanceString);

  if (previousBalance > newWithdrawAmount) {
    const withdrawTotal = newWithdrawAmount + previousWithdraw;
    withdrawElement.innerText = withdrawTotal;
    const updateBalance = previousBalance - newWithdrawAmount;
    previousBalanceElement.innerText = updateBalance;
  } else {
    alert("Your balance is not sufficient for withdraw.");
  }

  withdrawField.value = "";
});
