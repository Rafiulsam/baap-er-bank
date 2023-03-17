/* 
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field
2-5. also make sure to convert the input into a number by using parseFloat
3. Get previous withdraw total
4. calculate total withdraw amount 
4-5. set total withdraw amount
5. get the previous balance total
6. calculate new balance total
6-5: set the new balance total
7. clear the input field
*/

// step 1
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step 2
    const withdrawField = document.getElementById("withdraw-field")
    const newWithdrawAmount = parseFloat(withdrawField.value);

    // clearing input field
    withdrawField.value = '';

    // if no number provided
    if (isNaN(newWithdrawAmount)) {
        alert("Please enter a valid number")
        return;
    }

    // step 3
    const withdrawElement = document.getElementById("withdraw-amount")
    const oldWithdrawTotal = parseFloat(withdrawElement.innerText);


    // step 5
    const totalBalanceElement = document.getElementById('balance-amount')
    const totalBalance = parseFloat(totalBalanceElement.innerText);

    // if the withdraw amount is more than balance
    if (newWithdrawAmount > totalBalance) {
        alert('Baap er bank e eto tk nai')
        return;
    }

    // step 4
    const currentWithdrawResult = newWithdrawAmount + oldWithdrawTotal;
    withdrawElement.innerText = currentWithdrawResult;

    // step 6
    const currentBalance = totalBalance - newWithdrawAmount;
    totalBalanceElement.innerText = currentBalance;


})