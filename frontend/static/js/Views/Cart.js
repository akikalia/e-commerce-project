import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        
    }


    // async getProductHtml(productRef, pair){
        
    //     return await 
    //         .then(result => result.json())
    //         .then(product => {
    //             pair.quantity += productRef.quantity;
    //             pair.price += product.price;
    //             console.log(product);
    //             return `
    //                 <div class="grid grid-sections-3 cart-section">
    //                     <div>
    //                         <img class="cart-image" src="${product.image}" alt="">
    //                         <p>${product.title}</p>
    //                     </div>
    //                     <div class="flex flex-column justify-center">
    //                         <input class="product-page-input" type="number" value="${productRef.quantity}"/>
    //                     </div>
    //                     <div class="flex flex-column justify-center">
    //                         <p>$${product.price}</p>
    //                     </div>
                        
    //                 </div>
    
    //             `;
    //         }).catch(()=>{
    //             console.log("catch");
    //             return "";
    //         });
    // }

    async getHtml() {
        let cart = await fetch('https://fakestoreapi.com/carts/5')
            .then(result => result.json());

                
        let quantity = 0;
        let price = 0;
        let res = `<div class="grid grid-sections-2rev size-100">
    
        <div class="flex flex-column my-3">
            <div class="grid grid-sections-4 cart-bar">
                <p>Product</p>
                <p>Description</p>
                <p>Quantity</p>
                <p>Subtotal</p>
            </div>`;
        
        let promises = await Promise.all(cart.products.map(productRef =>{
            quantity += productRef.quantity;
            console.log("fetching from api");
            return fetch('https://fakestoreapi.com/products/' + productRef.productId);
        }));

        // promises = Promise.allSettled(promises);
        // console.log(promises);
        let products = await Promise.all(promises.map( promise => promise.json()));
        
        // await Promise.allSettled(products);

        cart.products.map((product, i) => {
            products[i].quantity = product.quantity;
        });
        products.forEach((product)=>{
            console.log("getting result");
            price += product.price;
            res += `
                <div class="grid grid-sections-4 cart-section">
                    <img class="cart-image" src="${product.image}" alt="">
                    <p>${product.title}</p>
                    <div class="flex flex-column justify-center">
                        <input class="product-page-input" type="number" value="${product.quantity}"/>
                    </div>
                    <div class="flex flex-column justify-center">
                        <p>$${product.price}</p>
                    </div>
                </div>
                `;
        });
    
        

        res += `
        <form id="update-cart">
            <button id="update-cart-button" type="submit" class="product-page-button my-1">update</button>
            <p id="update-cart-message" class="hidden">Cart has been updated!</p>
        </form>    
        </div>
        <div class="flex flex-column align-center">
            <div class="checkout-box flex flex-column justify-center align-center my-3 p-3">
                <p class="product-page-title l-text">Purchase Summary: </p>
                <p class="product-page-price my-1">Number of items: ${quantity}</h3>
                <p class="product-page-price my-1">Total price: ${price}$ </p>
                <form id="checkout">
                    <button id="checkout-button" type="submit" class="product-page-button">Checkout</button>
                    <p id="checkout-message" class="hidden">Checkout complete!</p>
                </form>
            </div>
            
            
        </div>
        
        </div>
        <script src="static/js/update-cart.js"></script>   
        <script src="static/js/checkout.js"></script>`;

        this.setTitle("Cart");
        return res;
    
    }
}



