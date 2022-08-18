function convertValue(InputId)
   {
      const InputField = document.getElementById(InputId);
      const Input = InputField.value;
      const convertInput = parseFloat(Input);
      InputField.value = '';
      return convertInput;
   }

function setValue(InputId, Value)
   {
      const Valuefield = document.getElementById(InputId);
      Valuefield.innerText = Value;
   }


document.getElementById('user-Deposit').addEventListener('click',function(){
   const convertDeposit = convertValue('user-Deposit-value');
   const convertDepositAmount = convertValue('Deposit-Amounts');
   const convertBalancs = convertValue('Balances');

   if(convertDeposit > 0)
      {
         const TotalDeposit = convertDeposit + convertDepositAmount;
         setValue('Deposit-Amounts',TotalDeposit);

         const TotalBalances = convertBalancs + convertDeposit;
         setValue('Balances', TotalBalances);
      }
   else
      {
         alert("Minimum Deposit is $1");
      }
})


document.getElementById('user-Withdrow').addEventListener('click',function(){
   const convertWithdrow = convertValue('user-Withdrow-value');
   const convertWithdrowAmount = convertValue('Withdrow-Amounts');
   const convertBalancs = convertValue('Balances');
   if(convertWithdrow <= convertBalancs && 0 < convertWithdrow)
      {

         const Withdrowtotal = convertWithdrowAmount + convertWithdrow;
         setValue('Withdrow-Amounts',Withdrowtotal);

         const TotalBalance = convertBalancs - convertWithdrow;
         setValue('Balances',TotalBalance); 
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
})