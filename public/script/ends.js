const end_product_div = document.querySelector('#end_product_div');
const end_left_count = document.querySelector('#end_left_count');

let end_products_btn;
let wanted_date = Number(end_left_count.value);

let products = [
    {
        photo: '/images/products/coffee.png',
        name: 'coffee',
        price: '40',
        description: 'harrary coffee from habshah',
        date:{
            year: '2029',
            month: '01',
            day: '01'
        }
    },
    {
        photo: '/images/products/chia.png',
        name: 'chia seeds',
        price: '70',
        description: 'do in water 10minuts and it be big',
        date:{
            year: '2028',
            month: '06',
            day: '01'
        }
    },
    {
        photo: '/images/products/pistachio.png',
        name: 'pistachio',
        price: '60',
        description: 'is jambo and super',
        date:{
            year: '2027',
            month: '01',
            day: '01'
        }
    },
    {
        photo: '/images/products/pistachio.png',
        name: 'hair oil',
        price: '60',
        description: 'is jambo and super',
        date:{
            year: '2025',
            month: '06',
            day: '02'
        }
    },
    {
        photo: '/images/products/pistafchio.png',
        name: 'rosmairy oil',
        price: '60',
        description: 'is jambo and super',
        date:{
            year: '2025',
            month: '05',
            day: '05'
        }
    }
]

end_left_count.onchange = () => {
    if(end_left_count.value == 'custom'){
        prompt('how much day you want')
    }else{
        wanted_date = Number(end_left_count.value);
        update_ends_products();
    }
}

function update_ends_products(){
    end_product_div.innerHTML = '';
    date = new Date();
    day = date.getDate();
    year = date.getFullYear();
    month = date.getMonth()+1;
    if(products.length>0){
        i = 0;
        while(i < products.length){
            convert_year_to_day = (Number(products[i].date.year)-year)*12*30;
            convert_month_to_day = (Number(products[i].date.month)-month)*30;
            count_day = convert_year_to_day+ convert_month_to_day+(Number(products[i].date.day)-Number(day));
            end_product_div.innerHTML += `
                <div class="end_products">
                    <span class="end_products_name_span">${products[i].name}</span>
                    <div>
                        <span>day</span>
                        <span id="end_products_count_day_span">${count_day}</span>
                    </div>
                    <button class="end_products_btn scale_animation">✅</button>
                </div>
            `;
            i++;
        }
        end_products_btn = document.querySelectorAll('.end_products_btn');
        for(let i = 0; i< end_products_btn.length; i++){
            //here add totuch and counter and mouse/i think im cancel the idea
            end_products_btn[i].onclick = () => {
                delete_ends_products(i);
            }
        }
        end_products = document.querySelectorAll('.end_products');
        i = 0;
        while(i < end_products.length){
            fixed = Number(end_products[i].querySelector('#end_products_count_day_span').innerText);
            if(fixed > wanted_date){
                end_products[i].remove();
            }
            i++;
        }
    }
    else {
        alert('not products is near end');
    }
}
function delete_ends_products(id){
    products.splice(id,1);
    update_ends_products();
}

update_ends_products();