const add_button = document.querySelector('#add_button');
const order_product_div = document.querySelector('#order_product_div');
const order_add_div = document.querySelector('.order_add_div');
const print_btn = document.querySelector('#print_btn');

const order_add_name_input = document.querySelector('#order_add_name_input');
const order_add_count_input = document.querySelector('#order_add_count_input');
const order_add_select = document.querySelector('#order_add_select');
const order_add_add_btn = document.querySelector('#order_add_add_btn');


let orders = [
    {
        name:'cumin nuts',
        count_type: 'kg',
        count: 5
    },
    {
        name:'rosmary oil',
        count_type: 'amount',
        count: 15
    }
];

add_button.onclick = () => {
    order_add_div.style.display = '';
    clear_order_add();
}

order_add_add_btn.onclick = () => {
    order_add_div.style.display = 'none';
    orders.push(
        {
            name: order_add_name_input.value,
            count_type: order_add_select.value,
            count: Number(order_add_count_input.value)
        }
    )
    update_orders();
}
print_btn.onclick =() => {
    order_add_div.style.display = 'none';
    location.href = '/printpage';
}

function update_orders() {
    order_product_div.innerHTML = '';
    i = 0;
    while(i < orders.length){
        order_product_div.innerHTML+=`
            <div class="order_products">
                <span class="order_products_name_span">${orders[i].name}</span>
                <div>
                    <span>${orders[i].count_type}</span>
                    <span>${orders[i].count}</span>
                </div>
                <button class="order_products_remove_btn scale_animation">❌</button>
            </div>
        `;
        i++;
    }
    order_products_remove_btn = document.querySelectorAll('.order_products_remove_btn');
    for(let i = 0 ; i < order_products_remove_btn.length; i++){
        order_products_remove_btn[i].onclick = () => {
            order_add_div.style.display = 'none';
            orders.splice(i,1);
            update_orders();
        }
    }
}
function clear_order_add(){
    order_add_name_input.value = '';
    order_add_select.value = 'amount';
}
update_orders();