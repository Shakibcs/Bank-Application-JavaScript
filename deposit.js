//let depositValue =0;
document.getElementById("btn-deposit").addEventListener("click",function(){

    //deposit-section
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountString = depositInput.value;            //hold the value of input
    const newDepositAmount = parseFloat(newDepositAmountString);  //convert to float

    depositInput.value =""; //clear input field after getting value
    
    const depositTotalElement = document.getElementById("deposit-total");//getting id text value
    const previousDepositTotalString = depositTotalElement.innerText;   //getting text value
    const previousDepositTotal = parseFloat(previousDepositTotalString); //convert

    const newDepositTotal = previousDepositTotal + newDepositAmount; //calculate total deposit
    depositTotalElement.innerText = newDepositTotal;

    //Total Balance 
    const balanceTotalElement = document.getElementById("balance-total"); //getting text value
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;

    balanceTotalElement.innerText = newBalanceTotal; //set the value in total balance area

});