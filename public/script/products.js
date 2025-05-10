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
const product_show_information_remove_btn = document.querySelector('#product_show_information_remove_btn');
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

let products = [];

//------------------------------------- save
let isfirsttime = true;
if(localStorage.getItem('isfirsttime')){
    isfirsttime = false;
}
if(isfirsttime){
    localStorage.setItem('isfirsttime', '1');
    products.push(
        {
            photo: '/images/products/coffee.png',
            name: 'قهوة',
            price: '40',
            description: 'هرري اصلي ماهي تقليد',
            date:{
                year: '2200',
                month: '01',
                day: '01'
            }
        },
        {
            photo: '/images/products/chia.png',
            name: 'بذور الشيا',
            price: '70',
            description: 'حطه بمويه 10 دقايق تساعد السمين على النحف',
            date:{
                year: '2200',
                month: '06',
                day: '01'
            }
        },
        {
            photo: '/images/products/pistachio.png',
            name: 'فستق',
            price: '60',
            description: 'جامبو سوبر درجه اولى',
            date:{
                year: '2027',
                month: '01',
                day: '01'
            }
        },
        {
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3xRgajM6LZcQHKAwo-PYIfBmPGaKyrQlezPKWWm-1RVr102o5Zw&s=10&ec=72940544',
            name: 'ماء الورد',
            price: '7',
            description: 'ممتاز للبشرة',
            date:{
                year: '2025',
                month: '08',
                day: '24'
            }
        },
        {
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdyKjHUR_Zl-1T20NR13ah9MEiq7ubiI7c_JOjSxtOVrwK8xiymw&s=10&ec=72940544',
            name: 'بخور امراتي',
            price: '999',
            description: 'للرايقين فقط',
            date:{
                year: '2022',
                month: '05',
                day: '05'
            }
        },
        {
            photo: 'https://www.google.com/imgres?q=%D8%AE%D9%84%20%D8%A7%D9%84%D8%AA%D9%81%D8%A7%D8%AD&imgurl=https%3A%2F%2Fcdn.salla.sa%2FqQqpAm%2F74fa2e66-8e65-4337-b279-21f954e9d25c-1000x1000-GwxBrfBgO1kTkVLPztlMPojbgzyLllJO08kYUwxw.jpg&imgrefurl=https%3A%2F%2Fvillagemarket.com.sa%2F%25D8%25A8%25D8%25B1%25D8%25A7%25D8%25BA-%25D8%25AE%25D9%2584-%25D8%25A7%25D9%2584%25D8%25AA%25D9%2581%25D8%25A7%25D8%25AD-%25D8%25A7%25D9%2584%25D8%25B9%25D8%25B6%25D9%2588%25D9%258A-%25D8%25A7%25D9%2584%25D8%25B7%25D8%25A8%25D9%258A%25D8%25B9%25D9%258A-100-946-%25D9%2585%25D9%2584%2Fp1732898382&docid=pgtEUraIIsl3GM&tbnid=jsz8OyjcQyAYCM&vet=12ahUKEwj54uDD2pmNAxVuxAIHHfabFxoQM3oECBkQAA..i&w=1000&h=1000&hcb=2&ved=2ahUKEwj54uDD2pmNAxVuxAIHHfabFxoQM3oECBkQAA',
            name: 'خل التفاح',
            price: '38',
            description: '',
            date:{
                year: '2025',
                month: '09',
                day: '05'
            }
        }
    )
    if(sessionStorage.getItem('back')){
        sessionStorage.removeItem('back');
        location.href = '/ends';
    }
}
else {
    products = get();
}
//-------------------------------------





// let products = [
//     {
//         photo: '/images/products/coffee.png',
//         name: 'قهوة',
//         price: '40',
//         description: 'هرري اصلي ماهي تقليد',
//         date:{
//             year: '2200',
//             month: '01',
//             day: '01'
//         }
//     },
//     {
//         photo: '/images/products/chia.png',
//         name: 'بذور الشيا',
//         price: '70',
//         description: 'حطه بمويه 10 دقايق تساعد السمين على النحف',
//         date:{
//             year: '2200',
//             month: '06',
//             day: '01'
//         }
//     },
//     {
//         photo: '/images/products/pistachio.png',
//         name: 'فستق',
//         price: '60',
//         description: 'جامبو سوبر درجه اولى',
//         date:{
//             year: '2027',
//             month: '01',
//             day: '01'
//         }
//     }
// ]


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
        alert('تقدر تحمل الصور فقط');
    }
    else {
        alert('نجح التحميل');
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
    add_product_add_btn.innerText = 'حفظ';
}
product_show_information_remove_btn.onclick = () => {
    product_show_information.style.display = 'none';
    products.splice(last_click_of_product,1);
    product_div.innerHTML = '';
    add_product_btn.style.display = '';
    update_products();
}

let search;
search_btn.onclick = () => {
    search = search_input.value.trim();
    if(search!=''){
        if(search == '[update]'){
            add_more_products();
            product_div.innerHTML = '';
            update_products();
        }
        else if(search == '[clear]'){
            localStorage.clear();
            sessionStorage.clear();
            location.reload();
        }
        else{
            search_in_products(search);
        }
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
    //------------------------
    localStorage.setItem('products', JSON.stringify(products));
    //------------------------
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
        alert('لم يتم العثور على المنتج..');
    }
}
function add_more_products(){
    products.push({
        "photo": "https://cdn.pixabay.com/photo/2016/11/29/04/17/cumin-1867398_960_720.jpg",
        "name": "بذور الكمون",
        "price": "25",
        "description": "تستخدم في الطهي ولها فوائد صحية متعددة",
        "date": { "year": "2025", "month": "06", "day": "15" }
      },
      {
        "photo": "https://cdn.pixabay.com/photo/2017/07/22/10/17/coriander-2529186_960_720.jpg",
        "name": "بذور الكزبرة",
        "price": "20",
        "description": "تُضفي نكهة مميزة على الأطباق",
        "date": { "year": "2025", "month": "06", "day": "25" }
      },
      {
        "photo": "https://cdn.pixabay.com/photo/2019/03/14/15/06/fennel-seeds-4055263_960_720.jpg",
        "name": "بذور الشمر",
        "price": "30",
        "description": "مفيدة للهضم وتستخدم في المشروبات",
        "date": { "year": "2025", "month": "07", "day": "05" }
      },
      {
        "photo": "https://cdn.pixabay.com/photo/2018/02/02/17/29/nature-3125912_960_720.jpg",
        "name": "بذور الهيل",
        "price": "45",
        "description": "تستخدم في القهوة والحلويات",
        "date": { "year": "2025", "month": "07", "day": "15" }
      },
      {
        "photo": "https://cdn.pixabay.com/photo/2017/01/06/23/21/cloves-1959573_960_720.jpg",
        "name": "بذور القرنفل",
        "price": "35",
        "description": "مطهرة ومفيدة لصحة الفم",
        "date": { "year": "2025", "month": "07", "day": "25" }
      },
      {
        "photo": "https://cdn.pixabay.com/photo/2016/11/22/18/14/mustard-1850656_960_720.jpg",
        "name": "بذور الخردل",
        "price": "18",
        "description": "تستخدم في الصلصات والمخللات",
        "date": { "year": "2025", "month": "08", "day": "04" }
      },
      {
        "photo": "https://cdn.pixabay.com/photo/2016/03/05/19/02/caraway-1238253_960_720.jpg",
        "name": "بذور الكراوية",
        "price": "28",
        "description": "تساعد في تخفيف آلام البطن",
        "date": { "year": "2025", "month": "08", "day": "14" }
      },
      {
        "photo": "https://cdn.pixabay.com/photo/2016/03/05/21/33/sesame-1238680_960_720.jpg",
        "name": "بذور السمسم",
        "price": "22",
        "description": "غنية بالكالسيوم وتستخدم في الخبز",
        "date": { "year": "2025", "month": "08", "day": "24" }
      },
      {
        "photo": "https://cdn.pixabay.com/photo/2016/11/29/09/22/dill-1868758_960_720.jpg",
        "name": "بذور الشبت",
        "price": "26",
        "description": "تضاف إلى الأطباق والمخللات",
        "date": { "year": "2025", "month": "09", "day": "03" }
      },
      {
        "photo": "https://cdn.pixabay.com/photo/2016/03/05/22/06/celery-1239424_960_720.jpg",
        "name": "بذور الكرفس",
        "price": "40",
        "description": "تُستخدم في الحساء والسلطات",
        "date": { "year": "2025", "month": "09", "day": "13" }
      },
    )
}

update_products();