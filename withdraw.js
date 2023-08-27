document.getElementById("btn-withdraw").addEventListener("click",function(){
    
    const withdrawInput = document.getElementById("withdraw-input");  //withdraw-input-value
    const newWithdrawAmountString = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
    withdrawInput.value = "";

    const withdrawTotalElement = document.getElementById("withdraw-total");//witdraw-textfiled
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previoiusWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const newWithdrawTotal = previoiusWithdrawTotal + newWithdrawAmount;  
    withdrawTotalElement.innerText = newWithdrawTotal;                             //calculate total witdraw

    
    const balanceTotalElement = document.getElementById('balance-total'); //balance -- withdraw
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;




});