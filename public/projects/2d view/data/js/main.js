const view = document.getElementById('view');
const img = document.getElementById('img');
const input = document.getElementsByClassName('input');

let scaleX = 1;
let scaleY = 1;

let rotateX = 0;
let rotateY = 0;

let translateX = 0;
let translateY = 0;
 
let skewX = 0;
let skewY = 0;


let inputisclicked = false;
let viewisclicked = false;
let viewX;
let viewY;


view.addEventListener('mousedown',(e)=>{
    viewX = e.clientX;
    viewY = e.clientY;
    rotateY = viewX*0.6;
    rotateX = viewY*0.6;
    update();
    viewisclicked = true;
})
view.addEventListener('mousemove',(e)=>{
    viewX = e.clientX;
    viewY = e.clientY;
    if(viewisclicked == true)
    {
        rotateY = viewX*0.6;
        rotateX = viewY*0.6;
        update();
    }
})
view.addEventListener('mouseup',(e)=>{
    viewisclicked = false;
})



for(let i = 0 ; i < input.length ; i ++){
    input[i].addEventListener('mousedown',()=>{
        inputisclicked = true;
        change();
    })
    input[i].addEventListener('mouseup',()=>{
        inputisclicked = false;
    })
    input[i].addEventListener('mousemove',()=>{
        change();
    });
    function change(){
        if(inputisclicked == true)
        {
            if(i == 0)
            {
                scaleX = input[i].value*0.05;
                update();
            }
            else if(i == 1)
            {
                scaleY = input[i].value*0.05;
                update();
            }
            else if(i == 2)
            {
                rotateX = input[i].value;
                update();
            }
            else if(i == 3)
            {
                rotateY = input[i].value;
                update();
            }
            else if(i == 4)
            {
                translateX = input[i].value*0.5;
                update();
            }
            else if(i == 5)
            {
                translateY = input[i].value*0.5;
                update();
            }
            else if(i == 6)
            {
                skewX = input[i].value;
                update();
            }
            else if(i == 7)
            {
                skewY = input[i].value;
                update();
            }
        }
    }
};

function update()
{
 img.style.transform = `scaleX(${scaleX}) scaleY(${scaleY}) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px) skewX(${skewX}deg) skewY(${skewY}deg)`;
}