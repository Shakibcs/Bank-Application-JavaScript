//let depositValue =0;
document.getElementById("btn-deposit").addEventListener("click",function(){
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountString = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    depositInput.value =""; //clear input field after getting value


    
    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;
    
    


    //.innerText = newdepositAmount ;
});