import User from '../JavaScript/UserModule.js';
window.login=login;
window.addEventListener("onload", function()
{

})

function login()
{
    let username=document.getElementById("uname"); 
    let password=document.getElementById("pass"); 
    let form=document.getElementById("login_form");
    if(checkAuth(username.value,password.value)==true)
    {
     form.submit();
    }
}
 function checkAuth(username,password)
 {
   let users=JSON.parse(localStorage.getItem("users") || "[]");


   let flage=false;
   for(let user in users)
   {
       console.log(users[user].password,password);
       if(users[user].username==username && users[user].password==password)
       {
        localStorage.setItem("AuthUser",JSON.stringify(users[user]));
        flage=true;
        break;
       }
   }
 
if(flage==true)
return true
 else
 {
     let span=document.getElementById("Login_Errormsg");
     span.className="Validtion_message";
     span.innerText="user not found";
 }
}