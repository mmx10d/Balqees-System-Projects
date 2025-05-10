/*
ohh i think my code is not a pro codes but i dont mind about it
in reality my english is not the mother language my mother language is arabic
and i stay a 3-4 hourse to create it, i will be should take a 2 hourse but the other hourse
i have a worng with one letter realy beileve me one letter make me rewrite the code
and i have remove the rewrite code and return to this old code and search .
my mind be poor for this one letter for give me error and i dont know why..
ok ok no porblem..

any thing you change in this code can be kill you mind from the errors like me::
be mind my css not good..

i have ideas like make it give me the words of the code of baniry (ASSCI)
but i dont think have a time in reality i dont want do this for is very hard
some of error or bugs dont mind about it..
if you like supprot me dont worry about it your not very important to do that work
i dont know what is word..
but if you love it and you can do that support me :)
dont worry if you cant..
paypal:@mmx10d
youtube: @mmx10d
all social media (mybe) this name is found @mmx10d



enjoy. :)
 */
const main = document.getElementsByClassName('main')[0];
const baniry = document.getElementsByClassName('baniry')[0];
const controll = document.getElementsByClassName('controll')[0];
const result = document.getElementsByClassName('result')[0];
const opt = document.getElementsByClassName('opt')[0];
const ban_all = document.getElementsByClassName('ban_all');
const ban_val = document.getElementsByClassName('ban_val');
const all_keys = document.getElementsByClassName('all_keys');
const keys = document.getElementsByClassName('keys');
const value = document.getElementById('value');
const ban_add = document.getElementById('ban_add');
const ban_remove = document.getElementById('ban_remove');
const hide_add_remove_btn = document.getElementById('hide_add_remove_btn');
let isadd = [];
let total = 0;
let add_clicked = 1;
let max_keys = 12;
let keys_count = 8;
let last_key = 8;
let max_add = 3;
let isani = false;
if(localStorage.getItem('isani') == '1')
{
    isani = true;
    hide_add_remove_btn.style.opacity = 0;
}
update();
function update()
{
    for(let i = 0 ; i < keys.length ; i++)
    {
        keys[i].onclick = ()=>
        {
            if ( keys[i].innerText == '1' )
            {
                keys[i].innerText = '0' ;
                keys[i].style.color = 'white';
                add( 'remove' , i );
            }
            else
            {
                keys[i].innerText = '1' ;
                keys[i].style.color = 'rgb(100, 255, 0)';
                add( 'add' , i ) ;
            }
        }
    }
}

function add ( action , i ) 
{
    if ( action == 'add' )
    {
        total += Number(ban_val[i].innerText);
    }
    else
    {
        total -= Number(ban_val[i].innerText);
    }
    value.innerText = total;
}

ban_add.onclick = ()=>{
    count = 4;
    if(max_add > 0)
    {
        if(add_clicked <2)
        {
            start = 0;
            ban_all[0].removeChild(ban_add);
            while(start < count)
            {
                last_key += last_key;
                let new_ban_val = document.createElement('button');
                let new_keys = document.createElement('span');
                new_ban_val.setAttribute('class','ban_val');
                new_keys.setAttribute('class','keys');
                new_ban_val.innerText = `${String(last_key)}`;
                new_keys.innerText = '0';
                ban_all[0].appendChild(new_ban_val);
                all_keys[0].appendChild(new_keys);
                start++;
            }
            ban_all[0].appendChild(ban_add);
        }
        else
        {
            start = 0;
            count = max_keys;
            let new_ban = document.createElement('div');
            let new_all_keys = document.createElement('div');
            new_ban.setAttribute('class','ban_all');
            new_all_keys.setAttribute('class','all_keys');
            while(start < 8)
            {
                last_key += last_key;
                let new_ban_val = document.createElement('button');
                let new_keys = document.createElement('span');
                new_ban_val.setAttribute('class','ban_val');
                new_keys.setAttribute('class','keys');
                new_ban_val.innerText = `${String(last_key)}`;
                new_keys.innerText = '0';
                new_ban_val.style.fontSize = '1rem';
                new_ban.appendChild(new_ban_val);
                new_all_keys.appendChild(new_keys);
                start++;
            }
            baniry.appendChild(new_ban);
            controll.appendChild(new_all_keys);
            max_add--;
        }
    }
    add_clicked++;
    update();
};

//this var for fun, you can remove it   //  :)       
let count_remove_click = 0;

ban_remove.onclick = ()=>{
    if(keys.length > 1)
    {
        ban_all[ban_all.length-1].removeChild(ban_val[ban_val.length-1]);
        all_keys[all_keys.length-1].removeChild(keys[keys.length-1]);
        keys_count--;
        if(keys_count == 0)
        {
            baniry.removeChild(ban_all[ban_all.length-1]);
            controll.removeChild(all_keys[all_keys.length-1]);
            keys_count = 8;
        }
        update();
        count_remove_click = 0;         //  :)
    }
    else                                //  :)
    {
        count_remove_click++;
        if(count_remove_click > 7)
        {
            location.reload();
        }
    }
    update();
};
hide_add_remove_btn.addEventListener('click',()=>{
    if(hide_add_remove_btn.checked)
    {
        ban_add.style.display = 'none';
        ban_remove.style.display = 'none';
    }
    else
    {
        ban_add.style.display = 'flex';
        ban_remove.style.display = 'flex';
    }
});
if(isani == false)
{
    setTimeout(()=>{hide_add_remove_btn.style.opacity = 0},1000);
    setTimeout(()=>{hide_add_remove_btn.style.opacity = 100},1500);
    setTimeout(()=>{hide_add_remove_btn.style.opacity = 0},3000);
    localStorage.setItem('isani','1');
}

opt.addEventListener('mouseenter',()=>{
    hide_add_remove_btn.style.opacity = 100;
});
opt.addEventListener('mouseout',()=>{
    hide_add_remove_btn.style.opacity = 0;
});
opt.addEventListener('click',()=>{
    if(hide_add_remove_btn.style.opacity == 100)
    {
        hide_add_remove_btn.style.opacity = 0;
    }else
    {
        hide_add_remove_btn.style.opacity = 100;
    }
});
hide_add_remove_btn.addEventListener('mouseenter',()=>{
    hide_add_remove_btn.style.opacity = 100;
});