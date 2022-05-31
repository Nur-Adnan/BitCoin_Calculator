//Getting Input Values Start
function getInputValues(inputId){
    const input = document.getElementById(inputId);
    const inputValue = parseFloat(input.value);
    // Error handling start
    if(isNaN(inputValue) || inputValue <= 0 || inputValue === ''){
        alert('Please enter a valid number');
    }
    // Error handling End
    return inputValue;
}
//Getting Input Values End
//Getting text Values start
function getTextValue(textId){
    const text = document.getElementById(textId);
    const textValue = parseFloat(text.innerText);
    return textValue;
}
//Getting text Values end
// Sum of The Expenses start
function PresentExpenses(newFoods,newRents,newClothes){
    const sumOfExpenses =  newFoods+newRents+newClothes;
    return sumOfExpenses;
}
// Sum of The Expenses End
// Calculate Total Expenses start
document.getElementById('calculateBtn').addEventListener('click',function () {

   const newFoods = getInputValues('inputFoods');
   const newRents = getInputValues('inputRents');
   const newClothes = getInputValues('inputClothes');
   const lastestIncomes = getInputValues('inputIncomes');

   const sumOfExpenses = PresentExpenses(newFoods,newRents,newClothes) 

   const totalExpenses = document.getElementById('totalExpenses');
   totalExpenses.innerText = sumOfExpenses;

   const PresentTotalExpenses = getTextValue('totalExpenses');
   const totalBalance = document.getElementById('balance');
   totalBalance.innerText = lastestIncomes - PresentTotalExpenses



})
// Calculate Total Expenses end

//  Calculation Saving Part Start
document.getElementById('saveBtn').addEventListener('click' , function () {
    const currentBalance = getTextValue('balance');
    const newInputSave = getInputValues('inputSave');
    const lastestIncomes = getInputValues('inputIncomes');
    const newSaveAmount = document.getElementById('saveAmount');
    const newRemaingBalance = document.getElementById('remaingBalance');

    let savingAmount = lastestIncomes * (newInputSave/100);
    newSaveAmount.innerText = savingAmount;
    const remainingBalance = currentBalance - savingAmount
    newRemaingBalance.innerText = remainingBalance;

})
//  Calculation Saving Part End


