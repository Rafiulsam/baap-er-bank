// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {

    // step-2: get the deposit amount from the deposit input field
    // For input field use .value to the the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const depositAmountString = depositField.value;
    const newDepositAmount = parseFloat(depositAmountString);

    //clear the deposit field
    depositField.value = '';

    // if no number provided
    if(isNaN(newDepositAmount)){
        alert("Please enter a valid number")
        return;
    }

    if(newDepositAmount <= 0){
        alert(' Baap er bank e 1 takar niche deposit hoy na')
        return;
    }
   
   
    // ! (simplified version)
    // ! const depositAmountField = document.getElementById('deposit-field');
    // ! const newDepositAmount = parseFloat(depositAmountField.value);  
    
    
    // step-3: get the current deposit total
    // for non-input(element other than input, textarea) use innerText to get the text
    const depositElement = document.getElementById('deposit-amount');
    const depositTotalString = depositElement.innerText
    const oldDepositTotal = parseFloat(depositTotalString)

    // step-4: add numbers to set the total deposit
    const currentDepositResult = newDepositAmount + oldDepositTotal;

    // set the deposit total
    depositElement.innerText = currentDepositResult

    // step-5: get ballance current total
    
    const totalBalanceElement = document.getElementById('balance-amount')
    const totalBalanceString = totalBalanceElement.innerText
    const totalBalance = parseFloat(totalBalanceString);
    
    const currentBalance = totalBalance + newDepositAmount;
    totalBalanceElement.innerText = currentBalance;
   
    // ! (simplified version)
    // ! const totalBalanceElement = document.getElementById('balance-amount');
    // ! const currentBalance = parseFloat(totalBalanceElement.innerText) + newDepositAmount;
    // ! totalBalanceElement.innerText = currentBalance; 
   
    
})