document.getElementById('btn-submit').addEventListener('click',function(){
   const emailField = document.getElementById('user-email');
   const email = emailField.value;
   console.log(email);   
   const posswordField = document.getElementById('user-password');
   const possword = posswordField.value;
   console.log(possword);
   if(email === "Sontan@gmail.com" && possword === "myname")
      {
         location.href = 'BankInside.html';
         console.log("Login Done");
      }
   else if(email !== "Sontan@gmail.com" && possword !== "myname")
      {
         alert("Wrong Email And Possword!!")
      }
   else if(email != "Sontan@gmail.com")
      {
         alert("Wrong Email!!");
      }
   else if(possword != "myname")
      {
         alert("Wrong Possword!!");
      }
   
})