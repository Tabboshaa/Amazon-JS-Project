import Product from "./ProductModule.js";

let AuthUser=JSON.parse(localStorage.getItem("AuthUser"|| "[]"))
let login=document.getElementById("login");
window.onload=function(){
     AutoChangeBG();
     StopSlider();
}


console.log(AuthUser);
if(AuthUser!=null)
{
    login.innerText="logOut";
    login.href="javascript:void(0)";
    login.onclick=logout;
}
else
{
    login.innerText="Login";
    login.href="../HTML/Login.html";
}

function showProducts()
{
    //paint table
        //-get table by id
        let table=document.getElementById("Gtable");
        // get produt from Local Storage
        let products=JSON.parse(localStorage.getItem("products") || "[]");
        //for loop in product
       let c=3;
       var tr=document.createElement("tr");
        for(let product in products)
        {   
            table.append(tr);
            if(product%3==0&&product!=1)
            {
                 tr=document.createElement("tr");
            }
            let td=paintTd(products[product]);
                tr.append(td);
        }
        //paint product in td
            //- make new td 
            //-add td in tr
            //-add tr in table


}

function paintTd(product)
{
    let product_Image=product.image;
    let product_title=product.title;
    let td=document.createElement("td");

    let item_card_div=document.createElement("div");
    item_card_div.className="item-card";

    let item_card_title=document.createElement("p");
    item_card_title.className="item-card-title";
    item_card_title.innerText=product_title;

    let item_image=document.createElement("img");
    item_image.className="item";
    item_image.src="../IMAGES/"+product_Image+".jpg";

    let item_more_Ditails=document.createElement("a");
    item_more_Ditails.className="item-card-details";
    item_more_Ditails.innerText="Morditailes";
    item_more_Ditails.href="javascript:void(0)";
    item_more_Ditails.onclick= function() {moreDitails(product);};
    

    let pr= document.createElement("br");
    
    item_card_div.append(item_card_title);
    item_card_div.append(item_image);
    item_card_div.append(pr);
    item_card_div.append(item_more_Ditails);


    td.append(item_card_div);
    return td;
}

// export var image1; 
function moreDitails(product)
{
    localStorage.setItem("selected_product",JSON.stringify(product));
    window.location.href = "../HTML/Details.html";
}
function logout()
{
    localStorage.removeItem("AuthUser");
    window.location="../HTML/Login.html";
}

var timer;

function AutoChangeBG()
{
    var i=5;
    if(timer==undefined)
    {
    timer=setInterval(function(){
        if(i==10)
        i=5;
        document.getElementById("homebg").src = "../IMAGES/homebg"+i+".jpg";
        i++;
    },1500);
    }
}
function StopSlider()
{
    console.log("test");
    let bg=document.getElementById("homebg");
    bg.onmouseover=function()
    {
        console.log("test");
        clearInterval(timer);
        timer=undefined;
    }
    bg.onmouseout=AutoChangeBG;


}
showProducts();
