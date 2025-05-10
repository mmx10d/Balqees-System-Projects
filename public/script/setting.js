const true_dark_mod = document.querySelector('#true_dark_mod');
const false_dark_mod = document.querySelector('#false_dark_mod');

true_dark_mod.onclick = () => {
    localStorage.setItem('background','black');
    localStorage.setItem('color','white');
}
true_dark_mod.onclick = () => {
    localStorage.setItem('background','white');
    localStorage.setItem('color','black');
}