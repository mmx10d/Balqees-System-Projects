let game = document.getElementsByClassName("game")[0];
let box = document.getElementsByClassName("box");
let turn = 0;
let clicked = 0;
let win = false;
let winneris = "";

//viribals the settings
let setting = document.getElementsByClassName("setting")[0];
let setting_button = document.getElementById("setting_button");

//save cancel viribal
let cancel_button = document.getElementById("cancel_button");
let save_button = document.getElementById("save_button"); 


let p0_color = document.getElementById("p0_color");
let p1_color = document.getElementById("p1_color");
let def = document.getElementById("def");


//default value
let player_0_color = "rgb(255,100,100,1)";
let player_1_color = "rgb(100,100,255,1";




let s1 = document.getElementById("square1");
let s2 = document.getElementById("square2");
let s3= document.getElementById("square3");
let s4 = document.getElementById("square4");
let s5 = document.getElementById("square5");
let s6 = document.getElementById("square6");
let s7 = document.getElementById("square7");
let s8 = document.getElementById("square8");
let s9 = document.getElementById("square9");




//create a element
let res = document.createElement("div");
let res_span = document.createElement("span");
let res_div = document.createElement("div");
let res_button = document.createElement("button");
//set class
res.setAttribute("class","result");
//set text
res_button.innerText= "new game";
//mix
res.appendChild(res_span);
res.appendChild(res_div);
res.appendChild(res_button);







//boxes clicked and operators and wins
for(let i =0;i<box.length;i++)
{
    box[i].addEventListener("click",()=>{
        if(box[i].style.background!="")
        {
            null;
        }else
        {
            if(turn ==0)
            {
                box[i].style.background = player_0_color;
                box[i].setAttribute("red","1");
                turn =1;
                clicked++;
            }else
            {
                box[i].style.background = player_1_color;
                box[i].setAttribute("blue","1");
                turn =0;
                clicked++;
            };
            //check
            if(s1.hasAttribute("red","true")&&s2.hasAttribute("red","true")&&s3.hasAttribute("red","true"&&turn == 0))
            {
                win = true;
                winneris = "red";
                setTimeout(()=>{

                },50);
            }
            else if(s3.hasAttribute("red","true")&&s6.hasAttribute("red","true")&&s9.hasAttribute("red","true"&&turn == 0))
            {
                win = true;
                winneris = "red";
                setTimeout(()=>{

                },50);
            }
            else if(s9.hasAttribute("red","true")&&s8.hasAttribute("red","true")&&s7.hasAttribute("red","true"&&turn == 0))
            {
                win = true;
                winneris = "red";
                setTimeout(()=>{

                },50);
            }
            else if(s7.hasAttribute("red","true")&&s4.hasAttribute("red","true")&&s1.hasAttribute("red","true"&&turn == 0))
            {
                win = true;
                winneris = "red";
                setTimeout(()=>{

                },50);
            }
            else if(s1.hasAttribute("red","true")&&s5.hasAttribute("red","true")&&s9.hasAttribute("red","true"&&turn == 0))
            {
                win = true;
                winneris = "red";
                setTimeout(()=>{

                },50);
            }
            else if(s3.hasAttribute("red","true")&&s5.hasAttribute("red","true")&&s7.hasAttribute("red","true"&&turn == 0))
            {
                win = true;
                winneris = "red";
                setTimeout(()=>{

                },50);
            }
            else if(s2.hasAttribute("red","true")&&s5.hasAttribute("red","true")&&s8.hasAttribute("red","true"&&turn == 0))
            {
                win = true;
                winneris = "red";
                setTimeout(()=>{

                },50);
            }
            else if(s4.hasAttribute("red","true")&&s5.hasAttribute("red","true")&&s6.hasAttribute("red","true"&&turn == 0))
            {
                win = true;
                winneris = "red";
                setTimeout(()=>{

                },50);
            }//turn 1

            else if(s1.hasAttribute("blue","true")&&s2.hasAttribute("blue","true")&&s3.hasAttribute("blue","true"&&turn == 1))
            {
                win = true;
                winneris = "blue";
                setTimeout(()=>{

                },50);
            }
            else if(s3.hasAttribute("blue","true")&&s6.hasAttribute("blue","true")&&s9.hasAttribute("blue","true"&&turn == 1))
            {
                win = true;
                winneris = "blue";
                setTimeout(()=>{

                },50);
            }
            else if(s9.hasAttribute("blue","true")&&s8.hasAttribute("blue","true")&&s7.hasAttribute("blue","true"&&turn == 1))
            {
                win = true;
                winneris = "blue";
                setTimeout(()=>{

                },50);
            }
            else if(s7.hasAttribute("blue","true")&&s4.hasAttribute("blue","true")&&s1.hasAttribute("blue","true"&&turn == 1))
            {
                win = true;
                winneris = "blue";
                setTimeout(()=>{

                },50);
            }
            else if(s1.hasAttribute("blue","true")&&s5.hasAttribute("blue","true")&&s9.hasAttribute("blue","true"&&turn == 1))
            {
                win = true;
                winneris = "blue";
                setTimeout(()=>{

                },50);
            }
            else if(s3.hasAttribute("blue","true")&&s5.hasAttribute("blue","true")&&s7.hasAttribute("blue","true"&&turn == 1))
            {
                win = true;
                winneris = "blue";
                setTimeout(()=>{

                },50);
            }
            else if(s2.hasAttribute("blue","true")&&s5.hasAttribute("blue","true")&&s8.hasAttribute("blue","true"&&turn == 1))
            {
                win = true;
                winneris = "blue";
                setTimeout(()=>{

                },50);
            }
            else if(s4.hasAttribute("blue","true")&&s5.hasAttribute("blue","true")&&s6.hasAttribute("blue","true"&&turn == 1))
            {
                win = true;
                winneris = "blue";
                setTimeout(()=>{

                },50);
            }
            
        };
        if(clicked ==9 &&win==false)
        {
            setTimeout(()=>{
                confirm("DRAW");
            },50);
        };
        if(win == true)
        {
            document.body.appendChild(res);
        };
        if (winneris == "blue")
        {
            res_span.innerText = "Second Player win";    
            res_div.style.backgroundColor = player_0_color;
        }else
        {
            res_span.innerText = "First Player win"; 
            res_div.style.background = player_1_color; 
        };

    });
};


//new game function
res_button.addEventListener("click",()=>{
    document.body.removeChild(res);
    for(let i = 0;i<box.length;i++)
    {
        box[i].style.background = "";
        box[i].removeAttribute("red","true");
        box[i].removeAttribute("blue","true");
    };
    win = false;
    trun = 0;
    clicked = 0;
    winneris = "";
});


//hide and show setting
setting_button.addEventListener("click",()=>{
    if(setting.style.opacity == "0")
    {
        setting.style.opacity = "1";
        setting.style.visibility = "visible";
        setting_button.style.opacity = "0";
        setting_button.style.visibility = "hidden";
    }else
    {
        setting.style.opacity = "0";
        setting.style.visibility = "hidden";
        setting_button.style.opacity = "1";
        setting_button.style.visibility = "visible";
    };
});
cancel_button.addEventListener("click",()=>{
    if(setting.style.opacity == "1")
    {
        setting.style.opacity = "0";
        setting.style.visibility = "hidden";
        setting_button.style.opacity = "1";
        setting_button.style.visibility = "visible";
    }else
    {
        setting.style.opacity = "1";
        setting.style.visibility = "visible";
        setting_button.style.opacity = "0";
        setting_button.style.visibility = "hidden";
    };

});
//click on save
save_button.addEventListener("click",()=>{
    for(let i = 30;i>0;i--)
    {
        if(p0_color.value == "rgb(${i},${i},${i})")
        {
            p0_color.value = "rgb(30,30,30)";
        }if(p1_color.value == "rgb(${i},${i},${i})")
        {
            p1_color.value = "rgb(30,30,30)";
        };
    };
    player_0_color = p0_color.value;
    player_1_color = p1_color.value;
    if(setting.style.opacity == "1")
    {
        setting.style.opacity = "0";
        setting.style.visibility = "hidden";
        setting_button.style.opacity = "1";
        setting_button.style.visibility = "visible";
    }else
    {
        setting.style.opacity = "1";
        setting.style.visibility = "visible";
        setting_button.style.opacity = "0";
        setting_button.style.visibility = "hidden";
    };
});