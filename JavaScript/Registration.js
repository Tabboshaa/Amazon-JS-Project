import User from '../JavaScript/UserModule.js';


window.registration=registration;
window.Valdusername=Valdusername;
window.ValdPhone=ValdPhone;
window.ValdEmail=ValdEmail;
window.ValdPassword=ValdPassword;
window.ValdRePassword=ValdRePassword;
let users=[]
window.addEventListener("load", function()
{
    
});

function registration()
{
    let username=document.getElementById("R_Uname"); 
    let phone=document.getElementById("R_Phone"); 
    let email=document.getElementById("R_Email"); 
    let pass=document.getElementById("R_Pass"); 
    let Repass=document.getElementById("Re_Pass");
    let form=document.getElementById("Registeration");
    console.log(CheckValidtion(username,phone,email,pass,Repass))
    if(CheckValidtion(username,phone,email,pass,Repass))
    {
        let cart=[];
    let newUser= new User(email.value,phone.value,username.value,pass.value,cart); 
    console.log(newUser);   
    users=JSON.parse(localStorage.getItem("users") || "[]");
    users.push(newUser);
    window.localStorage.setItem("users",JSON.stringify(users));
    form.submit();
    }
}


function CheckValidtion(username,phone,email,pass,Repass)
{
    let u= Valdusername(username);
    let phoneval=ValdPhone(phone);
    let e=ValdEmail(email);
    let p=ValdPassword(pass);
    let Rep=ValdRePassword(pass,Repass);

    return u&&phoneval&&e&&p&&Rep;
    // if(Valdusername(username)&&ValdPhone(phone)&&ValdEmail(email)&&ValdPassword(pass)&&ValdRePassword(pass,Repass))
    // {
    //         console.log("error");
    //         return false;
    // }else
    // {
    //     return true;
    // }
}
function Valdusername(username)
{
    
    let namergex=/^[a-zA-Z0-9]{4,20}/;
    var span=document.getElementById("Uname_Errormsg");
    if(namergex.test(username.value)==false)
    {
        console.log("error From name");
        span.className="Validtion_message";
        span.innerText="invalid! Enter name , Frist char Must be Capital"
        return false;
    }
    else
    {
        span.className="";
        span.innerText="";
        return true;
    }
    
}

function ValdPhone(phone)
{
    
    let phonergex=/^01[0125][0-9]{8}$/;
    var span=document.getElementById("Phone_Errormsg");
    if(phonergex.test(phone.value)==false)
    {
        console.log("error From phone");
        span.className="Validtion_message";
        span.innerText="invalid Phone Numeber Format"
        return false;
    }
    else
    {
        span.className="";
        span.innerText="";
        return true;
    }
    
}


function ValdEmail(email)
{
    
    let emailrgex=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    var span=document.getElementById("email_Errormsg");
    if(emailrgex.test(email.value)==false)
    {
        console.log("error From email");

        span.className="Validtion_message";
        span.innerText="invalid Email Format"
        return false;
    }
    else
    {
        span.className="";
        span.innerText="";
        return true;
    }
    
}

function ValdPassword(password)
{
    let passwordrgex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    var span=document.getElementById("password_Errormsg");
    if(passwordrgex.test(password.value)==false)
    {
        console.log("error From Password");

        span.className="Validtion_message";
        span.innerText="invalid Password"
        return false;
    }
    else
    {
        span.className="";
        span.innerText="";
        return true;
    }
    
}

function ValdRePassword(password,Repassword)
{
    var span=document.getElementById("Repassword_Errormsg");

    if(password.value!=Repassword.value)
    {
        console.log("error From REPassword");

        span.className="Validtion_message";
        span.innerText="Does not match Password"
        return false;
    }
    else
    {
        span.className="";
        span.innerText="";
        return true;
    } 
}



