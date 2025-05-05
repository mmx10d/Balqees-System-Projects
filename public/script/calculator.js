const body_calculator = document.querySelector('.body_calculator');
const calc_result = document.querySelector('.calc_result');
const calc_show = document.querySelector('#calc_show');
const result_show = document.querySelector('#result_show');
const calc_btns = document.querySelector('.calc_btns');
const btn_num = calc_btns.querySelectorAll('.btn_num');

const plus_btn = document.querySelector('#plus_btn');
const min_btn = document.querySelector('#min_btn');
const div_btn = document.querySelector('#div_btn');
const mul_btn = document.querySelector('#mul_btn');
const equal_btn = document.querySelector('#equal_btn');
const percent_btn = document.querySelector('#percent_btn');

const clear_btn = document.querySelector('#clear_btn');
const neg_pos_btn = document.querySelector('#neg_pos_btn');


let firsttime = true;
let plus_btn_not_click = true;
let min_btn_not_click = true;
let div_btn_not_click = true;
let mul_btn_not_click = true;
let last_operator = false;
let negative = false;
let negative_for_onetime = true;
let inoperatorchoose = false;

let oldnumber = '';
for(let i = 0 ; i < btn_num.length; i++){
    btn_num[i].onclick = () => {
        if(firsttime){
            firsttime = false;
            calc_show.innerText = '';
        }
        if(calc_show.innerText == -0&&negative){
            calc_show.innerText = '-';
        }
        calc_show.innerText +=btn_num[i].innerText;
    };
}



plus_btn.onclick = () => {
    clear_btns();
    if(plus_btn_not_click){
        plus_btn_not_click = false;
        red_button(plus_btn);
        if(!inoperatorchoose){
            inoperatorchoose= true;
            old = calc_show.innerText;
        }
        last_operator = '+';
        calc_show.innerText = '+';
    }
    else{
        plus_btn_not_click = true;
        last_operator = '';
        red_button(plus_btn,false);
    }
};
min_btn.onclick = () => {
    clear_btns();
    if(min_btn_not_click){
        min_btn_not_click = false;
        red_button(min_btn);
        if(!inoperatorchoose){
            inoperatorchoose= true;
            old = calc_show.innerText;
        }
        last_operator = '-';
        calc_show.innerText = '-';
    }
    else{
        min_btn_not_click = true;
        last_operator = '';
        red_button(min_btn,false);
    }
};
div_btn.onclick = () => {
    clear_btns();
    if(div_btn_not_click){
        div_btn_not_click = false;
        red_button(div_btn);
        if(!inoperatorchoose){
            inoperatorchoose= true;
            old = calc_show.innerText;
        }
        last_operator = '/';
        calc_show.innerText = '/';
    }
    else{
        div_btn_not_click = true;
        last_operator = '';
        red_button(div_btn,false);
    }
};
mul_btn.onclick = () => {
    clear_btns();
    if(mul_btn_not_click){
        mul_btn_not_click = false;
        red_button(mul_btn);
        if(!inoperatorchoose){
            inoperatorchoose= true;
            old = calc_show.innerText;
        }
        last_operator = '*';
        calc_show.innerText = '*';
    }
    else{
        mul_btn_not_click = true;
        last_operator = '';
        red_button(mul_btn,false);
    }
};

//cashe varibile to change postive or negtive operation.
let cache_for_negative = '';
neg_pos_btn.onclick = () => {
    cache_for_negative = calc_show.innerText;
    if(negative){
        negative = false;
        calc_show.innerText = calc_show.innerText.slice(1);
    }else{
        negative = true;
        calc_show.innerText = '-';
        calc_show.innerText += cache_for_negative;
    }
};
equal_btn.onclick = () => {
    inoperatorchoose = false;
    if(old != ''){
        Nold = Number(old);
        calc_show.innerText = calc_show.innerText.slice(1);
        Nnew = Number(calc_show.innerText);
        switch(last_operator){
            case '+':
                calc_show.innerText = Nold + Nnew;
            break;
            case '-':
                calc_show.innerText = Nold - Nnew;
            break;
            case '/':
                calc_show.innerText = Nold / Nnew;
            break;
            case '*':
                calc_show.innerText = Nold * Nnew;
            break;
            default:
                alert('not operator');
        }
    }
    clear_btns();
};
//i will come back later...  :
percent_btn.onclick = () => {
    if(old != ''){
        Nold = Number(old);
        calc_show.innerText = calc_show.innerText.slice(1);
        Nnew = Number(calc_show.innerText);
        switch(last_operator){
            case '+':
                calc_show.innerText = Nold + Nold*Number(`${Nnew}`);
            break;
            case '-':
                calc_show.innerText = Nold - Nold+Number(`0.0${Nnew}`);
            break;
            default:
                console.log('its not a percent operator');
        }
    }
    clear_btns();
};
clear_btn.onclick = () => {
    deep_clear();
};
function red_button(btn,state=true){
    if(state){
        btn.style.background = 'red';
    }
    else{
        btn.style.background = '';
    }
}
function clear_btns(){
    red_button(plus_btn,false);
    red_button(min_btn,false);
    red_button(div_btn,false);
    red_button(mul_btn,false);
    plus_btn_not_click = true;
    min_btn_not_click = true;
    div_btn_not_click = true;
    mul_btn_not_click = true;
}
function clear_btns_numbers(){
    plus_btn_not_click = true;
    min_btn_not_click = true;
    div_btn_not_click = true;
    mul_btn_not_click = true;
}
function deep_clear(){
    clear_btns();
    plus_btn_not_click = true;
    min_btn_not_click = true;
    div_btn_not_click = true;
    mul_btn_not_click = true;
    firsttime = true;
    last_operator = false;
    negative = false;
    oldnumber = '';
    calc_show.innerText = '0';
}
function hover_btn_color(btn,state=true){
    if(state){
        btn.style.background = 'rgb(0, 0, 0, 0.1)';
    }
    else{
        btn.style.background = '';
    }
}