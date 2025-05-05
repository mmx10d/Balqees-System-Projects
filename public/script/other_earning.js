const price_input = document.querySelector('#price_input');
const count_input = document.querySelector('#count_input');

const clean_radio = document.querySelector('#clean_radio');
const what_radio = document.querySelector('#what_radio');

const clean_radio_span = document.querySelector('#clean_radio_span');
const what_radio_span = document.querySelector('#what_radio_span');

const clean_div = document.querySelector('#clean_div');
const what_div = document.querySelector('#what_div');

const what_div_for_one_span = document.querySelector('#what_div_for_one_span');

const clean_earning = document.querySelector('#clean_earning');
const what_div_sell_it_input = document.querySelector('#what_div_sell_it_input');

const earning_net_div = document.querySelector('#earning_net_div');
const what_earn_div = document.querySelector('#what_earn_div');

const agree = document.querySelector('#agree');
const clear = document.querySelector('#clear');

const net_div_price_span = document.querySelector('#net_div_price_span');
const net_div_count_span = document.querySelector('#net_div_count_span');
const net_div_for_one_span = document.querySelector('#net_div_for_one_span');
const net_div_required_earn_span = document.querySelector('#net_div_required_earn_span');
const net_div_sell_price_span = document.querySelector('#net_div_sell_price_span');

const what_earn_div_price_span = document.querySelector('#what_earn_div_price_span');
const what_earn_div_count_span = document.querySelector('#what_earn_div_count_span');
const what_earn_div_for_one_span = document.querySelector('#what_earn_div_for_one_span');
const what_earn_div_required_sell_sapn = document.querySelector('#what_earn_div_required_sell_sapn');
const what_earn_div_total_span = document.querySelector('#what_earn_div_total_span');
const what_earn_div_earn_span = document.querySelector('#what_earn_div_earn_span');

let price_input_value = 0;
let count_input_value = 1;
let clean_earning_value = 0;
let what_div_sell_it_input_value = 0;

clean_radio.onclick = () => {
    clean_radio_fun();
}
what_radio.onclick = () => {
    what_radio_fun();
}

what_radio_span.onclick = () => {
    what_radio_fun();
}
count_input.addEventListener('change',() => {
    if(what_radio.checked){
        what_radio_fun();
    }
});
count_input.addEventListener('keyup',() => {
    if(what_radio.checked){
        what_radio_fun();
    }
})
clean_radio_span.onclick = () => {
    clean_radio_fun();
}
clear.onclick = () => {
    clearall();
    clear.style.display = 'none';
}
agree.onclick = () => {
    if(price_input.value!=''){
        price_input_value = Number(price_input.value);
    }
    if(count_input.value!=''){
        count_input_value = Number(count_input.value);
    }
    if(clean_earning.value!=''){
        clean_earning_value = Number(clean_earning.value);
    }
    if(what_div_sell_it_input.value !=''){
        what_div_sell_it_input_value = Number(what_div_sell_it_input.value);
    }
    if(clean_radio.checked){
        net_div_price_span.innerText = price_input_value;
        net_div_count_span.innerText = count_input_value;
        net_div_for_one_span.innerText = price_input_value / count_input_value;
        net_div_required_earn_span.innerText = clean_earning_value;
        net_div_sell_price_span.innerText = (price_input_value+clean_earning_value)/count_input_value;
        earning_net_div.style.display = 'block';
        what_earn_div.style.display = 'none';
    }
    else if(what_radio.checked){
        earning_net_div.style.display = 'none';
        what_earn_div.style.display = 'block';
        what_earn_div_price_span.innerText = price_input_value;
        what_earn_div_count_span.innerText = count_input_value;
        what_earn_div_for_one_span.innerText = price_input_value / count_input_value;
        what_earn_div_required_sell_sapn.innerText = what_div_sell_it_input_value;
        what_earn_div_total_span.innerText = what_div_sell_it_input_value*count_input_value;
        if(what_div_sell_it_input_value==0){
            what_earn_div_earn_span.innerText = 0;
        }
        else{
            what_earn_div_earn_span.innerText = what_div_sell_it_input_value*count_input_value-price_input_value;
        }
    }
}




function clean_radio_fun(){
    closealldiv();
    uncheckall();
    clean_radio.checked = true;
    whoischecked();
}
function what_radio_fun(){
    closealldiv();
    uncheckall();
    what_radio.checked = true;
    whoischecked();
    if(price_input.value!=''){
        price_input_value = Number(price_input.value);
    }
    if(count_input.value!=''){
        count_input_value = Number(count_input.value);
    }
    what_div_for_one_span.innerText = price_input_value/count_input_value
}

function uncheckall(){
    clean_radio.checked = false;
    what_radio.checked = false;
}
function whoischecked(){
    what_div.setAttribute('class','hide');
    clean_div.setAttribute('class','hide');
    if(clean_radio.checked){
        clean_div.removeAttribute('class');
    }
    else if(what_radio.checked){
        what_div.removeAttribute('class');
    }
}
function closealldiv(){
    what_earn_div.style.display = 'none';
    earning_net_div.style.display = 'none';
}
function clearall(){
    price_input_value = 0;
    count_input_value = 1;
    clean_earning_value = 0;
    what_div_sell_it_input_value = 0;
    price_input.value = '';
    count_input.value = '';
    clean_earning.value = '';
    what_div_sell_it_input.value = '';
}


// from other price calculator
if(sessionStorage.getItem('price')!=null){
    price_input.value = Number(sessionStorage.getItem('price'));
    count_input.value = Number(sessionStorage.getItem('count'));
    sessionStorage.removeItem('price');
    sessionStorage.removeItem('count');
}