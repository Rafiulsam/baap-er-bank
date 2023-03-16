document.getElementById('btn-submit').addEventListener('click', function(){
   const emailField = document.getElementById('user-email');
   const email = emailField.value
   
   const passwordField = document.getElementById('user-password');
   const password = passwordField.value
   
   if(email == "rafiul@gmail.com" && password == "Iloveyounovera"){
    window.location.href = 'bank.html'
   }
   else{
    alert("User name or password wrong");
   }
})