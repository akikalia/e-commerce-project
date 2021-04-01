import AbstractView from "./AbstractView.js";
import NotFound from "./NotFound.js";
import Products from "./Products.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        
    }

    async getHtml() {
        this.setTitle("Home");
        return await fetch('https://fakestoreapi.com/products')
            .then(result => result.json())
            .then(products => { 
                let res = `

                <div class="flex flex-row justify-center align-center m-1"><p class="l-text">All Products</p></div>
                <div class=" grid grid-products">`;
                
                products.forEach(product => {
                    res += `
                    
                    <a class="list-item-product product" href="#products/${product.id}">
                        <img src="${product.image}" alt="${product.title}">
                        <p class="list-item-product-price">${product.price}$</p>
                        <p class="list-item-product-description">${product.title}</p>
                    </a>
                    `
                });
                res += `</div>`;

                return res;
            }).catch(() =>{
                return null;
            });
    }
}