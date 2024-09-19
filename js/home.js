   //Add Money
document.getElementById('addMoneyButton').addEventListener('click', function(event){
    event.preventDefault();
    const pinNumber = document.getElementById('amountPinNumber').value;
    const amount = document.getElementById('amount').value;
    if(pinNumber === '123'){
        const balance = document.getElementById('balance').innerHTML;
        const totalBalance = parseInt(balance)  + parseInt(amount);
        document.getElementById('balance').innerHTML= totalBalance;
    }
    else{
        alert("Wrong Pin! Failed to Add money");
    }
});
    // Cash Out
document.getElementById('cashOutButton').addEventListener('click', function(event){
    event.preventDefault();
    const cashOutAmountPinNumber = document.getElementById('cashOutAmountPinNumber').value;
    const cashOutAmount = document.getElementById('cashOutAmount').value;
    if(cashOutAmountPinNumber === '123'){
        const balance = document.getElementById('balance').innerHTML;
        const totalBalance = parseInt(balance)  - parseInt(cashOutAmount);
        document.getElementById('balance').innerHTML= totalBalance;
    }
    else{
        alert("Wrong Pin! Failed to Add money");
    }
});