document.getElementById('user-Deposit').addEventListener('click',function(){
   const depositfield = document.getElementById('user-Deposit-value');
   const Deposit = depositfield.value;
   const convertDeposit = parseFloat(Deposit);


   const DepositAmountfield = document.getElementById('Deposit-Amounts');
   const DepositAmount = DepositAmountfield.innerText;
   const convertDepositAmount = parseFloat(DepositAmount);

   


   const Balancesfield = document.getElementById('Balances');
   const Balances = Balancesfield.innerText;
   const convertBalancs = parseFloat(Balances);


   

   if(convertDeposit > 0)
      {
         const TotalDeposit = convertDeposit + convertDepositAmount;
         DepositAmountfield.innerText = TotalDeposit;

         const TotalBalances = convertBalancs + convertDeposit;
         Balancesfield.innerText = TotalBalances;
      }
   else
      {
         alert("Minimum Deposit is $1");
      }
   depositfield.value = '';

})

document.getElementById('user-Withdrow').addEventListener('click',function(){
   const Withdrowfield = document.getElementById('user-Withdrow-value');
   const Withdrow = Withdrowfield.value;
   const convertWithdrow = parseFloat(Withdrow);


   const WithdrowAmountfield = document.getElementById('Withdrow-Amounts');
   const WithdrowAmount = WithdrowAmountfield.innerText;
   const convertWithdrowAmount = parseFloat(WithdrowAmount);


   const Balancesfield = document.getElementById('Balances');
   const Balances =  Balancesfield.innerText;
   const convertBalancs = parseFloat(Balances);
   if(convertWithdrow <= convertBalancs && 0 < convertWithdrow)
      {

         const Withdrowtotal = convertWithdrowAmount + convertWithdrow;
         WithdrowAmountfield.innerText = Withdrowtotal;

         const TotalBalance = convertBalancs - convertWithdrow;
         Balancesfield.innerText = TotalBalance; 
      }
   else
      {
         if(convertBalancs < convertWithdrow)
            {
               alert("Not Enough Balance!!");
            }
         else 
            {
               alert("Minimum Withdrow is $1");
            }
         
         
      }  
   Withdrowfield.value = ''
})