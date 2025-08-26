if(localStorage.getItem('account')){
    account = JSON.parse(localStorage.getItem('account'));
    if(account.type=='guest'){
        console.log('welcome a guest');
    }
}else{
    localStorage.setItem('account',JSON.stringify({
        type: 'guest',
        name: 'free',
        password: 'free'
    }));
    location.reload();
}
old = document.body.innerHTML;
document.body.innerHTML=`
    <div class="head">
        <div class="bar_btn">
            <img src="../images/icons/menu.png">
        </div>
        <span id="title_span">
            إدارة المنتجات
        </span>
    </div>
    <div class="bar_window" style="display: none;">
        <div id="bar_home_btn" class="btn_head">
          <img class="icon" src="../images/icons/home.png" placeholder="home">
        </div>
        <div id="bar_products_btn" class="btn_head">
          <img class="icon" src="../images/icons/product.png" placeholder="product">
        </div>
        <div id="bar_calculator_btn" class="btn_head">
          <img class="icon" src="../images/icons/calculator.png" placeholder="calculator">
        </div>
        <div id="bar_date_btn" class="btn_head">
          <img class="icon" src="../images/icons/date.png" placeholder="date">
        </div>
        <div id="bar_orders_btn" class="btn_head">
          <img class="icon" src="../images/icons/order.png" placeholder="order">
        </div>
        <div id="bar_price_calculator_btn" class="btn_head">
          <img class="icon" src="../images/icons/price_calculator.png" placeholder="price calculator">
        </div>
        <div id="bar_more_btn" class="btn_head">
          <img class="icon" src="../images/icons/more.png" placeholder="more">
        </div>
        <span class="by_mmx10d">عواد معمر</span>
    </div>
    <div class="bar_full" style="display: none;"></div>
`;
document.body.innerHTML+=old;
const bar_btn = document.querySelector('.bar_btn');
const bar_window = document.querySelector('.bar_window');
const bar_full = document.querySelector('.bar_full');
const price_calculator_btn = document.querySelector('#price_calculator_btn');
const title_span = document.querySelector('#title_span');

bar_btn.onclick = () => {
    close_bar_window(false);
};
bar_full.onclick = () => {
    close_bar_window();
};
title_span.onclick = () => {
    open_home_page();
}
function close_bar_window(state=true){
    if(!state){
        bar_window.style.display = 'block'
        bar_full.style.display = 'block'
    }else{
        bar_window.style.display = 'none'
        bar_full.style.display = 'none'
    }
}





const bar_home_btn = document.querySelector('#bar_home_btn');
const bar_products_btn = document.querySelector('#bar_products_btn');
const bar_calculator_btn = document.querySelector('#bar_calculator_btn');
const bar_date_btn = document.querySelector('#bar_date_btn');
const bar_orders_btn = document.querySelector('#bar_orders_btn');
const bar_price_calculator_btn = document.querySelector('#bar_price_calculator_btn');
const bar_more_btn = document.querySelector('#bar_more_btn');
bar_home_btn.onclick = () => {
    open_home_page();
};
bar_products_btn.onclick = () => {
    open_products();
}
bar_calculator_btn.onclick = () => {
    open_calculator();
}
bar_date_btn.onclick = () => {
    open_data();
}
bar_orders_btn.onclick = () => {
    open_orders();
}
bar_more_btn.onclick = () => {
    open_other();
};

bar_price_calculator_btn.onclick = () => {
    open_price_calculator();
};



// -----index_script-down--------------------------------------------------------------
// -----index_script-down--------------------------------------------------------------
// -----index_script-down--------------------------------------------------------------
// -----index_script-down--------------------------------------------------------------
// -----index_script-down--------------------------------------------------------------



const bar_calc_btn = document.querySelector('#calc_btn');
const add_product_btn = document.querySelector('.add_product_btn');

calc_btn.onclick = () => {
    open_calculator();
};

data_btn.onclick = () => {
    open_data_and_order();
};

products_btn.onclick = () => {
    open_products();
};

add_product_btn.onclick = () => {
    sessionStorage.setItem('open_add_product','1');
    open_products();
}

price_calculator_btn.onclick = () => {
    open_price_calculator();
}













function open_home_page(){
    location.href = '/';
}
function open_products(){
    location.href = '/products';
}
function open_calculator(){
    location.href = '/calculator';
}
function open_data(){
    location.href = '/ends';
}
function open_orders() {
    location.href = '/orders';
}
function open_price_calculator (){
    location.href = '/other_price_calculator';
}
function open_other() {
    location.href = '/other';
}
function open_data_and_order(){
    location.href = '/data_and_order';
}




//----------------------------------------------
function get(){
    if(localStorage.getItem('products')){
        return JSON.parse(localStorage.getItem('products'));
    }
    else{
        sessionStorage.setItem('back');
        location.href = '/products';
    }
}