export default class Product{
    
    constructor(id,name,image,price,title,dicsription)
    {   
        this.id=id;
        this.name=name;
        this.image=image;
        this.price=price;
        this.title=title;
        this.dicsription=dicsription;
    }

    // set id(value)
    // {
    //     this.id=value;
    // }
    // get id()
    // {
    //     return this.id;
    // }
}

let products=
[
    {"id":1,"title":"Card Title","image":"item2" , "price":"3000" , "incart":0 ,dicsription:{"brand":"test","modal":"test2"}},
    {"id":2,"title":"Card Title","image":"item2" , "price":"3000" , "incart":0 ,dicsription:[]},
    {"id":3,"title":"Card Title","image":"item2" , "price":"3000" , "incart":0 ,dicsription:[]},

    {"id":4,"title":"Card Title","image":"item2" , "price":"3000" , "incart":0 ,dicsription:[]},
    {"id":5,"title":"Card Title","image":"item2" , "price":"3000" , "incart":0 ,dicsription:[]},
    {"id":6,"title":"Card Title","image":"item2" , "price":"3000" , "incart":0 ,dicsription:[]},

    {"id":7,"title":"Card Title","image":"item2" , "price":"3000" , "incart":0 ,dicsription:[]},
    {"id":8,"title":"Card Title","image":"item2" , "price":"3000" , "incart":0 ,dicsription:[]},
    {"id":9,"title":"Card Title","image":"item2" , "price":"3000" , "incart":0 ,dicsription:[]}

]
localStorage.setItem("products",JSON.stringify(products));