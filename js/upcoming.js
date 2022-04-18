const list = document.querySelector('.list');

const sort_name_btn = document.querySelector('.sort-options .sort-name');
const sort_meta_btn = document .querySelector('.sort-options .sort-meta');
const sort_price_btn = document.querySelector('.sort-options .sort-price');

// Using Object Literal

let list_items = [
    {
        name:'Boy T-shirt',
        meta:'Yellow',
        price:'25$'
    },
    
    {
        name:'Girl T-shirt',
        meta:'Pink',
        price:'25$'
    },
    
    {
        name:'Nike shoes',
        meta:'White',
        price:'37$'
    },
    
    {
        name:'Adidas Jacket',
        meta:'Black',
        price:'80$'
    },
    
    {
        name:'Denim Jeans',
        meta:'Blue',
        price:'50$'
    },
    
    {
        name:'Girl Track',
        meta:'Orange',
        price:'45$'
    },
    
    {
        name:'Socks',
        meta:'White',
        price:'10$'
    },
    
    {
        name:'Gloves',
        meta:'Black',
        price:'25$'
    },
];


let desc = false;
sort_name_btn.addEventListener('click', () => {
    let array = sort_array_by(list_items, 'name', desc );
    displayList(array);
    desc = !desc;
});

sort_meta_btn.addEventListener('click', () => {
    let array = sort_array_by(list_items, 'meta', desc );
    displayList(array);
    desc = !desc;
});

sort_price_btn.addEventListener('click', () => {
    let array = sort_array_by(list_items, 'price', desc );
    displayList(array);
    desc = !desc;
});



function sort_array_by (array, sort, desc){
    array.sort(function(a, b) {
        if(a[sort] < b[sort] )
        {
            return -1;
        }

        if(a[sort] > b[sort] ) 
        {
            return 1;
        }

        return 0;

    });

    if(desc) array.reverse();
    return array;

};



function displayList (array = []) 
{
    list.innerHTML ="";
    
    for(let i = 0; i < array.length; i++) 
    {
        let item = array[i];
        
        let item_element = document.createElement('div');
        item_element.classList.add('list-item');
    
        let title = document.createElement('div');
        title.classList.add('item-title');
        title.innerText =item.name;
        
        item_element.appendChild(title);


        let meta = document.createElement('div');
        meta.classList.add('item-meta');
        meta.innerText =item.meta;
        
        item_element.appendChild(meta);


        let price = document.createElement('div');
        price.classList.add('item-price');
        price.innerText =item.price;
        
        item_element.appendChild(price);

        
        list.appendChild(item_element);
        
    }
}

displayList(list_items);