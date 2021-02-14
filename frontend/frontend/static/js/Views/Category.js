import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        
    }

    async getHtml() {
        this.setTitle("Category");
        return await fetch('https://fakestoreapi.com/products/category/' + this.params["id"])
            .then(res => res.json())
            .then(products => { 
                let res = `<div class=" grid  grid-products">`;
                
                products.forEach(product => {
                    res += `
                    <a class="list-item-product product " href="#products/${product.id}">
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