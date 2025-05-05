const price_calculator_div = document.querySelector('#price_calculator_div');

const price_input = document.querySelector('#price_input');
const count_input = document.querySelector('#count_input');

const price_span = document.querySelector('#price_span');
const count_span = document.querySelector('#count_span');
const total_span = document.querySelector('#total_span');

const agree = document.querySelector('#agree');
const close_btn = document.querySelector('#close_btn');

let price = 0;
let count = 1;

close_btn.onclick = () => {
    price_calculator_div.style.display = 'none';
}
agree.onclick = () => {
    if(price_input.value!=''){
        price = Number(price_input.value);
    }
    if(count_input.value!=''){
        count = Number(count_input.value);
    }
    price_span.innerText = price;
    count_span.innerText = count;
    total_span.innerText = price/count;
    price_calculator_div.style.display = 'block';
}
earning_btn.onclick = () => {
    sessionStorage.setItem('price',price);
    sessionStorage.setItem('count',count);
    location.href = '/other_earning';
}