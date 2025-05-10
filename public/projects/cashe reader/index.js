const content = document.querySelector('.content');
const player = document.querySelector('.player');
const filereader = document.querySelector('.filereader');
const video = document.querySelector('#video');
const img = document.querySelector('#img');
const audio = document.querySelector('#audio');
const hidden = document.querySelector('#hidden');
const download_btn = document.querySelector('.download_btn');
const file_type = document.querySelector('.file_type');
const next_btn = document.querySelector('.next');
const back_btn = document.querySelector('.back');

let files =[];
let filesname =[];
let filestype =[];
let played = -1;
document.addEventListener('keypress',(e)=> {
    if(e.code == 'Space'){
        reversvideoplayed();
    }
});



filereader.onchange= (e)=> {

    player.innerHTML='';
    for(file of e.target.files){
        if(audio.checked){
            if(file.type== 'audio/mpeg'){
                files.push(URL.createObjectURL(file))
                filestype.push(file.type)
                filesname.push(filesname)
            }
            else{
                URL.revokeObjectURL(file)
            }
        }
        if(video.checked){
            if(file.type== 'video/mp4'){
                files.push(URL.createObjectURL(file))
                filestype.push(file.type)
                filesname.push(filesname)
            }
            else{
                URL.revokeObjectURL(file)
            }
        }
        if(img.checked){
            if(file.type== 'image/gif'){
                files.push(URL.createObjectURL(file))
                filestype.push(file.type)
                filesname.push(filesname)
            }
            else{
                URL.revokeObjectURL(file)
            }
        }
        if(hidden.checked){
            if(file.type== ''){
                files.push(URL.createObjectURL(file))
                filestype.push(file.type)
                filesname.push(filesname)
            }
            else{
                URL.revokeObjectURL(file)
            }
        }
    }
    next();
};

next_btn.onclick = ()=>{next()};
back_btn.onclick = ()=>{back()};

download_btn.onmousedown = ()=> {
    if(played > 0 && played < files.length -1){
        downloadfile(files[played].src,filesname[played]);
    }
}

function pause(){
    player.querySelector('video').pause();
}
function play(){
    player.querySelector('video').play();
}
function reversvideoplayed(){
    if(player.querySelector('video').paused){
        play();
    }
    else{
        pause();
    }
}

function next(){
    //if not files selected.
    if(files.length < 1){
        if(video.checked||img.checked||audio.checked||hidden.checked){
            alert('not found');
        }
        else{
            alert('⬇ select ⬇')
        }
        location.reload();
    }
    else{
        if(document.querySelector('.reader')){
            document.querySelector('.reader').remove();
            document.querySelector('hr').remove();
            content.style.height = '97vh';
        }
        if(played > files.length-2){
            played= files.length-2
        }
        else{
            played++;
        }
        player.innerHTML = `
            <video onerror="notvideo()" src="${files[played]}" controls></video>
        `;
        player.querySelector('video').play();
        getfiletype(filestype[played]);
    }
}
function back(){
    if(played < 1){
        played= 1
    }
    else{
        played--;
    }
    player.innerHTML = `
        <video onerror="notvideo()" src="${files[played]}" controls></video>
    `;
    player.querySelector('video').play();
    getfiletype(filestype[played]);
}

function notvideo(){
    player.innerHTML = `
        <img src="${files[played]}">
    `;
}
function getfiletype(type){
    switch(type){
        case 'audio/mpeg' :
            file_type.innerText = 'audio';
            break;
        case 'img/gif':
            file_type.innerText = 'img/gif'
            break;
        case 'video/mp4':
            file_type.innerText = 'video'
            break;
        default:
            file_type.innerText = 'Hidden';
    }
}

function downloadfile(href,name){
    let a = document.createElement('a');
    a.href = href;
    a.download = name
    a.style.display = 'none';

    document.body.appendChild(a);
    a.click();
    a.remove();
}


let r= 1;
let g= 1;
let b= 1;
rf = false;
gf = false;
bf = false;
setInterval(()=>{
    if(r < 255 && r > 0){
        r++;
    }
    else if(g < 255 && g > 0){
        g++;
    }
    else if(b < 255 && b > 0){
        b++;
    }
    else if(r > 255){
        r--;
    }
    else if(g > 255){
        g--;
    }else if(b > 255){
        b--;
    }
    document.body.style.background = `rgb(${r}, ${g}, ${b})`;
},5);