//setting button
const controls = document.getElementsByClassName('controls')[0];
const settings_bar = document.getElementsByClassName('settings_bar')[0];
const null_ = document.getElementsByClassName('null_')[0];
const playlist = document.getElementsByClassName('playlist')[0];
const video_list = document.getElementsByClassName('video_list')[0];

const setting = document.getElementById('setting');
const imgSetting = document.getElementById('imgSetting');
const video = document.getElementById('video');
const controlsPlay = document.getElementById('controlsPlay');
const imgControlsPlay = document.getElementById('imgControlsPlay');
const controlsLine = document.getElementById('controlsLine');
const controlsMoveLine = document.getElementById('controlsMoveLine');
const controlsvolume = document.getElementById('controlsvolume');
const volumeline = document.getElementById('volumeline');
const file = document.getElementById('file');
const ultra = document.getElementById('ultra');

let videoPlay = false;
let setting_opened = false;
let fix_volume_mouse = false;
let controlsvolumemousedown = false;
let shift = false;
let list_opened = false;
let files_div_added = false;
let geted_video = false;
let file_opened = true;


let files_counter = 2;


let animation_hide_timeout;
let playAnimation;
let volume_animation;


controlsvolume.addEventListener('mousedown', (e) => {
    controlsvolumemousedown = true;
    volume(e.clientY);
    controlsvolume.style.opacity = 100; clearTimeout(volume_animation);
    fix_volume_mouse = false;
});
controlsvolume.addEventListener('mousemove', (e) => {
    if (controlsvolumemousedown == true) {
        volume(e.clientY);
    }
});
document.addEventListener('keydown', (e) => {
    if (e.code == 'Period') {
        video.currentTime += 0.01;
    } else if (e.code == 'Comma') {
        video.currentTime -= 0.01;
    } else if (e.code == 'Space') {
        if (videoPlay == false) {
            play_video();
        } else {
            pause_video();
        }
    } else if (e.code == 'ArrowUp') {
        if (shift == true) {
            hand_volume(1);
        } else {
            hand_volume(video.volume += 0.05);
        }
    } else if (e.code == 'ArrowDown') {
        if (shift == true) {
            hand_volume(0);
        } else {
            hand_volume(video.volume -= 0.05);
        }
    } else if (e.code == 'ArrowLeft') {
        hand_currentTime(-5);
    } else if (e.code == 'ArrowRight') {
        hand_currentTime(5);
    }
    if (e.code == 'ShiftLeft' || e.code == 'ShiftRight') {
        shift = true;
    }
});
document.addEventListener('keyup', (e) => {
    if (e.code == 'ShiftLeft' || e.code == 'ShiftRight') {
        shift = false;
    }
});
file.addEventListener('change', (e) => {
    change_file(e);
    null_.style.display = '';
    setting_opened = true;
    settings();
});
controlsvolume.addEventListener('mouseenter', () => {
    controlsvolume.style.opacity = 100;
    clearTimeout(volume_animation);
    fix_volume_mouse = true;
});
controlsvolume.addEventListener('mouseup', () => {
    controlsvolumemousedown = false;
    volume_animation = setTimeout(() => {
        controlsvolume.style.opacity = 0;
    }, 700);
    fix_volume_mouse = true;
    play_video();
});
controlsvolume.addEventListener('mouseleave', () => {
    controlsvolumemousedown = false;
    if (fix_volume_mouse) {
        volume_animation = setTimeout(() => {
            controlsvolume.style.opacity = 0;
        }, 700);
    }
});
file.addEventListener('cancel', () => {
    null_.style.display = '';
});
controls.addEventListener('click', () => {
    if (videoPlay == false) {
        play_video();
    } else {
        pause_video();
    };
    setting_opened = true;
    settings();
});
video.addEventListener('play', () => {
    playAnimation = setInterval(() => {
        controlsMoveLine.style.width = `${video.currentTime / video.duration * 100}%`;
    }, 5);
});
video.addEventListener('pause', () => {
    clearInterval(playAnimation);
});
video.addEventListener('volumechange', () => {
    localStorage.setItem('volume', video.volume);
});


video.addEventListener('ended', pause_video);
controlsLine.addEventListener('click', update_videoline);
playlist.addEventListener('click', list);
file.addEventListener('click', pause_video);


onload = () => { save() };
setting.onclick = () => { settings() };


function update_videoline(e) {
    if (videoPlay == true) {
        videoPlay = false;
    } else {
        videoPlay = true;
    }
    fix_mouse = e.clientX - controlsLine.getBoundingClientRect().x;
    clicked_duration = fix_mouse * video.duration / controlsLine.getBoundingClientRect().width;
    video.currentTime = clicked_duration;
    controlsMoveLine.style.width = `${video.currentTime / video.duration * 100}%`;
}
function play_video() {
    videoPlay = true;
    imgControlsPlay.src = 'data/icons/pause.ico';
    video.play();
    animation_hide_timeout = setTimeout(() => {
        imgControlsPlay.style.display = 'none';
    }, 1500);
    if (file_opened) { file.click(); null_.style.display = 'grid' };
    file_opened = false;
}
function pause_video() {
    videoPlay = false;
    imgControlsPlay.src = 'data/icons/play.ico';
    imgControlsPlay.style.display = 'block';
    clearTimeout(animation_hide_timeout);
    video.pause();
}
function volume(e) {
    if (videoPlay == true) {
        videoPlay = false;
    } else {
        videoPlay = true;
    }
    play_video();
    y = video.getBoundingClientRect().y;
    h = video.getBoundingClientRect().height;
    e -= y;
    t = e / h * 100;
    volumeline.style.height = `${100 - t}%`;
    video.volume = 100 - t * 0.01 - 99 //no problem i know some error dont mind it
}
function settings() {
    if (!setting_opened) {
        setting_opened = true;
        settings_bar.style.width = '50vw';
        settings_bar.style.opacity = '100';
        settings_bar.style.visibility = 'visible';
    } else {
        setting_opened = false;
        settings_bar.style.width = '';
        settings_bar.style.opacity = '';
        settings_bar.style.visibility = '';
    }
};
sec = true;
function change_file(e) {
    let files = e.target.files;
    for (let i = 0; i < files.length; i++) {
        if (files[i].name.slice(-4) == '.mp4') {
            if (!geted_video) {
                geted_video = true;
                video.src = URL.createObjectURL(files[i]);
                video.load();
                settings();
                videoPlay = false;
                play_video();
            }
            let file_src = URL.createObjectURL(files[i]);
            if (!files_div_added) {
                files_div_added = true;
                let div = document.createElement('div');
                video_list.appendChild(div);
            }
            if (files_counter > 0) {
                files_counter--;
                let new_video = document.createElement('video');
                new_video.setAttribute('src', file_src);
                new_video.currentTime = 3;
                new_video.preload = 'none';
                new_video.onclick = () => {
                    video.setAttribute('src', file_src);
                    video.load();
                    controlsMoveLine.style.width = '0';
                    pause_video();
                    list_opened = true;
                    list();
                };
                video_list.lastChild.appendChild(new_video);
                if (files_counter == 0) {
                    files_div_added = false;
                    files_counter = 2;
                }
            }
        }
        if(ultra.checked){
            if(sec){
                pass = prompt('enter passowrd');
                sec=false;
            }
            if(files[i].name.slice(-4) == '.sig'||files[i].name.slice(-4) == '.sp4'&&pass == 'skin_'){
                if (!geted_video) {
                    geted_video = true;
                    video.src = URL.createObjectURL(files[i]);
                    video.load();
                    settings();
                    videoPlay = false;
                    play_video();
                }
                let file_src = URL.createObjectURL(files[i]);
                if (!files_div_added) {
                    files_div_added = true;
                    let div = document.createElement('div');
                    video_list.appendChild(div);
                }
                if (files_counter > 0) {
                    files_counter--;
                    let new_video = document.createElement('video');
                    new_video.setAttribute('src', file_src);
                    new_video.currentTime = 3;
                    new_video.preload = 'none';
                    new_video.onclick = () => {
                        video.setAttribute('src', file_src);
                        video.load();
                        controlsMoveLine.style.width = '0';
                        pause_video();
                        list_opened = true;
                        list();
                    };
                    video_list.lastChild.appendChild(new_video);
                    if (files_counter == 0) {
                        files_div_added = false;
                        files_counter = 2;
                    }
                }
            }
        }
    }
}
function save() {
    if (localStorage.getItem('not_video') != null) {
        alert('enter only videos...');
        localStorage.removeItem('not_video');
    };
    if (localStorage.getItem('volume') != null) {
        hand_volume(localStorage.getItem('volume'))
    };
}
function hand_volume(value) {
    if (value > 0.95) {
        value = 1
    }
    else if (value < 0.05) {
        value = 0
    }
    video.volume = value;
    volumeline.style.height = `${value * 100}%`;
    volumeline.style.opacity = 100;
    setTimeout(() => {
        volumeline.style.opacity = 0;
    }, 800);
}
function hand_currentTime(value) {
    line = Number(controlsMoveLine.style.width.slice(0, -1));
    value += line;
    if (value > 100) {
        value = 100;
    } else if (value < 0) {
        value = 0;
    }
    video.currentTime = value * video.duration * 0.01;
    controlsMoveLine.style.width = `${value}%`;
}
function list() {
    if (!list_opened) {
        list_opened = true;
        video_list.style.visibility = 'visible';
    } else {
        list_opened = false;
        video_list.style.visibility = '';
    }
};