function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}
function getElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}
function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}
document.getElementById('deposit-btn').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousDepositAmount = getElementValueById('deposit-element');
    const newDepositTotal = newDepositAmount + previousDepositAmount;
    setTextElementValueById('deposit-element', newDepositTotal);

    const previousBalanceTotal = getElementValueById('balance');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance', newBalanceTotal);
})