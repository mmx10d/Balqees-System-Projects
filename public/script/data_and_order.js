const ends_btn = document.querySelector('#ends_btn');
const orders_btn = document.querySelector('#orders_btn');

ends_btn.onclick = () => {
    location.href = '/ends';
}
orders_btn.onclick = () => {
    location.href = '/orders';
}