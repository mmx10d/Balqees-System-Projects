const search_input = document.querySelector('#search_input');
const search_btn = document.querySelector('#search_btn');

const add_product_div = document.querySelector('#add_product_div');
const add_product_add_btn = document.querySelector('#add_product_add_btn');
const add_product_cancel_btn = document.querySelector('#add_product_cancel_btn');
const product_div = document.querySelector('.product_div');
const uploade_photo = document.querySelector('#uploade_photo');
const add_photo_photo_img = document.querySelector('#add_photo_photo_img');
const add_photo_span = document.querySelector('#add_photo_span');

const add_photo_div = document.querySelector('#add_photo_div');
const add_product_name_input = document.querySelector('#add_product_name_input');
const add_product_price_input = document.querySelector('#add_product_price_input');
const add_product_date_input = document.querySelector('#add_product_date_input');
const add_product_description_input = document.querySelector('#add_product_description_input');

const product_show_information = document.querySelector('.product_show_information')
const product_show_information_close_btn = document.querySelector('#product_show_information_close_btn');
const product_show_information_edit_btn = document.querySelector('#product_show_information_edit_btn');
const product_show_information_photo_img = document.querySelector('#product_show_information_photo_img');
const product_show_information_name_span = document.querySelector('#product_show_information_name_span');
const product_show_information_price_span = document.querySelector('#product_show_information_price_span');
const product_show_information_expire_span = document.querySelector('#product_show_information_expire_span');
const product_show_information_description_span = document.querySelector('#product_show_information_description_span');

let product_div_done_btn;

let all_products = null;

let open_add_product_automatic = false;


let added_photo = false;
let add_photo_ready;

let edit_state = false;
let search_state = false;

//click on product to show his information
let last_click_of_product = null;

let add_product_name = '';
let add_product_price = 0;


let products = [
    {
        photo: '/images/products/coffee.png',
        name: 'coffee',
        price: '40',
        description: 'harrary coffee from habshah',
        date:{
            year: '2200',
            month: '01',
            day: '01'
        }
    },
    {
        photo: '/images/products/chia.png',
        name: 'chia seeds',
        price: '70',
        description: 'do in water 10minuts and it be big',
        date:{
            year: '2200',
            month: '06',
            day: '01'
        }
    },
    {
        photo: '/images/products/pistachio.png',
        name: 'pistachio',
        price: '60',
        description: 'is jambo and super',
        date:{
            year: '2027',
            month: '01',
            day: '01'
        }
    }
]


if(sessionStorage.getItem('open_add_product')!=null){
    open_add_product_automatic = true;
    sessionStorage.removeItem('open_add_product');
}
if(open_add_product_automatic){
    add_product_div.style.display = 'block';
    open_add_product_automatic = false;
}

add_product_btn.onclick = () => {
    add_product_add_btn.innerText = 'add';
    add_product_div.style.display = 'block';
    add_product_btn.style.display = 'none';
    clear_add_product();
}
add_product_cancel_btn.onclick = () => {
    edit_state = false;
    add_product_btn.style.display = '';
    add_product_div.style.display = 'none';
    if(search_state){
        add_product_btn.style.display = 'none';
    }
}

add_photo_div.onclick = () => {
    uploade_photo.click();
}



uploade_photo.onchange = (e)=> {
    file = e.target.files[0];
    if(file.type != 'image/gif'){
        alert('can uploade only photo');
    }
    else {
        alert('succufull');
        //come back letter and fix it with added_photo_ready and added input
    }
}
add_product_add_btn.onclick = () => {
    //edit the product info...
    if(edit_state){
        edit_state = false;
        products[last_click_of_product].name = add_product_name_input.value;
        products[last_click_of_product].price = add_product_price_input.value;
        products[last_click_of_product].date.year = add_product_date_input.value.slice(0,4);
        products[last_click_of_product].date.month = add_product_date_input.value.slice(5,7);
        products[last_click_of_product].date.day = add_product_date_input.value.slice(8);
        products[last_click_of_product].description = add_product_description_input.value;
        clear_add_product();
        add_product_div.style.display = 'none';
        product_div.innerHTML = '';
        update_products();
        add_product_btn.style.display = '';
    }
    else{
        if(add_product_name_input.value!=''&&add_product_price_input.value!=''){
            if(added_photo){
                products.push(
                    {
                        photo: add_photo_ready,
                        name: add_product_name_input.value,
                        price: add_product_price_input.value,
                        description: add_product_description_input.value,
                        date:{
                            year: add_product_date_input.value.slice(0,4),
                            month: add_product_date_input.value.slice(5,7),
                            day: add_product_date_input.value.slice(8)
                        }
                    }
                )
            }else{
                products.push(
                    {
                        photo: '/images/products/defaulte.png',
                        name: add_product_name_input.value,
                        price: add_product_price_input.value,
                        description: add_product_description_input.value,
                        date:{
                            year: add_product_date_input.value.slice(0,4),
                            month: add_product_date_input.value.slice(5,7),
                            day: add_product_date_input.value.slice(8)
                        }
                    }
                )
            }
            product_div.innerHTML = '';
            add_product_div.style.display = 'none';
            add_product_btn.style.display = 'flex';
            update_products();
            add_product_btn.style.display = '';
        }
        else {
            if(add_product_name_input.value==''){
                add_product_name_input.style.background = 'red';
                setTimeout(() => {
                    add_product_name_input.style.background = '';
                },500)
            }
            if(add_product_price_input.value==''){
                add_product_price_input.style.background = 'red';
                setTimeout(() => {
                    add_product_price_input.style.background = '';
                },500)
            }
        }
    }
}
product_show_information_close_btn.onclick = () => {
    product_show_information.style.display = 'none';
    add_product_btn.style.display = '';
};
product_show_information_edit_btn.onclick = () => {
    edit_state = true;
    product_show_information.style.display = 'none';
    clear_add_product();
    add_product_div.style.display = 'block';
    add_photo_photo_img.setAttribute('src',products[last_click_of_product].photo)
    add_product_name_input.value = products[last_click_of_product].name;
    add_product_price_input.value = products[last_click_of_product].price;
    add_product_date_input.value = `${products[last_click_of_product].date.year}-${products[last_click_of_product].date.month}-${products[last_click_of_product].date.day}`;
    add_product_description_input.value = products[last_click_of_product].description;
    add_product_add_btn.innerText = 'save';
}

let search;
search_btn.onclick = () => {
    search = search_input.value.trim();
    if(search!=''){
        search_in_products(search);
    }
}

function add_product_function(photo, name, price){
    product_div.innerHTML += `
        <div class="product">
            <div>
                <img src="${photo}">
            </div>
            <span>${name}</span>
            <span class="product_price">${price}</span>
        </div>
    `
}

function update_products(){
    i = 0;
    while(i < products.length){
        add_product_function(
            products[i].photo,
            products[i].name,
            products[i].price,
        )
        i++;
    }
    all_products = document.querySelectorAll('.product');
    for(let i = 0; i < all_products.length;i++){
        all_products[i].onclick = () => {
            last_click_of_product = i;
            show_information(i);
            add_product_div.style.display = 'none';
        }
    }
}
//back later
function show_information(id){
    add_product_btn.style.display = 'none';
    product_show_information.style.display = 'block';
    product_show_information_photo_img.src = products[id].photo;
    product_show_information_name_span.innerText = products[id].name;
    product_show_information_price_span.innerText = products[id].price;
    product_show_information_description_span.innerText = products[id].description;
    product_show_information_expire_span.innerText = `
        y${products[id].date.year} m${products[id].date.month} d${products[id].date.day}
    `;
}

function clear_add_product(){
    add_photo_photo_img.src = '../images/products/defaulte.png'
    add_product_name_input.value = '';
    add_product_price_input.value = '';
    add_product_description_input.value = '';
    add_product_date_input.value = '';
}

function search_in_products (name){
    search_state = true;
    i = 0;
    founded = [];
    while(i < products.length){
        if(products[i].name.indexOf(name)!=-1){
            founded.push(i);
        }
        i++;
    }
    console.log(founded);
    if(founded.length > 0){
        add_product_btn.style.display = 'none';
        product_div.innerHTML = '';
        i = 0;
        while( i < founded.length){
            add_product_function(
                products[founded[i]].photo,
                products[founded[i]].name,
                products[founded[i]].price,
            )
            i++;
        }
        product_div.innerHTML +=
        `
        <button id='product_div_done_btn'>X</button>
        `
        all_products = document.querySelectorAll('.product');
        for(let i = 0; i < all_products.length;i++){
            all_products[i].onclick = () => {
                last_click_of_product = founded[i];
                show_information(founded[i]);
            }
        }
        product_div_done_btn = document.querySelector('#product_div_done_btn');
        product_div_done_btn.onclick = () => {
            product_div_done_btn.style.display = 'none';
            product_div.innerHTML = '';
            update_products();
            add_product_btn.style.display = '';
            search_state = false;
        }
    }
    else{
        alert('Products not found...');
    }
}

update_products();