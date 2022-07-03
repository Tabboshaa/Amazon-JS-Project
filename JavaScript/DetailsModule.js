window.addToCart=addToCart;
window.removeFromCart=removeFromCart;

// let test=[{email: "Abdalaziz@gmail.com", phonenumber: "01099881399", username: "Abdalaziz",cart:[]}]
// localStorage.setItem("users",JSON.stringify(test));

//get the slsected product from gallery 
let product=JSON.parse(localStorage.getItem("selected_product") || "[]");
let cart=[];

//get product details 
getProductDetails();

//check if product in cart or not and customize add to cart button 
customizeButton();



function getProductDetails()
{
let product_image=document.getElementById("img");
console.log();
let price=document.getElementById("price");
product_image.src="../IMAGES/"+product.image+".jpg";
price.innerText="EGp"+product.price;
}

function addToCart()
{
    AddProductInUserCart();
    //get AuthUser to check there is login user or not
    let AuthUser=JSON.parse(localStorage.getItem("AuthUser"));

    if(AuthUser==null)
    {
        alert("You need to Login First, Go to Login Page ?");
        window.open("../HTML/Login.html");
    }
    else
    {  
        console.log(AuthUser);
        //update Selcted product in local sotrage as incart product
        product.incart=1;
        localStorage.setItem("selected_product",JSON.stringify(product));
        //add product to cart then update cart in local storage
        cart.push(product);
        localStorage.setItem("cart",JSON.stringify(cart));

        // localStorage.setItem("AuthUser",JSON.stringify(AuthUser));
        
        alert("Product Added To your Cart Successfuly");
        
    }   
    customizeButton();
}
 function removeFromCart()
{
    removeFromUserCart(product);
   cart=JSON.parse(localStorage.getItem("cart"));

   cart= cart.filter(function(p)
    {
        if(product.id!=p.id)
        return p;
        else
        p.incart=0;

    });
    console.log(cart);
    product.incart=0;
    localStorage.setItem("selected_product",JSON.stringify(product));
    localStorage.setItem("cart",JSON.stringify(cart));
    customizeButton();
}
function customizeButton()
{
    let btn=document.getElementById("toCartBtn");
    console.log( product.incart);
        if(product.incart==0)
        {
            btn.name="add";
            btn.firstChild.src="../IMAGES/button.png";
            btn.onclick=addToCart;
        }
        else{
            btn.name="remove"
            btn.firstChild.src="../IMAGES/removebtn.png";
            btn.onclick=removeFromCart;
        }
}

function AddProductInUserCart()
{
    let AuthUser1=JSON.parse(localStorage.getItem("AuthUser"));
    AuthUser1.cart.push(product);
    localStorage.setItem("AuthUser",JSON.stringify(AuthUser1));
    let users=JSON.parse(localStorage.getItem("users"));
    users=users.map(function(user){
            if(user.username==AuthUser1.username)
            {
                user.cart.push(product);
                console.log(user.cart);
                
            }
            return user;
    });
   // update local storage
    localStorage.setItem("users",JSON.stringify(users));
}

export function removeFromUserCart(Selected_product)
{
    let AuthUser1=JSON.parse(localStorage.getItem("AuthUser"));
    AuthUser1.cart.pop(Selected_product);
    localStorage.setItem("AuthUser",JSON.stringify(AuthUser1));
    let users=JSON.parse(localStorage.getItem("users"));
    users=users.map(function(user){
            if(user.username==AuthUser1.username)
            {
                user.cart.pop(Selected_product);
                console.log(user.cart);
                
            }
            return user;
    });
   // update local storage
    localStorage.setItem("users",JSON.stringify(users));
}
