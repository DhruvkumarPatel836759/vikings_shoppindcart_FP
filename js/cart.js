var products = {   // for the products 
    123: {
      name : "Boy's Pink T-Shirt",
      desc : "Nike",
      img : "./pic1.jpg",
      price : 50
    },

    124: {
      name : "Boy's Red T-Shirt",
      desc : "Adidas",
      img : "./pic2.jpg",
      price : 75
    },

    125: {
      name : "Boy's Blue T-Shirt",
      desc : " Gucci ",
      img : "./pic3.jpg",
      price : 120
    },

    126: {
      name : "Boy's Blue Short",
      desc : " Luis Vitton ",
      img : "./pic4.jpg",
      price : 200
    },

    127: {
        name : "Boy's Blue Shoes",
        desc : " Bata ",
        img : "./pic5.jpg",
        price : 70
    }

  };
  
  
  
  
  var cart = {
    // properties
    hPdt : null, // products list
    hItems : null, // current cart
    items : {}, // Current items in cart
  
    save : function () // to save items in cart
    {
      localStorage.setItem("cart", JSON.stringify(cart.items));
    },
  
    // Local Storage
    load : function () 
    {
      cart.items = localStorage.getItem("cart");
      if (cart.items == null) { cart.items = {}; }
      else { cart.items = JSON.parse(cart.items); }
    },
  
    // To Empty Cart

    nuke : function () 
    {
      if (confirm("Empty cart?")) 
      {
        cart.items = {};
        localStorage.removeItem("cart");
        cart.list();
      }
    },
  
    // init
    init : function () 
    {
      // for cart
      cart.hPdt = document.getElementById("cart-products");
      cart.hItems = document.getElementById("cart-items");
  
      cart.hPdt.innerHTML = "";
      let p, item, part;
      
      for (let id in products) 
      {
        p = products[id];
        item = document.createElement("div");
        item.className = "p-item";
        cart.hPdt.appendChild(item);
  
        // image of product
        part = document.createElement("img");
        part.src = "images/" +p.img;
        part.className = "p-img";
        item.appendChild(part);
  
        // name of product
        part = document.createElement("div");
        part.innerHTML = p.name;
        part.className = "p-name";
        item.appendChild(part);
  
        // description
        part = document.createElement("div");
        part.innerHTML = p.desc;
        part.className = "p-desc";
        item.appendChild(part);
  
        // for price
        part = document.createElement("div");
        part.innerHTML = "$" + p.price;
        part.className = "p-price";
        item.appendChild(part);
  
        // to add in cart
        part = document.createElement("input");
        part.type = "button";
        part.value = "Add to Cart";
        part.className = "cart p-add";
        part.onclick = cart.add;
        part.dataset.id = id;
        item.appendChild(part);
      }
  
      // to load prevoius cart
      cart.load();
  
      // current item list
      cart.list();

    },


    // List Function
    list : function () 
    {
      cart.hItems.innerHTML = "";
      let item, part, pdt;
      let empty = true;
      for (let key in cart.items) 
      {
        if(cart.items.hasOwnProperty(key)) 
        { 
          empty = false; break; 
        }
      }
  
      // to empty cart
      if (empty) 
      {
        item = document.createElement("div");
        item.innerHTML = "Cart is empty";
        cart.hItems.appendChild(item);
      }

      else 
      {
        var p, total = 0, subtotal = 0;

        for (let id in cart.items) 
        {
          // items
          p = products[id];
          item = document.createElement("div");
          item.className = "c-item";
          cart.hItems.appendChild(item);
  
          // names
          part = document.createElement("div");
          part.innerHTML = p.name;
          part.className = "c-name";
          item.appendChild(part);
  
          // to remove
          part = document.createElement("input");
          part.type = "button";
          part.value = "X";
          part.dataset.id = id;
          part.className = "c-del cart";
          part.addEventListener("click", cart.remove);
          item.appendChild(part);
  
          part = document.createElement("input");
          part.type = "number";
          part.value = cart.items[id];
          part.dataset.id = id;
          part.className = "c-qty";
          part.addEventListener("change", cart.change);
          item.appendChild(part);
  
          subtotal = cart.items[id] * p.price;
          total += subtotal;
        }
  
        item = document.createElement("input");
        item.type = "button";
        item.value = "Empty";
        item.addEventListener("click", cart.nuke);
        item.className = "c-empty cart";
        cart.hItems.appendChild(item);
  
        // proceed to checkout
        item = document.createElement("input");
        item.type = "button";
        item.value = "Checkout =  " + "$" + total;
        item.addEventListener("click", cart.checkout);
        item.className = "c-checkout cart";
        cart.hItems.appendChild(item);
      }
    },
  
    //to add item
    add : function () 
    {
      if (cart.items[this.dataset.id] == undefined) 
      {
        cart.items[this.dataset.id] = 1;
      } 

      else 
      {
        cart.items[this.dataset.id]++;
      }
      cart.save();
      cart.list();
    },
  
    // for quantity
    change : function () 
    {
      if (this.value == 0) 
      {
        delete cart.items[this.dataset.id];
      } 
      else 
      {
        cart.items[this.dataset.id] = this.value;
      }
      cart.save();
      cart.list();
    },
    
    remove : function () 
    {
      delete cart.items[this.dataset.id];
      cart.save();
      cart.list();
    },
    
    checkout : function () 
    {

      alert("Your Order has been Placed Successfully !!!");

    }
  };


  window.addEventListener("DOMContentLoaded", cart.init);