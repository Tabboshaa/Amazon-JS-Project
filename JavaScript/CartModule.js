// import { removeFromUserCart } from "./DetailsModule.js";


let UserCart=getAuthUserCart();
let CountNumOfItems;
window.onload=function()
{
    showProducts();
    paintNumberOfItems();
    updateSummryTotalPrice();
}
function getAuthUserCart()
{
    let AuthUser=JSON.parse(localStorage.getItem("AuthUser"));
    let AuthCart=AuthUser.cart;
    return AuthCart;
}
function showProducts()
{
    let table=document.getElementById("table");



    for(let product in UserCart)
    {
        //      //console.log(UserCart[product].id);

        let productId=UserCart[product].id;
        let productTitle=UserCart[product].title;
        let productImage=UserCart[product].image;
        let productPrice=UserCart[product].price;
        var tr=document.createElement("tr");
        tr.name=productId;
        tr.append(createDetailsTd(productTitle,productImage));
        tr.append(createQuntityTd(productPrice));
        tr.append(createPriceTd(productPrice,productId));
        tr.append(createTotalTd(productPrice,productId));
        table.append(tr);
    }
}

function getProductData(product)
{
    ////console.log(product);

}
function createDetailsTd(productTitle,productImage)
{
    let td=document.createElement("td");
    let img=document.createElement("img");
    let div=document.createElement("div");
    let a= document.createElement("a");
    let p= document.createElement("p");
    let btn=document.createElement("button");
////console.log(img);
    td.className="product-Details";
    a.href="../HTML/Details.html";
    img.src=`../IMAGES/${productImage}.jpg`;
    a.href="../HTML/Details.html";
    a.innerText=productTitle;
    p.innerText="";
    btn.innerText="Remove";
    btn.onclick=removeProduct;
    
    div.append(a);
    div.append(p);
    div.append(btn);

    td.append(img);
    td.append(div);
    
    return td;
}

function createQuntityTd(productPrice)
{
    let td =document.createElement("td");
    let input =document.createElement("input");
    
    input.className="quntity";
    input.type="number";
    input.name=productPrice;
    input.value=1;
    input.onchange= updateProductTotalPrice;
    td.append(input);
    
    return td;
}

function createPriceTd(productPrice)
{
    let td=document.createElement("td");
    let span=document.createElement("span");

    span.innerText=productPrice+"EGP";
    span.className="product-price";
    td.append(span);
    return td;
}

function createTotalTd(productPrice,productId)
{
    let td=document.createElement("td");
    // let a=document.createElement("a");
    let a=document.createElement("a");
   
    
    a.innerText=productPrice+"EGP";
    a.name="total";
    a.id=productId;
    a.className="product-price";
    td.append(a); 
    return td;  
}
function updateProductTotalPrice(e)
{   
    ////console.log(e.target);
    let quntity=parseInt(e.target.value);
    let price=parseInt(e.target.name);
    let id =e.target.parentElement.parentElement.name;
    ////console.log(id);
    let span= document.getElementById(id);
    let total= price*quntity;
    span.innerText=total+ "EGP";
    paintNumberOfItems();
    updateSummryTotalPrice();
}

function removeProduct(e)
{
    let productId=e.target.closest("tr").name;
   
    let selectedProduct;
    UserCart=UserCart.filter(function(product)
    {
        if(product.id!=productId)
        return product;
        else
        selectedProduct=product;
    });
    // ////console.log(productId);
    // ////console.log(UserCart);
    // ////console.log(selectedProduct);


     removeFromUserCart(selectedProduct);
     location.reload();
}
 function removeFromUserCart(Selected_product)
{
    let AuthUser1=JSON.parse(localStorage.getItem("AuthUser"));
    AuthUser1.cart.pop(Selected_product);
    localStorage.setItem("AuthUser",JSON.stringify(AuthUser1));
    let users=JSON.parse(localStorage.getItem("users"));
    users=users.map(function(user){
            if(user.username==AuthUser1.username)
            {
                user.cart.pop(Selected_product);
                ////console.log(user.cart);
                
            }
            return user;
    });
   // update local storage
    localStorage.setItem("users",JSON.stringify(users));
    
}

function culcNumOfItems()
{
    let quntityElem=document.getElementsByClassName("quntity");
    let count=0;
    for(let elm of quntityElem)
    {
        count+=parseInt(elm.value);
    }
   return count; 
}
function paintNumberOfItems()
{
    
    let productsCount=culcNumOfItems();
    let NumOfproductElement=document.getElementById("NumOfItems");
        NumOfproductElement.innerText=productsCount;
}

function culcTotalPrice()
{
    let count=0;
    let totalElement=document.getElementsByName("total");
    //console.log(totalElement);
    for(let elm of totalElement)
    {
        ////console.log(elm.innerText);
        count+=parseInt(elm.innerText);
    }
    return count;
}
function updateSummryTotalPrice()
{
    let totalprice=culcTotalPrice();
    ////console.log("dd",totalprice);
    let totalpriceElement=document.getElementById("total_price");
    totalpriceElement.innerText=totalprice+ "EGP";
}