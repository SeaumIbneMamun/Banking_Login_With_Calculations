document.getElementById('deposit-button').addEventListener('click', function () {
    // Input Value
    const depositInputField = document.getElementById('deposit-input');
    const depositInputText = depositInputField.value 

    if (parseFloat(depositInputText) <= 0) {
        return alert('𝙿𝚕𝚎𝚊𝚜𝚎 𝚙𝚛𝚘𝚟𝚒𝚍𝚎 𝚊 𝚟𝚊𝚕𝚞𝚎 𝚖𝚘𝚛𝚎 𝚝𝚑𝚊𝚗 0')
    }

    const previousDepositTotal = document.getElementById('deposit-total');
    const depositText = previousDepositTotal.innerText

    const totalDeposit = parseFloat(depositInputText) + parseFloat(depositText)


    previousDepositTotal.innerText = totalDeposit;




    // Adding Deposit value to balance
    const previousBalance = document.getElementById('balance-total');
    const previousBalanceText = previousBalance.innerText;
    const newBalance = parseFloat(previousBalanceText) + parseFloat(depositInputText);
    previousBalance.innerText = newBalance




    // clearing the input field
    depositInputField.value = ''; 


    
})




document.getElementById('withdraw-button').addEventListener('click', function () {
    // Input Value
    const withdrawInputField = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInputField.value 

    if (parseFloat(withdrawInputText) <= 0) {
        return alert('𝙿𝚕𝚎𝚊𝚜𝚎 𝚙𝚛𝚘𝚟𝚒𝚍𝚎 𝚊 𝚟𝚊𝚕𝚞𝚎 𝚖𝚘𝚛𝚎 𝚝𝚑𝚊𝚗 0')
    }

    const previouswithdrawTotal = document.getElementById('withdraw-total');
    const withdrawText = previouswithdrawTotal.innerText

    const totalwithdraw = parseFloat(withdrawInputText) + parseFloat(withdrawText)


    previouswithdrawTotal.innerText = totalwithdraw;


    // Withdraw change in balance

    const previousBalance = document.getElementById('balance-total');
    const previousBalanceText = previousBalance.innerText;
    const previousBalanceNumber = parseFloat(previousBalanceText);
    const newBalance = parseFloat(previousBalanceNumber) - parseFloat(withdrawInputText);
    previousBalance.innerText = newBalance

 

    withdrawInputField.value = ''; 
})



