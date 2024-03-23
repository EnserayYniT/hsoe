const btnPlus = document.querySelector('[data-action="plus"]');
const btnMinus = document.querySelector('[data-action="minus"]');
let counter = document.querySelector('[data-counter]');
const cartWrapper = document.querySelector('.cart-wrapper')
window.addEventListener('click',function(event){
    let counter;
    if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
        const counterWrapper = event.target.closest('.counter-wrapper')
        counter = counterWrapper.querySelector('[data-counter]')
    }
    if(event.target.dataset.action === 'plus'){
        counter.innerHTML = ++counter.innerHTML
    }
    if(event.target.dataset.action == 'minus'){
        if(parseInt(counter.innerHTML)>1){
            counter.innerHTML = --counter.innerHTML
        }
    }
});
window.addEventListener('click',function(event){
    if(event.target.hasAttribute('data-cart')){
        const card = event.target.closest('.part-grid');
    const productInfo={
        id:card.dataset.id,
        imgSrc:card.querySelector('.icon-img').getAttribute('src'),
        title:card.querySelector('.name-product').innerHTML,
        price:card.querySelector('.price-product').innerHTML,
        counter:card.querySelector('[data-counter]').innerHTML,
    }
    // console.log(productInfo)
    const cartItemHTML = [`
                <div class="cart-item" data-id${productInfo.id}>
                    <div class="cart-item-img">
                        <img src="${productInfo.imgSrc}" alt="">
                    </div>
                    <div class="cart-content-grid">
                        <p class="text">Ваш заказ</p>
                        <p class="cart-name-product">${productInfo.title}</p>
                        <p class="cart-price-product">${productInfo.price}<sub>KGS</sub></p>
                    </div>
                    <div class="counter-wrapper bucket-wrapper">
                        <div class="cart-items-control" data-action="minus">-</div>
                        <div class="cart-items-control" data-counter>${productInfo.counter}</div>
                        <div class="cart-items-control" data-action="plus">+</div>
                    </div>
                </div>
    `]
        cartWrapper.insertAdjacentElement('beforeend', cartItemHTML)
}
});
// не понял как верстать корзину и что бы вторая window функция заработала
// вроде всё правильно

