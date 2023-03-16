// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {

    // step-2: get the deposit amount from the deposit input field
    // For input field use .value to the the value inside the input field
    const depositAmountField = document.getElementById('deposit-field');
    const depositAmountString = depositAmountField.value;
    const newDepositAmount = parseFloat(depositAmountString);
   
    // (simplified version)
    // const newDepositAmount = parseFloat(depositAmountField.value); 
    
    // step-3: get the current deposit total
    // for non-input(element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-amount');
    const depositTotalString = depositTotalElement.innerText
    const oldDepositTotal = parseFloat(depositTotalString)

    // step-4: add numbers to set the total deposit
    const currentDepositResult = newDepositAmount + oldDepositTotal;

    // set the deposit total
    depositTotalElement.innerText = currentDepositResult

    // step-5: get ballance current total
    
    // (simplified version)
    // const totalBalanceElement = document.getElementById('balance-amount');
    // const currentBalance = parseFloat(totalBalanceElement.innerText) + newDepositAmount;
    // totalBalanceElement.innerText = currentBalance; 
    



    const totalBalanceElement = document.getElementById('balance-amount')
    const totalBalanceString = totalBalanceElement.innerText
    const totalBalance = parseFloat(totalBalanceString);

    const currentBalance = totalBalance + newDepositAmount;
    totalBalanceElement.innerText = currentBalance;
    // step-7: clear the deposit field
    depositAmountField.value = '';
})