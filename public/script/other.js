const earning_btn = document.querySelector('#earning_btn');
const setting_btn = document.querySelector('#setting_btn');

earning_btn.onclick = () => {
    location.href = '/other_earning';
}
setting_btn.onclick = () => {
    location.href = '/setting';
}