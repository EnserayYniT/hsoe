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
    console.log(productInfo)
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