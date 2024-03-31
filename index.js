const counter = document.querySelector('[data-counter]');
const cartWrapper = document.querySelector('.cart-wrapper')
const productPrice = document.querySelector('.producct-price')
window.addEventListener('click', function(event){
    let counter;
    if(event.target.dataset.action === "plus"||event.target.dataset.action === "minus"){
        const counterWrapper = event.target.closest('.data-wrapper')
        counter = counterWrapper.querySelector('[data-counter]')
    }
    if(event.target.dataset.action === "plus"){
        counter.innerHTML = ++ counter.innerHTML
    }
    if(event.target.dataset.action === "minus"){
        if(parseInt(counter.innerHTML)>1){
            counter.innerHTML = -- counter.innerHTML
        }
    }
});
window.addEventListener('click', function(event){
    if(event.target.hasAttribute('data-cart')){
        const card = event.target.closest('.part-grid');
        
        const productInfo={
            id:card.dataset.id,
            title:card.querySelector('.product-name').innerHTML,
            price:card.querySelector('.product-price').innerHTML,
            counter:card.querySelector('[data-counter]').innerHTML,
        };
        // console.log(productInfo);
        itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
        if(itemInCart){
            const counterElement = itemInCart.querySelector('[data-counter]')
            counterElement.innerHTML = parseInt(counter.innerHTML) + parseInt(productInfo.counter);
        }  else {
            const cartItemHTML = `
            <div class="cart-item">
                <div class="bottom-content" data-id="${productInfo.id}">
                    <div class="product-name">${productInfo.title}</div>
                    <div class="product-price">${productInfo.price}</div>
                    <div class="product-total-price">1</div>
                </div>
                <div class="bottom-wrapper data-wrapper">
                    <div data-action="minus">-</div>
                    <div data-counter>${productInfo.counter}</div>
                    <div data-action="plus">+</div>
                </div>
                <button data-delete type="button" class="delete-btn">Delete</button>
            </div>
        `
        cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)
        }
        card.querySelector('[data-counter]').innerHTML='1'
    }
});