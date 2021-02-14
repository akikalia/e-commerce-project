import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        
    }

    async getHtml() {
        this.setTitle("Categories");
        return await fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(categories => { 
                let res = `<div class=" grid  grid-products">`;
                categories.forEach(category => {
                    res += `
                    <a class="list-item-product product" href="#categories/${category}">
                        <p class="list-item-product-price">${category}</p>
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